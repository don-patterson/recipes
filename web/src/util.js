import {useEffect, useState} from "react";

const noop = () => {};

const _encodeEntry = kv => kv.map(encodeURIComponent).join("=");

const encodeQueryParams = params => {
  const entries = Object.entries(params);
  if (entries.length === 0) {
    return "";
  }

  return "?" + entries.map(_encodeEntry).join("&");
};

const windowDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

const useWindowDimensions = () => {
  const [dimensions, setDimensions] = useState(windowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
};

const sleep = millis => new Promise(r => setTimeout(r, millis));

const last = array => array[array.length - 1];

export {
  encodeQueryParams,
  last,
  noop,
  sleep,
  windowDimensions,
  useWindowDimensions,
};
