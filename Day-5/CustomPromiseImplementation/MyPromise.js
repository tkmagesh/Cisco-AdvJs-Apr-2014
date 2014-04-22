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