// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false



function isIsogram(str){
    let array = str.toLowerCase().split('')
    let result
    for (i = 0; i <= array.length; i++) {
      if (array.filter((letter) => letter === array[i]).length > 1) {
        result = false
        break;
      }
      result = true
    }
    return result
  }