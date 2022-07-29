const fibonacci = function(n) {
    let firstNum = 1;
    let secondNum = 1;
    if (n < 0) return `OOPS`;
    else if (n === 0) return 0;
    else if (n > 0) {
        let a = 0;
        let b = 1;
        for (let i = 1; i < n; i++) {
            const temp = b;
            b = a + b;
            a = temp;  
        } return b;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;

