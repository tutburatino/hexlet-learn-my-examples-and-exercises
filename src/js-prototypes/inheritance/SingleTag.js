import Node from './Node';

export default class SingleTag extends Node {
  toString() {
    return `<${this.name}${this.getAttrsLine()}>`;
  }
}
