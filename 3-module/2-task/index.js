function filterRange(arr, a, b) {
  // ваш код...
  return a > b ? arr.filter(item => item <= a && item >= b) :
    arr.filter(item => item >= a && item <= b);
}
