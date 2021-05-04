function factorial(n) {
  // ваш код...
  let fac = 0;
  for (let i = n - 1; i > 1; --i) {
    n = n * i;
  }
  if (n == 0) n = n + 1;
  return n;
}
