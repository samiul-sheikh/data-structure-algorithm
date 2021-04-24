// Singly Linked List basic example

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(head) {
        this.head = head;
    }

    add(value) {
        const newNode = new Node(value);
        // this.head.next = newNode;
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        current.next = newNode;
    }
}

const head = new Node(1500);
const itemList = new LinkedList(head);
itemList.add(100)
itemList.add(200)
itemList.add(300)
itemList.add(400)
console.log(JSON.stringify(itemList))