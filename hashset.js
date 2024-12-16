class HashSet {
    constructor() { //loadFactor, capacity
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.buckets = new Array(this.capacity);
        this.keyCount = 0;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        }

        return hashCode;
    }


    set(key, value) {
        const hashCode = this.hash(key);

        if (this.buckets[hashCode] === undefined) {
            const llBucket = new LinkedList();
            llBucket.append({ key, value });
            this.buckets[hashCode] = llBucket;
            this.keyCount++;
        }
        else {
            const llBucket = this.buckets[hashCode];

            let existingNode = llBucket.findNodeByKey(key);

            if (existingNode) {
                existingNode.val.value = val;
            }
            else {
                llBucket.append({ key, value });
                this.keyCount++;
            }
        }
    }

    get(key) {
        const hashCode = this.hash(key);
        let llBucket = this.buckets[hashCode];
        if (llBucket === undefined) {
            return "no list " + null;
        }
        else {
            let currentNode = llBucket.head();
            while (currentNode) {
                if (currentNode.val.key === key) {
                    return currentNode.val.value;
                }
                currentNode = currentNode.next;
            }
            return null;
        }
    }


    has(key) {
        const hashCode = this.hash(key);
        let llBucket = this.buckets[hashCode];
        if (llBucket === undefined) {
            return false;
        }
        else {
            let currentNode = llBucket.head();
            while (currentNode) {
                if (currentNode.val.key === key) {
                    return true;
                }
                currentNode = currentNode.next;
            }
            return false;
        }
    }

    remove(key) {
        const hashCode = this.hash(key);

        let llBucket = this.buckets[hashCode];

        if (llBucket === undefined) {
            return false;
        }
        else {
            // return true;
            // return llBucket.removeByKey(key);
            let currentNode = llBucket.head();
            // console.log(llBucket.size)

            if (currentNode.val.key === key && llBucket.size == 1) {
                this.buckets[hashCode] = undefined;
                this.keyCount--;
                return true;
            }
            else {

                if (llBucket.headNode.val.key === key) {
                    llBucket.headNode = llBucket.headNode.next;
                    llBucket.size--;
                    this.keyCount--;
                    return true;
                }
                else {
                    let currentNode = llBucket.head();
                    // console.log("currentNode: ", currentNode);
                    while (currentNode.next) {
                        // console.log(currentNode.next.val.key);
                        if (currentNode.next.val.key === key) {
                            // console.log("*** ", currentNode.next.val.key);
                            currentNode.next = currentNode.next.next;
                            llBucket.tailNode = currentNode;
                            llBucket.size--;
                            this.keyCount--;
                            return true;
                        }
                        currentNode = currentNode.next
                    }
                    return false;
                }
            }
        }
    }

    length() {

        return this.keyCount;
    }

    clear() {
        this.buckets = new Array(this.capacity);
        this.keyCount = 0;[];
    }

    keys() {
        let allKeys = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined || this.buckets[i] != null) {
                let currentNode = this.buckets[i].headNode;
                while (currentNode) {
                    allKeys.push(currentNode.val.key);
                    currentNode = currentNode.next;
                }
            }
        }
        return allKeys;
    }

    values() {
        let allValues = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined || this.buckets[i] != null) {
                let currentNode = this.buckets[i].headNode;
                while (currentNode) {
                    allValues.push(currentNode.val.value);
                    currentNode = currentNode.next;
                }
            }
        }
        return allValues;
    }

    entries() {
        let allEntries = [];

        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i] !== undefined || this.buckets[i] != null) {
                let currentNode = this.buckets[i].headNode;
                while (currentNode) {
                    allEntries.push([currentNode.val.key, currentNode.val.value]);
                    currentNode = currentNode.next;
                }
            }
        }
        return allEntries;
    }

    print() {
        for (let i = 0; i < this.buckets.length; i++) {
            // console.log(this.buckets[i]);
            let llBucket = this.buckets[i];
            // console.log(llBucket);

            if (llBucket !== undefined) {

                let llBucketCurrentNode = llBucket.head();

                // console.log(llBucketCurrentNode);

                while (llBucketCurrentNode) {
                    // console.log(llBucketCurrentNode);
                    // console.log(llBucketCurrentNode.next);
                    llBucketCurrentNode = llBucketCurrentNode.next;
                }
            }

        }
        return this.buckets;
    }

    growbuckets() {
        const oldBuckets = this.buckets;
        this.capacity *= 2;
        this.buckets = new Array(this.capacity);
        this.keyCount = 0;

        for (let i = 0; i < oldBuckets.length; i++) {

            if (oldBuckets[i] !== undefined) {
                let currentNode = oldBuckets[i].headNode;

                while (currentNode) {
                    this.set(currentNode.key);
                    currentNode = currentNode.next;
                }
            }
        }
    }
}
export { HashSet }
