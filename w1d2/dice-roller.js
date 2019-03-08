let numRolls = process.argv.slice(2)[0];
let dice = ["1", "2", "3", "4", "5", "6"];
var results = [];

for (i = 0; i < numRolls; i++) {
  var index = dice[Math.floor(Math.random() * 6)];
  results.push(index);
}

function joinResults(results) {
  var final = "";
  for (var i = 0;  i < results.length; i++){
    if (i !== results.length - 1) {
      final += results[i] + ", ";
    } else {
      final += results[i];
    }
  }
  return final;
}

console.log("Rolled ", numRolls, " dice: ", joinResults(results));