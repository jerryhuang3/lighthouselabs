var store = require('./sortingdata');
var sort = require('./sortingdata');

// Takes user data input from command line
var data = process.argv.slice(2);



console.log("Stored data: " + store.store(data));
console.log("Sorted data: " + sort.sort(data))