const repeatString = function(string, num) {
    if (num < 0) {
        return `ERROR`
    } else {    
        let myStr = ``;
        for (let i = 1; i <= num; i++) {
            myStr += string;
        }
        return myStr
    }
};

// Do not edit below this line
module.exports = repeatString;
