// Remove all items matches `item` in Array
// TODO: Performance enhancement
Array.prototype.remove = function(item) {
	var index;
	while ((index = this.indexOf(item)) !== -1) {
		this.splice(index, 1);
    }
	return this;
};

// Remove all duplication in Array
// TODO: Performance enhancement
Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};
// not activate in node
if (typeof document !== 'undefined') {
	// Parse URI query and get value from name.
	// http://stackoverflow.com/questions/6466135/
	document.getParameterByName = function (name) {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
			results = regex.exec(location.search);
		return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
	};
}
// returns random integers including `from` and `to`
Math.randInt = function (from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
};
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
Number.prototype.log = function (n) {
	if (typeof n === 'undefined') n = Math.E;
	if (n <= 0) return Number.NaN;
	return Math.log(this) / Math.log(n);
};
// - ECMAScript 6 feature
// Repeats string given times.
// http://stackoverflow.com/questions/202605/
String.prototype.repeat = function (times) {
    return new Array(times + 1).join(this);
};
