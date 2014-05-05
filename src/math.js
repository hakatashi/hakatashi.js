// returns random integers including from and to
Math.randInt = function (from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
};
