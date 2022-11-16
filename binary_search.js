function binary_serach(arr,target){
    let left=0;
    let right=arr.length-1;
    while(right>=left){
        let mid= Math.floor((right+left)/2)

        if(arr[mid]===target)
        return mid
        else if(arr[mid]< target)
        left=mid+1;
        else
        right=mid-1
    }
    return -1
}
let arr= [1,3,5,6,7,8,9,11]
console.log(binary_serach(arr,11))