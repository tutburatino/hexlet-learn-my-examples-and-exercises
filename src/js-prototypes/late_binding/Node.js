function getAttrsLine() {
  return Object.entries(this.attributes)
    .map(([key, value]) => ` ${key}="${value}"`).join('');
}

function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
  this.getAttrsLine = getAttrsLine;
}

export default Node;
