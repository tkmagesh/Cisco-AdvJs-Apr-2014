var calculator = {
	sum : function(x,y){
			function parseArg(n){
				if (!isNaN(n)) return parseInt(n);
				if (typeof n === "function") return parseArg(n());
				if (Array.isArray(n)) return calculator.sum.apply(this,n);
				return 0;
			}
			return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + calculator.sum([].slice.call(arguments,1));
	}
}