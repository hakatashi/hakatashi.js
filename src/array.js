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
