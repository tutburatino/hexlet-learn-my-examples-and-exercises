function Node(name) {
  this.name = name;
  this.getName = function getName() {
    return this.name;
  };
}

function PairedNode(name, body) {
  Node.apply(this, [name]);
  this.body = body;
}

const node = new PairedNode('div');
console.log(node.getName());
