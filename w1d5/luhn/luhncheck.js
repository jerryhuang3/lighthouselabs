// Test account number 79927398713

// var account = ;

// Reverse the account number, split into an array, and
// map each array element into a number
function luhn(n) {
    var array = n.split("").reverse().map(Number);
        
    var empty = [];
    for (i = 0; i < array.length; i++) {
        if ((i + 1) % 2 === 0) {
            var second = array[i] * 2;
            empty.push(second % 10 + Math.floor(second / 10));
        } else {
            empty.push(array[i]);
        }

    }

    var sum = 0;
    for (i = 0; i < empty.length; i++) {
        sum += empty[i];
    }
    return sum;
}

function check(number){
    var a = number;
    var answer = "";
    if (luhn(a) % 10 === 0) {
        return answer = "This number is valid.";
    } else {
        return answer = "This number is not valid.";
    }
}

module.exports = {
    check: check
}
