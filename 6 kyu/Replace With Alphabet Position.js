// In this kata you are required to, given a string, 
// replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" 
// ( as a string )



function alphabetPosition(text) {
  const regex = new RegExp (/[a-z]/, "ig")
  const setOfLetters = text.toLowerCase().match(regex);
  const setOfCodes = [];

  if (!setOfLetters) return '';
  for (let index = 0; index < setOfLetters.length; index++) {
    setOfCodes.push(setOfLetters[index].charCodeAt(0) - 96)
  }
  return setOfCodes.join(' ')
}