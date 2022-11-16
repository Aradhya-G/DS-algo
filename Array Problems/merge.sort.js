function merge(arr) {
    if (arr.length < 2)
        return arr

    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    let sorted_left=merge(left)
    let sorted_right=merge(right)

    return sort(sorted_left,sorted_right)
}
function sort(left, right) {
    let merge = []

    while (left.length && right.length){
        left[0]<right[0]?merge.push(left.shift()):merge.push(right.shift())
    }
    while(left.length){
        merge.push(left.shift())
    }
    while(right.length){
        merge.push(right.shift())
    }
    return merge;
}
let arr= [3,6,2,8,3,88,65,9]
console.log(merge(arr))