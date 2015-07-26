var Cursor = require('./Cursor.js');
var FinderNavigator = require('./FinderNavigator.js');

/**
 * @param rootValue
 * @param {Function} valueComparator
 * @param innerNodeFactory
 * @constructor
 */
function Tree(rootValue, valueComparator, balanceStrategy, innerNodeFactory) {
    "use strict";
    var rootNode = innerNodeFactory.createInnerNode(rootValue);

    this.rootNode = rootNode;
    this.valueComparator = valueComparator;
    this.innerNodeFactory = innerNodeFactory;
    this.balanceStrategy = balanceStrategy;
}

/**
 * @param {FinderNavigator} navigator
 */
Tree.prototype.navigate = function(navigator) {
    "use strict";
    var cursor = new Cursor(this.rootNode);
    navigator.navigate(cursor);

}

Tree.prototype.contains = function(value) {
    "use strict";
    var cursor = new Cursor(this.rootNode);
    var childPosition = this._findPosition(value, cursor);

    if (childPosition.isLeaf()) {
        return false;
    }

    return true;
}

Tree.prototype.delete = function(value) {
    "use strict";
    var cursor = new Cursor(this.rootNode);
    var childPosition = this._findPosition(value, cursor);

    if (childPosition.isLeaf()) {
        return false;
    }

    this.balanceStrategy.delete(cursor);
    var newRoot = this.balanceStrategy.balance(cursor);

    if (newRoot !== undefined) {
        var oldRoot = this.rootNode;
        this.rootNode = newRoot;
    }

    return true;
}

Tree.prototype.insert = function(value) {
    "use strict";
    var cursor = new Cursor(this.rootNode);
    var childPosition = this._findPosition(value, cursor);

    if (false == childPosition.isLeaf()) {
        return true;
    }

    this.balanceStrategy.insert(cursor);
    var newRoot = this.balanceStrategy.balance(cursor);

    if (newRoot !== undefined) {
        var oldRoot = this.rootNode;
        this.rootNode = newRoot;
    }

    return true;
}

/**
 *
 * @param value
 * @param {Cursor} cursor
 * @returns {ChildPosition}
 * @private
 */
Tree.prototype._findPosition = function (value, cursor) {
    "use strict";
    var navigator = new FinderNavigator(value, this.valueComparator);
    var childPosition = navigator.navigate(cursor);

    return childPosition;
}

module.exports = Tree;
