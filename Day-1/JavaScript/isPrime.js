function isPrime(n){
	if (typeof isPrime.cache === "undefined")
		isPrime.cache = {0 : true, 1 : true, 2 : true, 3 : true};
	if (typeof isPrime.cache[n] !== "undefined"){
		console.log("Returing from cache");
	} else {
		console.log("Freshly brewed...")
		isPrime.cache[n] = true;
		for(var i=0;i<=(n/2);i++){
			if (n % i === 0) {
				isPrime.cache[n] = false;
			}
		}
	}
	return isPrime.cache[n];
}