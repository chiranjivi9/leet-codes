
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
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    pop() {
        if(!this.head) {
            return undefined;
        }

        //iterate till the end
        let current =  this.head;
        let newTail = current;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;

        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current; // popped node
    }


    checkPalindrome() {
        if(!this.head) return undefined;
        
        let node = this.head;
        let outputArr = [];
        while(node) {
            outputArr.push(node.val);
            node = node.next;
        }
        console.log(outputArr.join('') === outputArr.reverse().join(''))
        return outputArr.join('') === outputArr.reverse().join('');
    }
}

let ll = new LinkedList();
ll.push(1);
ll.push(2);
ll.push(1);
ll.checkPalindrome();
console.log(ll);