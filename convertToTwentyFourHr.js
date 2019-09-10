module.exports = time => {
  const isAm = time.slice(-2) === "AM";
  const remainingTimeArr = time.slice(0, -2).split(":");

  if (!isAm && remainingTimeArr[0] !== "12") {
    remainingTimeArr[0] = `${Number(remainingTimeArr[0]) + 12}`;
  } else if (isAm && remainingTimeArr[0] === "12") {
    remainingTimeArr[0] = "00";
  }

  if (remainingTimeArr[0].length === 1) {
    remainingTimeArr[0] = `0${remainingTimeArr[0]}`;
  }

  return remainingTimeArr.join(":");
};
