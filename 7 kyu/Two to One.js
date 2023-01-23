// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing 
// distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



function longest(s1, s2) {
  let bothStrs = s1 + s2;
  bothStrs = bothStrs.split('').sort();
  let newStr = [bothStrs[0]];

  for (let index = 1; index < bothStrs.length; index++) {
    if (bothStrs[index] !== bothStrs[index-1]) {
      newStr.push(bothStrs[index])
    }
  }
  return newStr.join('')
}
