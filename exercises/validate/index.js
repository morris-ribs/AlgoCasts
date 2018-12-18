// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
function validate(node, min = null, max = null) {
    if (node == null) {
        return true;
    }

    if (min != null && node.data < min) {
        return false;
    }

    if (max != null && node.data > max) {
        return false;
    }

    let isLeftOk = true, isRightOk = true;

    // left hand
    if (node.left) {
        isLeftOk = validate(node.left, min, node.data);
    }

    // right hand
    if (node.right) {
        isRightOk = validate(node.right, node.data, max);
    }

    return isLeftOk && isRightOk;
}

module.exports = validate;
