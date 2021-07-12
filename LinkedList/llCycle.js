/*
    This question is asked by Microsoft. Given a linked list, 
    containing unique numbers, return whether or not it has a cycle.
    Note: a cycle is a circular arrangement
    (i.e. one node points back to a previous node)

    Ex: Given the following linked lists...

    1->2->3->1 -> true (3 points back to 1)
    1->2->3 -> false
    1->1 true (1 points to itself)

    ******************************
    ************ ALSO ************
    ******************************


    This question is asked by Apple. Given a potentially cyclical
    linked list where each value is unique, return the node at which the cycle starts.
    If the list does not contain a cycle, return null.

    Ex: Given the following linked lists...

    1->2->3, return null
    1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
    1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
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
        this.length = 0;
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


    checkCycle() {
        // iterate over the LL.
        // push each val into a map of key => [].
        // If next item found in map, return true + first val of arr else false.
        let hm = new Map();
        let cur = this.head;

        while (cur) {
            if (hm.has(cur.val)) {
                let key = hm.get(cur.val);
                key.push(cur); //pushing the whole node
                console.log(true, ', cycle found at', cur, ' Starting at -> ', key[0]);
                return (key[0], ' ', cur);
            } else {
                hm.set(cur.val, [cur]);
            }

            cur = cur.next;
        }
        console.log('No cycle detected.');
        return false

    }
}


// Cycle
let ll_1 = new LinkedList();
ll_1.push(1);
ll_1.push(2);
ll_1.push(3);
ll_1.push(4);
ll_1.push(5);
ll_1.push(6);
ll_1.push(7);
ll_1.push(1);
ll_1.checkCycle();

console.log('LIST -> ', ll_1);

// No cycle
let ll_2 = new LinkedList();
ll_2.push(1);
ll_2.push(2);
ll_2.push(3);
ll_2.push(4);
ll_2.push(5);
ll_2.push(6);
ll_2.push(7);
// ll_2.push(1);
ll_2.checkCycle();

console.log(ll_2);
