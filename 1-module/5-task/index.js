function truncate(str, maxlength) {
  // ваш код...
  let size = str.length;
  let res = size - (size - (maxlength - 1));
  return size > maxlength ? str.slice(0, res) + "…" : str;
}
