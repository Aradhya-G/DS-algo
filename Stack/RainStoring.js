function Rain(height) {
    let stack = [];
    let maxUnit = 0;
    for (i = 0; i < height.length; i++) {
        while (stack.length && height[stack[stack.length - 1]] < height[i]) {
            let lastEle = height[stack.pop()];
            if (stack.length == 0) {
                break;
            }
            let dist = i - stack[stack.length - 1] - 1
            let Min_height = Math.min(height[stack[stack.length - 1]], height[i]) - lastEle;
            maxUnit += dist * Min_height;
        }
        stack.push(i);
    }
    return maxUnit;
}
let walls = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(Rain(walls));
