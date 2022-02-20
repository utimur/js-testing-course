const square = (number) => {
    if(number === 1) {
        return 1;
    }
    return Math.pow(number, 2);
}

module.exports = square;
