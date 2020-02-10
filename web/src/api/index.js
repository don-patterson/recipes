import data from "./data.json";

const _encodeEntry = kv => kv.map(encodeURIComponent).join("=");

const encodeQueryParams = params => {
  const entries = Object.entries(params);
  if (entries.length === 0) {
    return "";
  }

  return "?" + entries.map(_encodeEntry).join("&");
};

class FakeApi {
  static get(collection, params = {}) {
    const url = "/" + collection + encodeQueryParams(params);
    return data[url];
  }
}

export {FakeApi};
