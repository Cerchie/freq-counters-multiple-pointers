
function constructNote(message, letters) {
    const lettersFreq = {};
    const messageFreq = {};
  
    // build frequency counter of letters
    for (let char of letters) {
      lettersFreq[char] = ++lettersFreq[char] || 1;
    }
  
    // build frequency counter of message
    for (let char of message) {
      messageFreq[char] = ++messageFreq[char] || 1;
    }
  
    // final comparison of message frequency with letters frequency
    for (let char in messageFreq) {
      if (!lettersFreq[char]) {
        return false;
      }
      if (messageFreq[char] > lettersFreq[char]) {
        return false;
      }
    }
  
    return true;
  }
// add whatever parameters you deem necessary
// function isSubsequence(str1, str2) {
//     const str1Freq = {};
//     const str2Freq = {};
  
//     // build frequency counter of str1
//     for (let char of str1) {
//       str1Freq[char] = ++str1Freq[char] || 1;
//     }
  
//     // build frequency counter of str2
//     for (let char of str2) {
//       str2Freq[char] = ++str2Freq[char] || 1;
//     }

//     if(constructNote(str1, str2) === false) return false;



// } MY ATTEMPT ABOVE
function isSubsequence(str1, str2) {
    let str1Idx = 0;
    let str2Idx = 0;
    if (!str1) return true;
    while (str2Idx < str2.length) {
      if (str2[str2Idx] === str1[str1Idx]) {
        str1Idx += 1;
      }
      if (str1Idx === str1.length) return true;
      str2Idx += 1;
    }
    return false;
  }
  
  
// Write a function called isSubsequence 
// which takes in two strings and checks whether the characters in the 
// first string form a subsequence of the characters in the second string. 
// In other words, the function should check whether the characters 
// in the first string appear somewhere in the second string, without their order changing.

