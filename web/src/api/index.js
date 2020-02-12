import data from "./data.json";
import {encodeQueryParams, sleep} from "../util";

class FakeApi {
  static async get(collection, params = {}) {
    const url = "/" + collection + encodeQueryParams(params);
    await sleep(2000);
    return data[url];
  }
}

export {FakeApi};
