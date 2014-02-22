module.exports = {

map: function(items, f) {
	var output = [];
	for(var i=0, len=items.length; i<len; i++) {
		output.push(f(items[i]));
	}
	return output;
},

filter: function(items, f) {
	var output = [];
	for(var i=0, len=items.length; i<len; i++) {
		if(f(items[i])) {
			output.push(items[i]);
		}
	}
	return output;
},
pluck: function(arr, key){
	var mapped = map(arr, function(x){
		return x[key];
	});
	return mapped;
},
range: function(start, end) {
    var rangeArray = [];
    for (var i = start; i <= end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}
}