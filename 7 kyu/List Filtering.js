// In this kata you will create a function that takes a list of 
// non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



function filter_list(l) {
  const onlyNums = [];
  for (let index = 0; index < l.length; index++) {
    if (typeof l[index] == 'number') {
      onlyNums.push(l[index])
    }
  }
  return onlyNums.sort((num1, num2) => num1 - num2)
}
console.log(filter_list([1,2,'a','b']))

