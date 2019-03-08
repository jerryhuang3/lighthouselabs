var texts = process.argv.splice(2);

function reverse(texts) {
  var backwards = "";
  for (var i = texts.length - 1; i >= 0; i--) {
    backwards = backwards + texts[i];
  }
  return backwards;
}

for (var i = 0; i < texts.length; i++) {
  console.log(reverse(texts[i]);
}
