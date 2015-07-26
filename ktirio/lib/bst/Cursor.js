var constants = require('./Constants.js');
var LeafNode = require('./LeafNode.js');
var ChildPosition = require('./ChildPosition.js');

/**
 * @param {InnerNode} startNode
 * @constructor
 */
function Cursor(startNode) {
    "use strict";
    this.current = startNode;
    this.currentPosition = undefined;
}

Cursor.prototype.valueOfCurrent = function() {
    "use strict";
    var value = this.current.value;

    return value;
}

/**
 * @returns {ChildPosition|undefined}
 */
Cursor.prototype.positionOfCurrent = function() {
    "use strict";

    return this.currentPosition;
}

/**
 * @returns {ChildPosition}
 */
Cursor.prototype.positionOfChild = function(childPosition) {
    "use strict";

    var position = new ChildPosition(this.current, childPosition);
    return position;
}

/**
 * @returns {boolean}
 */
Cursor.prototype.hasNext = function(childPosition) {
    "use strict";

    if (childPosition == constants.POSITION_LEFT) {
        return this.hasNextLeft();
    } else if (childPosition == constants.POSITION_RIGHT) {
        return this.hasNextRight();
    }

    return false;
}

Cursor.prototype.hasNextLeft = function() {
    "use strict";

    if (this.current.leftChild instanceof LeafNode) {
        return false;
    }

    return true;
}

Cursor.prototype.hasNextRight = function() {
    "use strict";

    if (this.current.rightChild instanceof LeafNode) {
        return false;
    }

    return true;
}

Cursor.prototype.moveRight = function() {
    "use strict";

    if (false == this.hasNextRight()) {
        throw new Error('Illegal cursor move to the right');
    }

    var previous = this.current;
    this.current = previous.rightChild;

    this.currentPosition = new ChildPosition(previous, constants.POSITION_RIGHT);

    return previous.value;
}

Cursor.prototype.moveLeft = function() {
    "use strict";

    if (false == this.hasNextLeft()) {
        throw new Error('Illegal cursor move to the left');
    }

    var previous = this.current;
    this.current = previous.leftChild;

    this.currentPosition = new ChildPosition(previous, constants.POSITION_RIGHT);

    return previous.value;
}

module.exports = Cursor;
