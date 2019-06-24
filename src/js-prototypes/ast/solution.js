import { identity } from 'lodash/fp';

const singleTagsList = new Set(['hr', 'img', 'br']);

const attrsToStr = attrs => Object.keys(attrs)
  .map(key => ` ${key}="${attrs[key]}"`).join('');

const properties = [
  {
    name: 'body',
    check: t => typeof t === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: t => t instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: t => t instanceof Object,
    process: identity,
  },
];

const getProperty = item => properties.find(({ check }) => check(item));

const parse = (data) => {
  const [first, ...rest] = data;

  const root = {
    name: first,
    attributes: {},
    body: '',
    children: [],
  };
  return rest.reduce((acc, node) => {
    const { name, process } = getProperty(node);
    return { ...acc, [name]: process(node, parse) };
  }, root);
};

const render = (ast) => {
  const {
    name,
    attributes,
    body,
    children,
  } = ast;

  return (singleTagsList.has(name)
    ? `<${name}${attrsToStr(attributes)}>`
    : `<${name}${attrsToStr(attributes)}>${body}${children.map(render).join('')}</${name}>`
  );
};
export { parse, render };
