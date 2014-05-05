function MyPromise(asyncFn){
	var setupHandlers = (function(actionName){
		setupHandlers[actionName] = [];
		this[actionName] = function(callback){
			setupHandlers[actionName].push(callback);
			return this;
		}
		return (function(){
					var args = arguments;
					this[actionName] = (function(callback){
							callback.apply(this,Array.prototype.slice.call(args,0));
							return this;
					}).bind(this);
					setupHandlers[actionName].forEach(this[actionName]);
		}).bind(this);
	}).bind(this);
	
	asyncFn( setupHandlers("then"), setupHandlers("error") );
}

/*Usage*/
/*
var p = new MyPromise(function(success,failure){
  setTimeout(function(){
       console.log("async operation completed [from inside the promise object]");
       success(new Date());
  },20000);
});

p.then(function(result){
	console.log("async operation completed at " + result + " and 'then' block executed at " + new Date());
});

*/