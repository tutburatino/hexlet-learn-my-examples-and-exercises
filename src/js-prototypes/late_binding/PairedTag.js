import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttrsLine()}>${this.body}${this.children.join('')}</${this.name}>`;
}

export default function PairedTag(name, attributes, body, children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
