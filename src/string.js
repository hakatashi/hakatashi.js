// ECMAScript 6 feature
// http://stackoverflow.com/questions/202605/
String.prototype.repeat = function (times) {
    return new Array(times + 1).join(this);
};
