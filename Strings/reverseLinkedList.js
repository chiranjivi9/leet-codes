class Node {
    constructor(val) {
        this.value = val;
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
            this.head =  newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        
        return this;
    }

    reverseList() {
        let cur = this.head;
        let prev = null;
        let next = null;
            
        while (cur) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
            
        return prev;
    };
}



let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.reverseList();

console.log(list);


