var SalaryCalculatorView = Backbone.View.extend({
	id : 'content',
	initialize : function(){
		//this.listenTo(this.model,"change",this.render);
	},
	//subscribe to View's control events
	events : {
		"change :text" : "updateModel",
		"click #btnCalculate" : "calculateSalary"
	},
	calculateSalary : function(){
		this.model.calculate();
		this.render();
	},
	updateModel : function(){
		this.model.basic=parseInt(this.$("#txtBasic").val());
		this.model.hra=parseInt(this.$("#txtHra").val());
		this.model.da=parseInt(this.$("#txtDa").val());
		this.model.tax=parseInt(this.$("#rangeTax").val());
	},
	render : function(){
		this.$("#txtBasic").val(this.model.basic);
		this.$("#txtHra").val(this.model.hra);
		this.$("#txtDa").val(this.model.da);
		this.$("#rangeTax").val(this.model.tax);
		this.$("#spanTax").html(this.model.tax);
		this.$("#divResult").html(this.model.salary);
	}
	
});
