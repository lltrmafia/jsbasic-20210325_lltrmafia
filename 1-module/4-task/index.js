function checkSpam(str) {
  // ваш код...
  let game = '1xBet'.toLowerCase();
  let xxx = 'XXX'.toLowerCase();
  let res = str.toLowerCase();
  return res.indexOf(game) != -1 || res.indexOf(xxx) != -1 ? true : false;
}
