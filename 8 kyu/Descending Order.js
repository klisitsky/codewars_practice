function descendingOrder(n){
  let arrayOfN = Array.from(String(n));
  
  return Number(
    arrayOfN
    .sort((num1, num2) => num2 - num1)
    .join('')
  );
}
console.log(descendingOrder(1021))
console.log(descendingOrder(123456789))