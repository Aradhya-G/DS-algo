function Removedig(nums, k) {
    let stack = [];

    for (let ch of nums) {
        while (stack.length && k &&
            stack[stack.length - 1] > ch) {
            stack.pop();
            k--;
        }
        if (stack.length > 0 || ch != "0") {
            stack.push(ch);
        }
    }
    while (stack.length && k--) {
        stack.pop();
    }

    if (stack.length === 0) {
        return 0;
    }
    return stack.join("");
}
console.log(Removedig("14378", 3))