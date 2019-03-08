var list = [];

function sortingData() {
    list.sort(function(a,b){
        return (a - b);
    })
    return list
}
    
module.exports = {
    storesort: function (number) {
        for (i=0;i<number.length;i++) {
            list.push(number[i]);
        }
        sortingData();
        return list;
    }
}
