// add whatever parameters you deem necessary
//Given two positive integers, find out if the two numbers have the same frequency of digits.
// function sameFrequency(num1, num2) {
//     const num1Freq = {};
//     const num2Freq = {};
  
//     // build frequency counter of letters
//     for (let digit of num1) {
//       num1Freq[digit] = ++num1Freq[digit] || 1;
//     }
  
//     // build frequency counter of message
//     for (let digit of num2) {
//       num2Freq[digit] = ++num2Freq[digit] || 1;
//     }

//     if (num1Freq === num2Freq)
//     {
//         return true;
//     }

//     return false;
// } FIRST ATTEMPT
function sameFrequency(num1, num2) {
    let str1 = num1.toString(); //need to change to strings for methods to work
    let str2 = num2.toString(); 
    if (str1.length !== str2.length) return false; //strings must be equal for freqs to be
  
    let count1 = {};
    let count2 = {}; //creating freq counters
  
    for (let i = 0; i < str1.length; i++) {
      count1[str1[i]] = (count1[str1[i]] || 0) + 1;
    }
  
    for (let j = 0; j < str2.length; j++) {
      count2[str2[j]] = (count2[str2[j]] || 0) + 1; //creating freq counters
    }
  
    for (let key in count1) {
      if (count1[key] !== count2[key]) return false;
    }
  
    return true;
  }
  
