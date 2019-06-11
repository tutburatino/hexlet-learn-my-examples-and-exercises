const convert = arr => arr.reduce(
  (acc, [key, value]) => (
    { ...acc, [key]: value instanceof Array ? convert(value) : value }),
  {},
);

export default convert;
