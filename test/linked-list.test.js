const assert = require('chai').assert;
const expect = require('chai').expect;
const linkedList = require('../linked-list');


describe('test size', function () {

    it('add single element should give proper size', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.size();
        // Assert
        assert.equal(result, 1);
    })

    it('add multiple elements should give proper size', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.size();
        // Assert
        assert.equal(result, 3);
    })
})

describe("test add new node", function () {
    it("should add single node", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let list = new linkedList.LinkedList(node1);
        // Act
        list.add(70);
        let result = list.head.next.data;
        // Assert
        assert.equal(parseInt(result), 70, 'data in added new node is not expected');
    })
    it("should add multiple nodes", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let list = new linkedList.LinkedList(node1);
        // Act
        list.add(5);
        list.add(10);
        list.add(72);
        let result = list.head.next.next.next.data;
        // Assert
        assert.equal(parseInt(result), 72, 'data in added new node is not expected');
    })    
})

describe("test insertAt", function () {
    it("should insertAt node", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.insertAt(80, 2);
        let result = list.head.next.next.data;
        // Assert
        assert.equal(parseInt(result), 80, 'data in inserted new node at position is not expected');
    })

    it("should insertAt multiple nodes", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.insertAt(80, 2);
        list.insertAt(95, 3);
        let second_node_data = list.head.next.next.data;
        let third_node_data = list.head.next.next.next.data;
        // Assert
        assert.equal(parseInt(second_node_data), 80, 'data in inserted new node at position 2 is not expected');
        assert.equal(parseInt(third_node_data), 95, 'data in inserted new node at position 3 is not expected');
    })
})

describe("test remove from index", function () {
    it("should remove single node from index 0", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.removeFrom(0);
        let result = list.head.data;
        // Assert
        assert.equal(parseInt(result), 5, 'data in node 0 is not expected');
    })

    it("should remove single node from index 1", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.removeFrom(1);
        let result = list.head.next.data;
        // Assert
        assert.equal(parseInt(result), 10, 'data in node 1 is not expected');
    })

    it("should remove single node from index 2", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.removeFrom(2);
        let result = list.head.next.data;
        // Assert
        assert.equal(parseInt(result), 5, 'data in node 1 is not expected');
    })

    it("should remove multiple nodes from index 1", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        let node4 = new linkedList.Node(15);
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.removeFrom(1);
        list.removeFrom(1);
        let result = list.head.next.data;
        // Assert
        assert.equal(parseInt(result), 15, 'data in node 1 is not expected');
    })

    it("should throw error index out of range after try to delete on non-existing index", function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        expect(function () {
            list.removeFrom(3)
        }).to.throw(RangeError);
    })
})

describe('Test remove node', () => {
    it('should remove node 0 and show correct data', () => {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.removeNode(node1);
        let result = list.head.data;
        // Assert
        assert.equal(parseInt(result), 5, 'data in node 1 is not expected');
    })

    it('should remove multiple nodes and show correct data', () => {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.removeNode(node2);
        list.removeNode(node1);
        let result = list.head.data;
        // Assert
        assert.equal(parseInt(result), 10, 'data in node 1 is not expected');
        assert.equal(list.size(), 1, 'size is not expected');
    })

    it('should return -1, receive non existing node', () => {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.removeNode(new linkedList.Node(20));
        // Assert
        assert.equal(parseInt(result), -1, 'data in node 1 is not expected');
    })

    it('should return -1, receive string', () => {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.removeNode(new linkedList.Node('somestring'));
        // Assert
        assert.equal(parseInt(result), -1, 'data in node 1 is not expected');
    })

    it('should return -1, receive number', () => {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.removeNode(new linkedList.Node(111));
        // Assert
        assert.equal(parseInt(result), -1, 'data in node 1 is not expected');        
    })
})

describe('indexOfNode', function () {
    it('should give the index of the head node 0', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(node1);
        // Assert
        assert.equal(result, 0, 'Index is not correct!');
    })

    it('should give the index of the node 1', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(node2);
        // Assert
        assert.equal(result, 1, 'Index is not correct!');
    })

    it('should give the index of the node 2', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(node3);
        // Assert
        assert.equal(result, 2, 'Index is not correct!');
    })

    it('should return -1, nonexisting node', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(new linkedList.Node(321));
        // Assert
        assert.equal(result, -1, 'Result is not correct, must be -1!');
    })

    it('should return -1, receive string', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(new linkedList.Node("sdf"));
        // Assert
        assert.equal(result, -1, 'Result is not correct, must be -1!');
    })

    it('should return -1, receive empty string', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(new linkedList.Node(""));
        // Assert
        assert.equal(result, -1, 'Result is not correct, must be -1!');
    })

    it('should return -1, receive null', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(new linkedList.Node(null));
        // Assert
        assert.equal(result, -1, 'Result is not correct, must be -1!');
    })

    it('should return -1, receive -1', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.indexOfNode(new linkedList.Node(-1));
        // Assert
        assert.equal(result, -1, 'Result is not correct, must be -1!');
    })
})

describe('test isEmpty', function () {
    it('should return false in list with single node', function () {
        // Arrange
        let node1 = null;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.isEmpty();
        // Assert
        assert.equal(result, true);
    })

    it('should return false in list with multiple nodes', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let result = list.isEmpty();
        // Assert
        assert.equal(result, false);
    })

    it('should return true in empty list', function () {
        // Arrange
        let list = new linkedList.LinkedList();
        // Act
        let result = list.isEmpty();
        // Assert
        assert.equal(result, true);
    })
})

describe('test getLast and getFirst', function () {
    it('should get the first node', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let resultFirst = list.getFirst();
        // Assert
        assert.equal(resultFirst.data, 2, 'should get the first node');
    })

    it('should get the first node in empty list and return -1', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let list = new linkedList.LinkedList(node1);
        list.removeFrom(0);
        // Act
        let resultFirst = list.getFirst();
        // Assert
        assert.equal(resultFirst, -1, 'should return -1');
    })

    it('should get the last node', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        let resultLast = list.getLast();
        // Assert
        assert.equal(resultLast.data, 10, 'should get the last node');
    })

    it('should get the last node in empty list and return -1', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let list = new linkedList.LinkedList(node1);
        list.removeFrom(0);
        // Act
        let result = list.getLast();
        // Assert
        assert.equal(result, -1, 'should return -1');
    })
})

describe('test clear', function () {
    it('should clear the linked list with single node', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let list = new linkedList.LinkedList(node1);
        // Act
        list.clear();
        // Assert
        assert.equal(list.head, null);
    })

    it('should clear the linked list with multiple nodes', function () {
        // Arrange
        let node1 = new linkedList.Node(2);
        let node2 = new linkedList.Node(5);
        let node3 = new linkedList.Node(10);
        node1.next = node2;
        node2.next = node3;
        let list = new linkedList.LinkedList(node1);
        // Act
        list.clear();
        // Assert
        assert.equal(list.head, null);
    })
})