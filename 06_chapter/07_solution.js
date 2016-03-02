var cups = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var ounces = [];

var convertToOunces = function () {
	for (var i = 0; i < cups.length; i++) {
		ounces.push(cups[i] * 8);
	}
	console.log(ounces);
};

convertToOunces();




var scores = [83, 40, 55, 72, 59, 88, 99];

var passOrFail = function () {
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] >= 60) {
			scores[i] = 'pass';
		} else {
			scores[i] = 'fail'
		}
	}
	return scores;
};


passOrFail();