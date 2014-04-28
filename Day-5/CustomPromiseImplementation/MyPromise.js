function MyPromise(fn){
   var _result = undefined,
       _thenCallback = undefined,
       _catchCallback = undefined,
       _operationCompleted = false,
       _errorOccured = false;

   function triggerThen(){
       if (_operationCompleted && !_errorOccured && typeof _thenCallback === "function"){
           _thenCallback(result);
       }
   }
   function triggerCatch(){
   		if (_operationCompleted && _errorOccured && typeof _catchCallback === "function")
   			_catchCallback(_error);
   		}
   }
   this.then = function(thenCallback){
       _thenCallback = thenCallback;
       triggerThen();
   };
   this.catch = function(catchCallback){
        _catchCallback = catchCallback;
        triggerCatch();
   };
   fn(function(result){
       _operationCompleted = true;
       _errorOccured = false;
       _result = result;
       triggerThen();   
   },function(err){
   	   _operationCompleted = true;
   	   _errorOccured = true;
   	   _error = err;
   	   triggerCatch();
   }); 
}



var p = new MyPromise(function(success,failure){
  setTimeout(function(){
       console.log("async operation completed [from inside the promise object]");
       success(new Date());
  },20000);
});

p.then(function(result){
	conosle.log("async operation completed at " + result + " and 'then' block executed at " + new Date());
});