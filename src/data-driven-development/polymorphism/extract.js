import { map } from 'hexlet-pairs-data';
import { getName, getAttribute } from './tags';

const mapping = {
  img: t => getAttribute('src', t),
  a: t => getAttribute('href', t),
  link: t => getAttribute('href', t),
};

const getLink = ({ name, attributes }) => attributes[links[name]];

export default tags => map(tag => mapping[getName(tag)](tag), tags);
