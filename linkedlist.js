export class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.size = 0;
    }

    append(val) {
        const newNode = new Node(val);

        if (this.headNode == null) {
            this.headNode = newNode;
            this.tailNode = newNode;
            this.size++;
        }
        else {
            let currentNode = this.headNode;
            while (currentNode.next)
                currentNode = currentNode.next;
            // this.tailNode.next = newNode;
            currentNode.next = newNode;
            this.tailNode = newNode;
            this.size++;
        }
    }

    prepend(val) {
        const newNode = new Node(val);

        if (!this.headNode) {
            this.headNode = newNode;
            this.tailNode = newNode;
        }
        else {
            newNode.next = this.headNode;
            this.headNode = newNode;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.headNode;
    }

    tail() {
        return this.tailNode;
    }

    at(index) {
        if (index > this.size) {
            return `There are only ${this.size} nodes on list.`
        }
        else {
            if (index < 0) {
                return `Please give positive index value.`
            }
            else {

                let currentNode = this.headNode;

                for (let i = 1; i < index; i++) {

                    currentNode = currentNode.next;
                }
                return currentNode.val;
            }
        }
    }

    pop() {
        if (this.headNode) {
            if (this.tailNode == this.headNode) {
                let deleted = this.tailNode.val;
                this.headNode = null;
                this.tailNode = null;
                this.size--;
                return `Deleted item: ${deleted}`;
            }
            else {
                let currentNode = this.headNode;
                while (currentNode.next.next) {
                    currentNode = currentNode.next;
                }
                let deleted = currentNode.next.val;
                currentNode.next = null;
                this.tailNode = currentNode;
                this.size--;
                return `Deleted item: ${deleted}`;
            }
        }
        else {
            return "List is empty.. can not pop the item."
        }
    }

    toString() {
        let currentNode = this.headNode;
        let result = "";

        while (currentNode) {
            result += `(${currentNode.val})->`;
            currentNode = currentNode.next;
        }
        result += "null";
        return result;
    }

    contains(val) {
        if (this.headNode) {
            let currentNode = this.headNode;
            while (currentNode) {
                if (currentNode.val == val) {
                    return true;
                }
                currentNode = currentNode.next;
            }
        }
        return false;
    }


    find(val) {
        let index = 1;
        if (this.headNode) {
            let currentNode = this.headNode;
            while (currentNode) {
                if (currentNode.val == val) {
                    return index;
                }
                currentNode = currentNode.next;
                index++;
            }
        }
        return null;
    }


    insertAt(val, index) {
        if (index > this.size + 1) {
            return `Can not insert as there are only ${this.size} items on list.`
        }
        else {

            const newNode = new Node(val);

            if (index == 1) {
                newNode.next = this.headNode;
                this.headNode = newNode;
                this.size++;
            }
            else {

                if (index == this.size + 1) {
                    this.tailNode.next = newNode;
                    this.tailNode = newNode;
                    this.size++;
                }
                else {

                    let currentNode = this.headNode;

                    for (let i = 1; i < index - 1; i++) {
                        currentNode = currentNode.next;
                    }

                    newNode.next = currentNode.next;
                    currentNode.next = newNode;
                    this.size++;
                }
            }
            return `Node inserted at index ${index}`;
        }
    }

    removeAt(index) {
        if (index > this.size) {
            return `Can not delete the node as there are only ${this.size} items on list.`
        }
        else {
            if (index == 1) {
                this.headNode = this.headNode.next;
                this.size--;
            }
            else {
                let currentNode = this.headNode;

                for (let i = 1; i < index - 1; i++) {
                    currentNode = currentNode.next;
                }
                currentNode.next = currentNode.next.next;
                this.size--;
            }
            return `Node deleted at index ${index}`;
        }
    }


    findNodeByKey(key) {

        let currentNode = this.headNode;
        while (currentNode) {
            if (currentNode.val.key === key) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }


    removeNodeByKey(key) {
        let currentNode = this.headNode;
        while (currentNode.next) {
            if (currentNode.next.val.key === key) {
                currentNode.next = currentNode.next.next;
                return true;
            }
        }
        return false;
    }

}

export { LinkedList };