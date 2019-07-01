import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttrsLine()}>`;
}

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = toString;
