function MyPromise(fn){
	var that = this;
	fn((function(){
			var args = arguments;
			successCallbacks.forEach(function(successCallback){
				successCallback.apply(this,Array.prototype.slice.call(args,0));
			});
			this.then = (function(callback){
				callback.apply(this,Array.prototype.slice.call(args,0));
				return this;
			}).bind(this);
	}).bind(this)
	  ,(function(){
			var args = arguments;
			errorCallbacks.forEach(function(errorCallback){
				errorCallback.apply(this,Array.prototype.slice.call(args,0));
			});
			this.error = (function(callback){
				callback.apply(this,Array.prototype.slice.call(args,0));
				return that;
			}).bind(this);

	}).bind(this));

	var successCallbacks = [];
    this.then = function(callback){
 		successCallbacks.push(callback);
    };

    var errorCallbacks = [];
    this.error = function(callback){
    	errorCallbacks.push(callback);
    }
}