function squareDigits(num){
    const numberToArray = [...String(num)];
    const result = numberToArray.map(function(elem) {
      const Square = Math.pow(Number(elem), 2)
      return String(Square)
     })
      return Number(result.join(''))
  }