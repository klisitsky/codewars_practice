// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false



function XO(str) {
  let countOfX = 0;
  let countOfO = 0;

  for (let index = 0; index < str.length; index++) {
    let littleLetter = str[index].toLowerCase();
    switch(true) {
        case littleLetter === "x":
          countOfX++;
          break;
        case littleLetter === "o":
          countOfO++;
          break;
    }
  }
  return countOfX === countOfO
}