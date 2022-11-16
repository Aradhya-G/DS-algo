var nextGreaterElement = function (nums1, nums2) {
    let nge = []
    let stack = []

    for (let i = nums2.length - 1; i >= 0; i--) {
        if (stack.length == 0) {
            nge.push(-1)
        }
        if (stack[stack.length - 1] > nums2[i]) {
            nge.push(stack[stack.length - 1])
        }
        else if (stack[stack.length - 1] <= nums2[i]) {
            while (stack.length > 0 && stack[stack.length - 1] <= nums2[i]) {
                stack.pop()
            }
            if (stack.length === 0) {
                nge.push(-1);
            }
            if (stack[stack.length - 1] > nums2[i]) {
                nge.push(stack[stack.length - 1])
            }
        }
        stack.push(nums2[i]);
    }
    console.log(nge.reverse());
    return nums1
};
let nums2 = [1, 3, 4, 2]
let nums1 = [4, 1, 2]
nextGreaterElement(nums1, nums2)