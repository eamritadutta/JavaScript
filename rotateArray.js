var rotateArray = function (arr, n) {
		// check the # of arguments !
		if (arguments.length != 2) { return "Please try again with 2 arguments"; }

		if (!arr) { return "Please try again with a non-null array"; }
		
		if (!n) { return "Please try again with non-null number agrument for the # of places to rotate the array"; }

		if (arr.length === 0) { return "Please try again with length of array > 0"; }

		if (n <= 0 || n >= arr.length) { return "Please try again with value of n as a +ve number"; }

		for (var i = 0 ; i < n; i++) {
		 	var element = arr.shift();
		 	arr.push(element);
		}

		return arr;
};
