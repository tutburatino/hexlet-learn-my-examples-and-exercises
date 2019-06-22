const attrsToStr = attrs => Object.entries(attrs)
  .map(([key, value]) => ` ${key}="${value}"`)
  .join('');

const tagsProperties = [
  {
    name: 'body',
    check: d => typeof d === 'string',
  },
  {
    name: 'children',
    check: d => d instanceof Array,
  },
  {
    name: 'attributes',
    check: d => d instanceof Object,
  },
];

const getProperty = data => tagsProperties.find(({ check }) => check(data));

const buildHtml = (data) => {
  const [first, ...rest] = data;

  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };

  const tag = rest.reduce((acc, node) => {
    const { name } = getProperty(node);
    return { ...acc, [name]: node };
  }, root);

  return `<${tag.name}${attrsToStr(tag.attributes)}>${tag.body}${tag.children.map(t => buildHtml(t)).join('')}</${tag.name}>`;
};

export default buildHtml;
