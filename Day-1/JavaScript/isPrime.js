var isPrime = (function(){
	var cache = {0 : true, 1 : true, 2 : true, 3 : true};
	return function(n){
		if (typeof cache[n] !== "undefined"){
			console.log("Returing from cache");
		} else {
			console.log("Freshly brewed...")
			cache[n] = true;
			for(var i=0;i<=(n/2);i++){
				if (n % i === 0) {
					cache[n] = false;
				}
			}
		}
		return cache[n];
	}
})()

function isPrime(n){
	var cache = {0 : true, 1 : true, 2 : true, 3 : true};
	isPrime = function(n){
			if (typeof cache[n] !== "undefined"){
				console.log("Returing from cache");
			} else {
				console.log("Freshly brewed...")
				cache[n] = true;
				for(var i=0;i<=(n/2);i++){
					if (n % i === 0) {
						cache[n] = false;
					}
				}
			}
			return cache[n];
		}
	return isPrime(n);
};