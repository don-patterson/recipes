export const unixNow = () => new Date().getTime() / 1000;

export const minutesSince = unixTimestamp => {
  return Math.floor((unixNow() - unixTimestamp) / 60);
};

export const minutesUntil = unixTimestamp => {
  return Math.floor((unixTimestamp - unixNow()) / 60);
};

export class Cache {
  constructor(expiryMinutes = 15) {
    this.expiryMinutes = expiryMinutes;
    this.items = {};
  }

  set = (key, value) => {
    this.items[key] = {timestamp: unixNow(), value};
    return value;
  };

  get = async (key, fetchLatest) => {
    const cached = this.items[key];
    if (
      cached === undefined ||
      minutesSince(cached.timestamp) > this.expiryMinutes
    ) {
      return this.set(key, await fetchLatest(key));
    }
    return cached.value;
  };
}
