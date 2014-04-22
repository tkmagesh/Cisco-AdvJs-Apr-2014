var SalaryCalculatorView = Backbone.View.extend({
	id : 'content',
	initialize : function(){
		this.listenTo(this.model,"change",this.render);
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
		this.model.set('basic',parseInt(this.$("#txtBasic").val()));
		this.model.set('hra',parseInt(this.$("#txtHra").val()));
		this.model.set('da',parseInt(this.$("#txtDa").val()));
		this.model.set('tax',parseInt(this.$("#rangeTax").val()));
	},
	render : function(){
		this.$("#txtBasic").val(this.model.get('basic'));
		this.$("#txtHra").val(this.model.get('hra'));
		this.$("#txtDa").val(this.model.get('da'));
		this.$("#rangeTax").val(this.model.get('tax'));
		this.$("#spanTax").html(this.model.get('tax'));
		this.$("#divResult").html(this.model.get('salary'));
	}
});
