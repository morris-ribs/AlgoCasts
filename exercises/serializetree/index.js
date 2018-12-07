const T = require('./node');
const Node = T.Node;

function serialize(node) {  
  if (node == null || typeof node === "undefined") {
    return "#EMPTY#";
  }

  return (node.val || "") + "," + serialize(node.left)  + "," + serialize(node.right);
}

function stringToNode(nodeAsString) {
  if (nodeAsString.length > 0) {
    const currentNodeAsString = nodeAsString.splice(0, 1)[0];
    if (currentNodeAsString === "#EMPTY#") {
      return null;
    }
    const node = new Node(currentNodeAsString, stringToNode(nodeAsString), stringToNode(nodeAsString));  
    return node;
  }
}

function deserialize(nodeAsString) {
  const arrayOfNodes = nodeAsString.split(",");
  const tree = stringToNode(arrayOfNodes);
  return tree;
}

const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
console.log(deserialize(serialize(node)).left.left.val);

module.exports = {serialize, deserialize};