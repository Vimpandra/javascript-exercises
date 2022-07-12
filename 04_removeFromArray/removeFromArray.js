const removeFromArray = function(arr, ...toRemove) {
    let myArr = Array.from(arguments[0]);

    for (let i = 0; i < toRemove.length; i++) {
        if (myArr.indexOf(toRemove[i]) >= 0) {
            myArr.splice(myArr.indexOf(toRemove[i]), 1);
        }
    }    
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;

