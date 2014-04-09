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

function sort(list,attrName){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++){
       if (list[i][attrName] > list[j][attrName]){
         var temp = list[i];
         list[i] = list[j];
         list[j] = temp;
       }
    }
}

function sort(list,comparerFn){
  for(var i=0;i<list.length-1;i++)
    for(var j=i+1;j<list.length;j++){
       if (comparerFn(list[i],list[j]) > 0){
         var temp = list[i];
         list[i] = list[j];
         list[j] = temp;
       }
    }
}

function productComparerByValue(p1,p2){
  var p1Value = p1.units * p1.cost,
      p2Value = p2.units * p2.cost;
  if (p1Value < p2Value) return -1;
  if (p1Value === p2Value) return 0;
  return 1;
}

sort(products,productComparerByValue);

console.table(products);



