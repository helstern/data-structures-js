var constants = require('./Constants.js');

/**
 * @param value
 * @param {Function} comparator
 * @constructor
 */
function FinderNavigator(value, comparator) {
    "use strict";
    this.value = value;
    this.comparator = comparator;
}

/**
 * @param {Cursor} cursor
 * @returns {ChildPosition}
 */
FinderNavigator.prototype.navigate = function(cursor) {
    "use strict";

    var comparisonResult = this._findNode(cursor);

    if (comparisonResult == 0) {
        var position = cursor.positionOfCurrent();
        return position;
    }

    if (comparisonResult < 0) {
        var position = cursor.positionOfChild(constants.POSITION_LEFT);
        return position;
    }

    var position = cursor.positionOfChild(constants.POSITION_RIGHT);
    return position;

}

/**
 *
 * @param {Cursor} cursor
 * @param {int} comparisonResult
 * @private
 */
FinderNavigator.prototype._advanceCursor = function(cursor, comparisonResult) {
    "use strict";

    if (comparisonResult == 0) {
        return false;
    }


    if (comparisonResult < 0 && true == cursor.hasNext(constants.POSITION_LEFT)) {
        cursor.moveLeft();
        return true;
    }

    if (comparisonResult > 0 && true == cursor.hasNext(constants.POSITION_RIGHT)) {
        cursor.moveRight();
        return true;
    }

    return false;
}

/**
 * @param {Cursor} cursor
 */
FinderNavigator.prototype._findNode = function (cursor) {

    var cursorValue = cursor.valueOfCurrent();
    var comparisonResult = this.comparator(this.value, cursorValue);

    var cursorHasAdvanced = this._advanceCursor(cursor, comparisonResult);
    if (false == cursorHasAdvanced) {
        return comparisonResult;
    }

    do {
        cursorValue = cursor.valueOfCurrent();
        comparisonResult = this.comparator(this.value, cursorValue);

        cursorHasAdvanced = this._advanceCursor(cursor, comparisonResult);
    } while (cursorHasAdvanced);

    return comparisonResult;
}

