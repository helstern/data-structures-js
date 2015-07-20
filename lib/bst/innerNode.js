/**
 *
 * @constructor
 * @param {LeafNode} leftLeaf
 * @param {LeafNode} rightLeaf
 */
function InnerNode(value, leftLeaf, rightLeaf) {
    "use strict";
    this.value = value;
    this.leftChild = leftLeaf;
    this.rightChild = rightLeaf;
}

module.exports = InnerNode;
