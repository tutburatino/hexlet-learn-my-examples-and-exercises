const attrToStr = a => a;

const getAttributes = data => data.filter(n => !(n instanceof Array || typeof n === 'string'))
  .map(attrToStr)
  .join('');

const getBody = (data) => {
  const result = typeof data === 'string'
    ? data
    : data.filter(n => n instanceof Array)
      .map(buildTag);
  return result.join('');
};

const buildHtml = (data) => {
  const [tag, ...i] = data;
  return `<${tag}${getAttributes(i)}>${getBody(i)}</${tag}>`;
};

export default buildHtml;
