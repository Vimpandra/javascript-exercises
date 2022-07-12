const sumAll = function(base, top) {
    let result = 0;

    if (typeof(top) !== `number` || typeof(base) !== `number` || base < 0 || top < 0) {
        return `ERROR`
    } else {
            if (base < top) {
            for (let i = base; i <= top; i++) {
                result += i;
            }
        } else {
            for (let i = top; i <= base; i++) {
                result += i;
            }
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
