function getMiddle(s) {
  return s.length % 2 
  ? s[Math.ceil(s.length/2)-1] 
  : s.substring(s.length/2-1, s.length/2+1)
}