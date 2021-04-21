// https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/
module.exports.sum = (x, y) => {
    // while (y !== 0) {
    //     let carry = x & y;
    //     x = x ^ y;
    //     y = carry << 1;
    // }
    return x + y;
    // return x;
};

// https://www.geeksforgeeks.org/subtract-two-numbers-without-using-arithmetic-operators/
module.exports.minus = (x, y) => {
    return this.sum(x, -y);
};
