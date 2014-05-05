Number.prototype.toRadians = function () {
    return this * (Math.PI / 180);
};

Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};
