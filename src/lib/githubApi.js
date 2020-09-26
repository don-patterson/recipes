import {Store} from "pullstate";

const limits = new Store({
  remaining: null,
  resetOn: null,
});

const ls = async (user, repo, path = "") => {
  const url = `https://api.github.com/repos/${user}/${repo}/contents/${path}`;
  const response = await fetch(url);

  limits.update(state => {
    state.remaining = response.headers.get("X-Ratelimit-Remaining");
    state.resetOn = response.headers.get("X-Ratelimit-Reset");
  });

  return await response.json();
};

export {ls, limits};
