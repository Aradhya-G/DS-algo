function removeKdigits(nums, k) {
    let stack = []
    for (let char in nums) {
        while (stack.length && k && stack[stack.length - 1].charCodeAt(0) > char.charCodeAt(0)) {
            stack.pop();
            k--;
        }

        if (stack.length > 0 || char != "0") {
            stack.push(char)
        }
    }
    while (k && stack.length) {
        stack.pop();
        k--;
    }

    if (stack.length == 0)
        return 0;

    return stack.join("")
}
console.log(removeKdigits("12345", 2));