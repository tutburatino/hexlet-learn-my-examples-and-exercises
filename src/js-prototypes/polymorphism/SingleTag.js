export default class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttrsLine() {
    const attrs = this.attributes;
    return Object.keys(attrs)
      .map(key => ` ${key}="${attrs[key]}"`).join('');
  }

  toString() {
    return `<${this.name}${this.getAttrsLine()}>`;
  }
}
