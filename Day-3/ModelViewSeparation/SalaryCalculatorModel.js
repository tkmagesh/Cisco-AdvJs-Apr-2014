function SalaryCalculator(){
		var _basic = 0,
			_hra = 0,
			_da = 0,
			_tax = 0,
			_salary = 0;

		this.subscribers = {};

		this.addChangeListener = function(attrName,callbackFn){
			this.subscribers[attrName] = this.subscribers[attrName] || [];
			this.subscribers[attrName].push(callbackFn);
		}
		//var that = this;

		var triggerSubscribers = (function triggerSubscribers(attrName){
			var subscribers = this.subscribers[attrName] || [];
			for(var i=0;i<subscribers.length;i++)
				setTimeout(subscribers[i]);
		}).bind(this);



		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			triggerSubscribers("basic");
		};
		this.hra = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			triggerSubscribers("hra");
		};
		this.da = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			triggerSubscribers("da");
		};
		this.tax = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			triggerSubscribers("tax");
		};
		this.salary = function(){
			return _salary;
		}

		this.calculate = function(){
			var gross = this.basic() + this.hra() + this.da();
			_salary = gross * ((100-this.tax())/100);
			triggerSubscribers("salary")
		}
	}