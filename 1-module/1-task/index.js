function factorial(n) {
  var x = 1;
  while (n) {
    x *= n--;
  } 
  return x;
}
