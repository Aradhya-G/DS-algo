function permutation(input, output) {
    let tempStack = [];
    while (input.length) {
        let ele = input.shift()
        if (ele == output[0]) {
            output.shift();
            while (tempStack.length) {
                if (tempStack[tempStack.length - 1] == output[0]) {
                    tempStack.pop();
                    output.shift();
                }
                else break;
            }
        }
        else {
            tempStack.push(ele);
        }
    }
    return input.length == 0 && tempStack.length == 0
}
let input = [4, 5, 3, 2, 1, 6, 7];
let output = [1, 6, 7, 3, 5, 4, 2];
console.log(permutation(input, output))