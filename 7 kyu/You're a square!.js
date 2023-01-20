var isSquare = function(num){
  if (num < 0) return `${num}: Negative numbers cannot be square numbers`
  
  let SquareNum = Math.sqrt(num)
  
  return SquareNum % 1 === 0
    ? `${num} is a square number (${SquareNum} * ${SquareNum})`
    : `${num} is not a square number`
}