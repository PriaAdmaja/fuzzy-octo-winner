const rankResult = (prevValue, newValue) => {
  const result = [];
  const updatedValue = [...prevValue];

  for (let i = 0; i < newValue.length; i++) {
    updatedValue.push(newValue[i]);
    const updatedData = updatedValue
      .filter((d, i, arr) => arr.indexOf(d) === i)
      .sort((a, b) => b - a);
    const rankResult = updatedData.indexOf(newValue[i]) + 1;
    result.push(rankResult);
  }
  return result;
};

const prevValue = [100, 90, 80, 80];
const newValue = [70, 90, 105];
console.log(rankResult(prevValue, newValue));
