function accum(s) {
  s = s.toLowerCase();
  let result = s[0].toUpperCase();
  
	for (let i = 1; i < s.length; i++) {
    let repeatedLetter = s[i].toUpperCase() + s[i].repeat(i);
    result += '-' + repeatedLetter;
  }
  return result
}

console.log(accum('RqaEzty'))