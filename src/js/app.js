const orderByProps = (obj, arr) => {
  const resultSortedByInput = [];
  const resultSortedAlphabetical = [];
  arr.forEach((item) => {
    resultSortedByInput.push({ [item]: obj[item] });
  });
  for (const key in obj) {
    if (!arr.includes(key)) {
      resultSortedAlphabetical.push({
        [key]: obj[key],
      });
    }
  }
  resultSortedAlphabetical.sort((a, b) => {
    if (Object.keys(a)[0] < Object.keys(b)[0]) { return -1; }
    return 1;
  });
  return resultSortedByInput.concat(resultSortedAlphabetical);
};

export default orderByProps;
