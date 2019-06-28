const f = (...numbers) => {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const inner = (...rest) => f(sum, ...rest);
  inner.valueOf = () => sum;
  return inner;
};

export default f;
