var list = [];

function sortingData() {
    list.sort(function(a,b){
        return (a - b);
    })
    return list
}
    
module.exports = {
    store: function (number) {
        for (i=0;i<number.length;i++) {
            list.push(number[i]);
        }
        return list;
    },
    sort: sortingData
}
