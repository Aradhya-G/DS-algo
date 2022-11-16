class ans {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

function btto(root) {
    if (root == null) {
        return;
    }

    let stack = [this.root]
    while (stack > 0) {
        let ans = stack.pop

        if (ans.right) {
            stack.push(ans.right)
        }

        if (ans.left) {
            stack.push(ans.left)
        }
        if (stack.length) {
            node.right = stack[stack.length - 1];
        }

        node.left = null;
    }
}
