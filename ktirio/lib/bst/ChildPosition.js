
var constants = require('./Constants.js');
var LeafNode = require('./LeafNode.js');
var InnerNode = require('./InnerNode.js');
var util = require('util');

/**
 *
 * @param {string} type
 * @param {InnerNode} parent
 * @constructor
 */
function ChildPosition(type, parent) {
    "use strict";

    if (false == util.isString(type)) {
        throw new Error('illegal first argument passed to constructor ChildPosition: ' + typeof type)
    }

    if (false == parent instanceof InnerNode) {
        throw new Error('illegal second argument passed to constructor ChildPosition ' + typeof parent)
    }

    this.type = type;
    this.parent = parent;
}

/**
 *
 * @returns {undefined|LeafNode|InnerNode}
 * @private
 */
ChildPosition.prototype._child = function() {
    "use strict";

    var child = undefined;
    if (this.type == constants.POSITION_LEFT) {
        child = this.parent.leftChild
    } else if (this.type == constants.POSITION_RIGHT) {
        child = this.parent.rightChild
    }

    return child;
}

ChildPosition.prototype.isLeaf = function() {
    "use strict";

    var child = this._child();
    if (child instanceof LeafNode) {
        return true;
    }

    return false;
}

/**
 * @returns {boolean}
 */
ChildPosition.prototype.allowsDelete = function() {
    "use strict";

    var child = this._child();
    if (child instanceof InnerNode) {
        return true;
    }

    return false;
}

/**
 * @returns {boolean}
 */
ChildPosition.prototype.allowsInsert = function() {
    "use strict";

    var isLeaf = this.isLeaf();
    return isLeaf;
}

/**
 * @param value
 * @returns {boolean}
 * @throws Error
 */
ChildPosition.prototype.insert = function(value) {
    "use strict";

    if (!this.allowsInsert()) {
        throw new Error('position does not allow insertion')
    }

    return false;
}

module.exports = ChildPosition;
