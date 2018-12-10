// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node != null) {
            count++;
            node = node.next;
        }
        return count;
    }

    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node != null) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }

        return null;
    }

    getFirst() {
        return this.getAt(0);
    }

    getLast() {
        return this.getAt(this.size() - 1);
    }
    
    insertAt(data, index) {
        const nodeToInsert = new Node(data);
        if (this.head == null) {
            this.head = nodeToInsert;
            return;
        }

        if (index === 0) {
            nodeToInsert.next = this.head;
            this.head = nodeToInsert;
            return;
        }

        let previousNode = this.getAt(index-1);
        if (previousNode == null) {
            previousNode = this.getLast();
        }
        
        nodeToInsert.next = previousNode.next;
        previousNode.next = nodeToInsert;
    }

    insertFirst(data) {
        this.insertAt(data, 0);
    }

    insertLast(data) {
        this.insertAt(data, this.size());
    }

    removeAt(index) {
        if (this.head == null) {
            return;
        }
        
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let previousNode = this.getAt(index-1);
        if (previousNode == null || previousNode.next == null) {
            return;
        }

        previousNode.next = previousNode.next.next;
    }

    removeFirst() {
        this.removeAt(0);
    }

    removeLast() {
        this.removeAt(this.size()- 1);
    }

    clear() {
        this.head = null;
    }

    forEach(fn) {
        let node = this.head;
        let index = 0;
        while(node != null) {
            fn(node, index++);
            node = node.next;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}

// const list = new LinkedList();
// list.insertLast(1);
// list.insertLast(2);
// list.insertLast(3);
// list.insertLast(4);

// list.forEach(node => {
//     node.data += 10;
// });


// for (let node of list) {
//     console.log(node.data);
// }

module.exports = { Node, LinkedList };
