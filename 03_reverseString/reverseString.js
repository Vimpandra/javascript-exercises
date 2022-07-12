const reverseString = function(string) {
    let myStr = ``;
    for (let i = string.length - 1; i >= 0; i--) {
        myStr += string.substr(i, 1);
    }
    return myStr;
};

// Do not edit below this line
module.exports = reverseString;
