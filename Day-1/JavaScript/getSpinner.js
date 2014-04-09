function getSpinner(){
   var counter = 0;
   function upper(){
      return ++counter;
   }
   function downer(){
      return --counter;
   }
   return {
      up : upper,
     down : downer
   }
}