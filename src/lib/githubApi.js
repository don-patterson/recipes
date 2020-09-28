import {Store} from "pullstate";
import {minutesUntil, Cache} from "./util";

const limits = new Store({
  remaining: null,
  minutesUntilReset: null,
});

const _httpCache = new Cache();

const _handleHeaders = headers => {
  limits.update(state => {
    state.remaining = headers.get("X-Ratelimit-Remaining");
    state.minutesUntilReset = minutesUntil(headers.get("X-Ratelimit-Reset"));
  });
};

const _fetchFromGithub = async url => {
  const response = await fetch(url);
  if (!response.ok) {
    console.error("Failed to fetch url:", url);
    return [];
  }

  _handleHeaders(response.headers);

  return await response.json();
};

const ls = async (user, repo, path = "") => {
  const url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`;
  return _httpCache.get(url, _fetchFromGithub);
};

export {ls, limits};
