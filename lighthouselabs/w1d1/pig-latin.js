var words = process.argv.slice(2);

function piglatin(words) {
  var pgl = "";
  for (var i = 0; i < words.length; i++) {
    var first = words.charAt(0);
    pgl = words.substring(1) + first + "ay";
  }
  return pgl;
}

var string = "";
for (var i = 0; i < words.length; i++) {
  string += piglatin(words[i]) + " ";
}
console.log(string);