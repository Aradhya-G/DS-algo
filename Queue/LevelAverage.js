class Node {
    constructor(data) {
        this.left = null;
        this.right = null;
        this.val = data;
    }
}
function average(root) {
    let q = [];
    q = [root];
    while (q.length) {
        let sum = 0;
        let size = q.length;
        let count = 0;
        while (size--) {
            let n = q.shift();
            sum += n.val;
            count++;
            if (n.left) q.push(n.left);
            if (n.right) q.push(n.right);
        }
        console.log(sum / count)
    }
}
function newNode(data) {
    let temp = new Node(data);
    return temp;
}

let root = null;
root = newNode(120);
root.left = newNode(18);
root.right = newNode(22);
root.left.left = newNode(13);
root.left.right = newNode(35);
root.right.right = newNode(21);

average(root);