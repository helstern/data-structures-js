var LeafNode = require('./LeafNode.js');
var InnerNode = require('./InnerNode.js');

module.exports = {

    /**
     * @param value
     * @returns {InnerNode}
     */
    createInnerNode: function (value) {
        "use strict";
        var leftLeaf = new LeafNode;
        var rightLeaf = new LeafNode;

        var innerNode = new InnerNode(value, leftLeaf, rightLeaf);
        return innerNode;
    }
}
