const sumAll = function (n1, n2) {
    let soma = 0;

    if (n1 || n2 < 0) return "ERROR";
    if ((n1 || n2).isInteger() === false) return "ERROR";
    if ((n1 || n2).isString() === true) return "ERROR";
    if ((n1 || n2).isArray() === true) return "ERROR";

    if (n1 > n2) {
        for (let i = n2; i <= n1; i++) {
            soma += i;
        }
        return soma;
    }

    for (let i = n1; i <= n2; i++) {
        soma += i;
    }
    return soma;
};

// Do not edit below this line
module.exports = sumAll;
