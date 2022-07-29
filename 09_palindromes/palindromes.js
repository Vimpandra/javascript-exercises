const palindromes = function (str) {
    let noPunc = str.replace(/[.,\/#!$%\^&\*;:{}=\-_` ~()]/g,"").toLowerCase();
    
    let reverseStr = ``;
    for (let i = noPunc.length - 1; i >= 0; i--) {
        reverseStr += noPunc.substr(i, 1);
    }

    if (noPunc === reverseStr) return true;
    else return false;

};

// Do not edit below this line
module.exports = palindromes;
