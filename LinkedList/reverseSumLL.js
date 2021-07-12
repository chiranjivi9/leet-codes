/*
    Let's represent an integer in a linked list format by having each node
    represent a digit in the number. The nodes make up the number in reversed order.
    For example, the following linked list:

    1 -> 2 -> 3 -> 4 -> 5
    is the number 54321.

    Given two linked lists in this format, return their sum
    in the same linked list format.

    For example, given
    9 -> 9
    5 -> 2
    return 124 (99 + 25) as:
    4 -> 2 -> 1
*/

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    push(val) {
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
}

let createLinkedList = (arr, linkedList) => {
    if (arr.length < 1) return null;

    for (let i = 0; i < arr.length; i++) {
        linkedList.push(arr[i]);
    }

    return linkedList;
}

function manipulateLL(currentNode) {
    //this function iterates over the ll, reverses it & converts it to a number
    let arr = []
    while (currentNode) {
        arr.push(currentNode.val);
        currentNode = currentNode.next;
    }

    let num = parseInt(arr.reverse().join(''), 10);
    return num;
}

// reverse sum LL
let reverseSum = (ll_1, ll_2) => {
    let reversedSumLinkedList = new LinkedList();
    let num1 = manipulateLL(ll_1.head);
    let num2 = manipulateLL(ll_2.head);
    let numToRev = (num1 + num2).toString().split('').map((item) => {
        return Number(item);
    });

    createLinkedList(numToRev, reversedSumLinkedList);

    console.log(reversedSumLinkedList);

    return reversedSumLinkedList;
}

// create linkedlist 1 call.
let ll_1 = new LinkedList();
createLinkedList([1, 2, 3], ll_1);

// create linkedlist 2 call.
let ll_2 = new LinkedList();
createLinkedList([5, 6, 7], ll_2);

// reverse sum LL call
reverseSum(ll_1, ll_2);