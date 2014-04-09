var products = [
	{id : 7, name : "pen", cost : 20, units : 10, category : 1},
	{id : 2, name : "hen", cost : 10, units : 80, category : 2},
	{id : 6, name : "ten", cost : 30, units : 20, category : 1},
	{id : 5, name : "len", cost : 10, units : 70, category : 2},
	{id : 4, name : "den", cost : 20, units : 50, category : 1},
	{id : 1, name : "zen", cost : 14, units : 30, category : 2}
]

function sort(list){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++){
       if (list[i].id > list[j].id){
         var temp = list[i];
         list[i] = list[j];
         list[j] = temp;
       }
    }
}