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