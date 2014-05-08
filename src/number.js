// Consider Number to radians and convert to degrees.
Number.prototype.toDegrees = function () {
    return this * (180 / Math.PI);
};

// Consider Number to degrees and convert to radians.
Number.prototype.toRadians = function () {
    return this * (Math.PI / 180);
};

// Modulo function which perform nicely in negative numbers.
Number.prototype.mod = function (n) {
    return ((this % n) + n) % n;
};
