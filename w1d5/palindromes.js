function isPalindrome(s) {
  var stringReverse = s.replace(/ /g, "").split("").reverse().join("");
  var s = stringReverse.split("").reverse().join("");
  return s == stringReverse;
}

module.exports = isPalindrome;
