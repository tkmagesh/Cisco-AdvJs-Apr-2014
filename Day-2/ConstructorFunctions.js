/*
Modify the below constructor function to exhibit the following behavior
1. "id" should be readonly after the object is created
2. "name" cannot be assigned an empty string value
3. "salary" cannot be assigned a new value that is less than the old value 
*/

function Employee(id,name,salary){
  this.id = id;
  this.name = name;
  this.salary = salary;
}