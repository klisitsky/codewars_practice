// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
  s = s.split(' ')
  let shortWord = s[0];
  for (let index = 0; index < s.length; index++) {
    if (s[index].length < shortWord.length) shortWord = s[index]
  }
  return shortWord.length
}