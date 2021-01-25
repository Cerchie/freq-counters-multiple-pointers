// add whatever parameters you deem necessary
function countPairsIncorrectAttempt(arr, num) {

    let left = 0;
    let right = arr.length - 1;
    let count = 0;
    while (left < right) {
      let sum = arr[left] + arr[right];
  
      if (sum === num) {
        count ++;
      } else if (sum > num) {
        right--;
      } else {
        left++;
      }
    } return count;
} //my attempt here is lacking because it fails to increment start and count when sum = num--
//I forgot to do this because I modeled it off of the Zero Sum algorithm

function countPairs(arr, num) {
    arr.sort((a, b) => a - b);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let sum = arr[start] + arr[end];
        if (sum === num) {
            count++;
            start++;
            end--;
        } else if (sum < num) {
            start++;
        } else {
            end--;
        }
    }
    return count;
}
