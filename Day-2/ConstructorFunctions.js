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

/* Solution */
function Employee(id,name,salary){
    if (this.constructor.name !== "Employee")
          return new Employee(id,name,salary);

    var _id = id,
        _name = name,
       _salary = salary;
    this.id = function(){
        return _id;
    }
    this.name = function(val){
       if (typeof val === "undefined") return _name;
       if (val !== "") _name = val;
    }
    this.salary = function(val){
       if (typeof val === "undefined") return _salary;
       if (val > _salary) _salary = val;
    }
}