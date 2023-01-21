function digitalRoot(n) {
  if (n < 10) {
    return n
  } else {
    n = [...''+n].map(Number).reduce((a,b) => a+b)       
    return digitalRoot(n);
  }
}