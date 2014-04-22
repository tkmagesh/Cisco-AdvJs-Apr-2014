/*var SalaryCalculator = Backbone.Model.extend({
	defaults:{
		basic : 0,
		hra : 0,
		da : 0,
		tax :0,
		salary :0
	},
	calculate : function(){
		var gross = this.get('basic') + this.get('hra') + this.get('da');
			_salary = gross * ((100-this.get('tax'))/100);
		this.set('salary',_salary);
	}
});*/

var SalaryCalculator = {
		basic : 10000,
		hra : 2000,
		da : 3000,
		tax :10,
		salary :0,
	
	calculate : function(){
		var gross = this.basic + this.hra + this.da;
			_salary = gross * ((100-this.tax)/100);
		//this.set('salary',_salary);
		this.salary = _salary;
	}
};