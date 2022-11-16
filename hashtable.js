class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null
    }
}

class HashTable {
    constructor() {
        this.tableSize = 10;
        this.hashTable = new Array(this.tableSize)
        this.elementSize = 0;
        this.MaxloadFactor = 0.75
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.tableSize;
    }
    set(key, value) {
        const index = this.hash(key);
        if (this.hashTable[index] != undefined) {
            let head = this.hashTable[index];
            while (head.next) {
                if (head.key == key) {
                    head.value = value;
                    return;
                }
                head = head.next
            }
            const node = new Node(key, value)
            head.next = node;
        }
        else {
            console.log(`Adding key ${key} and Value ${value}`)
            const node = new Node(key, value);
            node.next = this.hashTable[index];
            this.hashTable[index] = node;
        }
        this.elementSize++;
        let loadFactor = this.elementSize / this.tableSize;
        if (loadFactor > this.MaxloadFactor) {
            this.rehash();
        }
    }
    rehash() {
        let temp = this.hashTable
        this.tableSize *= 2;
        this.hashTable = new Array(this.tableSize)
        for (i = 0; i < temp.length; i++) {
            let head = temp[i];
            while (head) {
                this.set(head.key, head.value);
                head = head.next;
            }
        }
    }
    get(key) {
        const target = this.hash(key)
        if (this.hashTable[target]) {
            let head = this.hashTable[target]
            while (head) {
                if (head.key == key)
                    return head.value;

                head = head.next;
            }
        }
        return undefined;
    }
    display() {
        for (let i = 0; i < this.tableSize; i++) {
            if (this.hashTable[i]) {
                let head = this.hashTable[i]
                while (head) {
                    console.log(`key ${head.key} and value ${head.value}`);
                    head = head.next;
                }
            }
        }
    }
}
const table = new HashTable();
table.set("abc", 220);
table.set("xyz", 450);
table.set("wwe", 550);
table.set("raw", 230);
table.set("test", 420);
table.set("ǻ", 200);
table.display();
