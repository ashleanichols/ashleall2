class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    };


    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    add(data) { // creates a new node
        let node = new Node(data);

        // to store current node
        let current;

        // if list is Empty add the data and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;

            // iterate to the end of the list
            while (current.next) {
                current = current.next;
            }

            // add node
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            let node = new Node(data);
            let curr, prev;

            curr = this.head;

            // add the data to the first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;

                // iterate over the list to find the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // adding an element of data
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please Enter a valid index");
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.data;
        }
    }

    removeNode(node) {
        let current = this.head;
        let prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.node === node) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.node;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }

    indexOfNode(node) {
        let count = 0;
        let current = this.head;

        // iterate over the list
        while (current != null) {
            // compare each node of the list
            // with given node
            if (current.node === node)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }


    isEmpty() {

        return this.size == 0;

    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    clear() {
        this.head = null;
    }

    printNode() {

        let curr = this.head;
        let str = "";
        while (curr) {
            str += curr.Node + " ";
            curr = curr.next;
        }
        console.log(str);

    }
}

exports.LinkedList = LinkedList;
exports.Node = Node;