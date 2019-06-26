import { identity } from 'lodash/fp';
import buildNode from './buildNode';

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
  const args = rest.reduce((acc, node) => {
    const { name, process } = getProperty(node);
    return { ...acc, [name]: process(node, parse) };
  }, root);
  return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;
