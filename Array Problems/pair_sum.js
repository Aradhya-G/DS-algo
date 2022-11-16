function pair_sum(arr,target){
    let left =0;
    let right = arr.length-1;

    while(left<=right){
        let mid=Math.floor((right+left)/2);

        if(arr[mid]+arr[mid+1]==target){
        return [arr[mid],arr[mid+1]]
    }
        else if(arr[mid]+arr[mid-1]===target){
        return [arr[mid]+arr[mid-1]]
    }
        else if (arr[mid]+arr[mid+1]<target||arr[mid]+arr[mid-1]<target){
            left=mid+1;
        }
        else right=mid-1;
    }
    return -1
}
let arr= [1,2,3,4,5,5,7,8]
console.log(pair_sum(arr,5))