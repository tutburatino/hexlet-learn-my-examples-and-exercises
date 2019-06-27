import Node from './Node';

export default class PairedTag extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const childString = this.children.join('');
    return `<${this.name}${this.getAttrsLine()}>${this.body}${childString}</${this.name}>`;
  }
}
