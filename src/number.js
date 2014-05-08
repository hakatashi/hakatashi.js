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

// Usage of Math.pow in prototype definition.
Number.prototype.pow = function (n) {
	return Math.pow(this, n);
};

// Take log_n of this number. If no arguments supplied, log_e(napier) is assumed.
Number.prototype.pow = function (n) {
	if (typeof n === 'undefined') n = Math.E;
	if (n <= 0) return Number.NaN;
	return Math.log(this) / Math.log();
};
