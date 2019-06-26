export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  getAttrsLine() {
    const attrs = this.attributes;
    return Object.keys(attrs)
      .map(key => ` ${key}="${attrs[key]}"`).join('');
  }

  toString() {
    const childString = this.children.map(c => c.toString()).join('');
    return `<${this.name}${this.getAttrsLine()}>${this.body}${childString}</${this.name}>`;
  }
}
