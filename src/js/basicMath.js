define(function (require) {
	return {
		add: function(number1, number2) {

			if (arguments.length === 1) {
				throw new Error('add requires two arguments');
			}
			return number1 + number2;
		}
	};
});