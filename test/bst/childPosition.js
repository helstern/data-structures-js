var expect = require("chai").expect;

var constants = require('../../lib/bst/constants.js');
var LeafNode = require('../../lib/bst/leafNode.js');
var InnerNode = require('../../lib/bst/innerNode.js');
var ChildPosition = require('../../lib/bst/childPosition.js');


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
