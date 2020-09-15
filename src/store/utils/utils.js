let beautyCount = (count) => {
  const millions = Math.floor(count / 1000000);
  if (millions != 0) {
    return `${millions} M`;
  }

  const thousands = Math.floor(count / 1000);
  if (thousands != 0) {
    return `${thousands} K`;
  }

  return count;
};

const utils = {
  beautyCount,
};

export default utils;
