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

function filter(list,criteriaFn){
  var result = [];
  for(var i=0;i<list.length;i++)
    if (criteriaFn(list[i]) === true)
       result.push(list[i]);
  return result;
}

var costlyProducts = filter(products,function(p){ return p.cost >= 20;})

console.table(costlyProducts)

function min(list,attrSelectorFn)
  var result = attrSelectorFn(list[i]);
  for(var i=1;i<list.length;i++){
    var currValue = attrSelectorFn(list[i]);
    if (currValue < result) result = currValue;
  }
  return result;
}

function sum(list,attrSelectorFn){
  var result = 0;
  for(var i=0;i<list.length;i++){
    var currValue = attrSelectorFn(list[i]);
    result += currValue;
  }
  return result;
}

function transform(list,transformFn){
  var result = [];
  for(var i=0;i<list.length;i++)
    result.push(transformFn(list[i]));
  return result;
}

function transform(list,transformFn){
  var result = [];
  for(var i=0;i<list.length;i++)
    result.push(transformFn(list[i]));
  return result;
}

function each(list,iterator){
  for(var i=0;i<list.length;i++)
    iterator(list[i]);
}

/*
min
max
countBy
sum

aggregate
transform - will return the transformed list
each

join
groupBy


*/

function groupBy(list,keySelectorFn){
   var result = {};
   for(var i=0;i<list.length;i++){
      var key = keySelectorFn(list[i]);
      result[key] = result[key] || [];
      result[key].push(list[i]);
   }
   return result;
}

var categories = [
  {id : 1, name : "stationary"},
  {id : 2, name : "grocery"}
]

function join(leftList, rightList, leftKeySelectorFn, rightKeySelectorFn, combinatorFn){
   var result = [];
   for(var i=0;i<leftList.length;i++){
      var leftKey = leftKeySelectorFn(leftList[i]);
      for(var j=0;j<rightList.length;j++){
         var rightKey = rightKeySelectorFn(rightList[j]);
         if (leftKey === rightKey)
            result.push(combinatorFn(leftList[i],rightList[j]));
      }
   }
   return result;
}

function productKeySelector(p){
  return p.category;
}

var result = join(products,categories,productKeySelector,function(c){ return c.id;},function(p,c){ 
   return {id : p.id, name : p.name, cost : p.cost, units : p.units,  category : c.name };
 });

console.table(result);