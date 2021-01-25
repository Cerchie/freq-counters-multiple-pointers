// add whatever parameters you deem necessary
// Write a function called separatePositive which 
// accepts an array of non-zero integers. Separate the positive integers
//  to the left and the negative integers to the right. 
//  The positive numbers and negative numbers need not be in sorted order. 
//  The problem should be done in place
//  (in other words, do not build a copy of the input array).
// function separatePositive(arr) {
//     let left =0;
//     let right = arr.length -1;
//     //our pointers
//     while (left < right){ //our loop
//         for(let i of arr){
//             if(i > 0){
//                 let rightmost = arr.length -1
//                 rightmost[i] = i;
//             } else {
//                 if(i > 0){
//                     let leftmost = 0;
//                     arr[leftmost] = i;
//                 }
//             }
//         }
//     }
// } my attempt

function separatePositive(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      if (nums[start] < 0 && nums[end] > 0) {
        // ES2015
        // [nums[start], nums[end]] = [nums[end], nums[start]];
  
        // ES5
        var temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
  
        start += 1;
        end -= 1;
      } else {
        if (nums[start] > 0) start += 1;
        else end -= 1;
      }
    }
    return nums;
  }
// function averagePair(arr, targetAvg) {
//     let left =0;
//     let right = arr.length -1;
//     //our pointers
//     while (left < right){ //our loop
//         let avg = (arr[left] + arr[right])/2;
//         if (avg === targetAvg){
//             return true;
//         } else if (avg > targetAvg){
//             right--;
//         } else {left ++}
//     }
//     return false;
// }