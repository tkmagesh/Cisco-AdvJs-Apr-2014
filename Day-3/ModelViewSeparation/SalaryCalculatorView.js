function SalaryCalculatorView(model,templateId){
		var $txtBasic, $txtHra, $txtDa, $rangeTax, $spanTax, $divResult;
		var calculator = model;
		this.$root = $("<div>");

		this.init = function (){
			/*View Changes*/
			//$("#btnCalculate").click(onBtnCalculateClick);
			
		/*	$txtBasic = $("#txtBasic");
			$txtHra = $("#txtHra");
			$txtDa = $("#txtDa");
			$rangeTax = $("#rangeTax");
			$spanTax = $("#spanTax");
			$divResult = $("#divResult");*/

			this.$root.on("change","#txtBasic",onTxtBasicChange);
			this.$root.on("change","#txtHra",onTxtHraChange);
			this.$root.on("change","#txtDa",onTxtDaChange);
			this.$root.on("change","#rangeTax",onRangeTaxChange);
			this.$root.on("click","#btnCalculate",onBtnCalculateClick);
			

			/*Model Changes*/
			calculator.addChangeListener("basic",(function(){
				this.$root.find("#txtBasic").val(calculator.basic());
			}).bind(this));

			calculator.addChangeListener("hra",(function(){
				this.$root.find("#txtHra").val(calculator.hra());
			}).bind(this));

			calculator.addChangeListener("da",(function(){
				this.$root.find("#txtDa").val(calculator.da());
			}).bind(this));

			calculator.addChangeListener("tax",(function(){
				this.$root.find("#rangeTax").val(calculator.tax());
				this.$root.find("#spanTax").html(calculator.tax());
			}).bind(this));

			calculator.addChangeListener('salary', (function(){
				this.$root.find("#divResult").html(calculator.salary());
			}).bind(this));

		}
		function onTxtBasicChange(){
			calculator.basic(parseInt(this.value,10));
		}
		function onTxtHraChange(){
			calculator.hra(parseInt(this.value,10));
		}
		function onTxtDaChange(){
			calculator.da(parseInt(this.value,10));
		}
		function onBtnCalculateClick(){
			calculator.calculate();
			
		}
		function onRangeTaxChange(){
			calculator.tax(parseInt(this.value,10));
		}

		this.render = function(){
			this.$root.append($(templateId).html());
			return this;
		}
	}
	