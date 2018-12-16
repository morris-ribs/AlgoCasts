// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    const last = list.getLast();
    let ind = 0;
    while (ind < n) {
        fast = fast.next;
        ind++;
    }

    while (fast != last) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

module.exports = fromLast;
