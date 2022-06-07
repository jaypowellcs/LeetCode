//Given an array, rotate the array to the right by k steps, where k is non-negative.

 
 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
let arr = [];
for (let i = 0; i < nums.length; i++) {
arr[(i + k) % nums.length] = nums[i];
}
for (let i = 0; i < nums.length; i++) {
nums[i] = arr[i];
}
return nums;
  
};