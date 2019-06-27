export default class Node {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getName() {
    return this.name;
  }

  getAttrsLine() {
    const attrs = this.attributes;
    return Object.keys(attrs)
      .map(key => ` ${key}="${attrs[key]}"`).join('');
  }
}
