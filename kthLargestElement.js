/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// find kth largest element in an array
// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
var findKthLargest = function(nums, k) {
    let sortedArr=nums.sort((a,b)=>a-b)
    let length = sortedArr.length
    let kthElement = length-k;
    console.log("kth",length-k)
    let op = sortedArr[kthElement]

    return op
    
};