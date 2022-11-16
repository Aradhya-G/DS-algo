function rotation(arr, left, right) {
    if (left > right)
        return 0
    if (left == right)
        return left

    mid = Math.floor((left + right) / 2)
    if (left < mid && arr[mid] < arr[mid - 1])
        return mid - 1
    if (right > mid && arr[mid] > arr[mid + 1])
        return mid + 1

    if (arr[right] > arr[mid])
        return rotation(arr, left, mid - 1)
    else
        return rotation(arr, mid + 1, right)
}
let arr = [2, 4, 6, 7, 8, 1]
console.log(rotation(arr, 0, arr.length - 1))