var expect = require("chai").expect;

var constants = require('../../lib/bst/Constants.js');
var LeafNode = require('../../lib/bst/LeafNode.js');
var InnerNode = require('../../lib/bst/InnerNode.js');
var ChildPosition = require('../../lib/bst/ChildPosition.js');

describe("Binary search tree child position", function() {

    describe("allows insert", function() {
        it("when both children are leaf", function() {

            var child =  new LeafNode();
            var parentNode = new InnerNode(5, child, child);

            var position;
            position = new ChildPosition(constants.POSITION_LEFT, parentNode);
            expect(position.allowsInsert()).true;

            position = new ChildPosition(constants.POSITION_RIGHT, parentNode);
            expect(position.allowsInsert()).true;
        })
    })

});
