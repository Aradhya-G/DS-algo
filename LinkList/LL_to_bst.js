class TreeNode {
    constructor(value) {
        this.root = value
        this.left = null;
        this.right = null;
    }
}


class LLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SingleLL {
    constructor() {
        this.head = null;
        this.tail = this.head;
        this.length = 0;
    }
    addnode(value) {
        const newNode = new LLNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head
        while (temp.next)
            temp = temp.next;
        temp.next = newNode
    }
    printList() {
        let current = this.head;
        console.log('LL', current);
        while (current) {
            console.log(current.value)
            console.log('--->');
            current = current.next;
        }
        return 'No LL exists'
    }
}

let node = new SingleLL();
node.addnode(5) 
node.addnode(4)
node.addnode(1)
node.addnode(0)
node.addnode(-3)
node.addnode(-4)
node.addnode(-5)


function change(head) {
    let arr = convertarr(head)

    return tree(arr)
}
function convertarr(head) {
    let temp = head;
    let output = []
    while (temp) {
        output.push(temp.value);
        temp = temp.next;
    }
    return output
}
function tree(arr, start = 0, end = arr.length - 1) {
    if (start <= end) {

        let mid = Math.floor((start + end) / 2);
        // console.log(arr[mid])

        let root = new TreeNode(arr[mid])
        root.left = tree(arr, start, mid - 1)
        root.right = tree(arr, mid + 1, end)

        return root;
    }

    return null;
}
console.log(change(node.head));