var store = require('./sortingdata');

// Takes user data input from command line
var data = process.argv.slice(2)

console.log(store.storesort(data))
