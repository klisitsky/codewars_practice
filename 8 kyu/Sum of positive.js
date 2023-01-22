// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



function positiveSum(arr) {
  return arr.reduce((sum, element) => {
    return element > 0 
    ? sum += element
    : sum}, 
    0);
}

console.log(positiveSum([1,2,3,-2,4,5]))



[10, 20, 30, 40, 50, 70, 70, 70, 80, 20, 10, 0, 0, 80]

80 