const noop = () => {};

const _encodeEntry = kv => kv.map(encodeURIComponent).join("=");

const encodeQueryParams = params => {
  const entries = Object.entries(params);
  if (entries.length === 0) {
    return "";
  }

  return "?" + entries.map(_encodeEntry).join("&");
};

const sleep = millis => new Promise(r => setTimeout(r, millis));

export {encodeQueryParams, noop, sleep};
