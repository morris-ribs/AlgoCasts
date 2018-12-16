// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

function circular(list) {
    const nodeList = {};
    let node = list.getFirst();
    while(node != null) {
        if (!!nodeList[node.data]) {
            return true;
        }
        nodeList[node.data] = true;
        node = node.next;
    }
    return false;
}

module.exports = circular;
