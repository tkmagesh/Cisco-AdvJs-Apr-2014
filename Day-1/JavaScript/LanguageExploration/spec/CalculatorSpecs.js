describe("A calculator",function(){
	it("should be able to sum two numbers",function(){
		//arrange
		var n1 = 10, n2 = 20, expectedResult = 30;

		//act
		var result = calculator.sum(n1,n2);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum two numbers in string format",function(){
		//arrange
		var n1 = "10", n2 = "20", expectedResult = 30;

		//act
		var result = calculator.sum(n1,n2);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum two functions returning numbers",function(){
		//arrange
		var f1 = function(){ return 10;}
			, f2 = function(){ return 20;}
			, expectedResult = 30;

		//act
		var result = calculator.sum(f1,f2);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum two functions returning numbers in string format",function(){
		//arrange
		var f1 = function(){ return "10";}
			, f2 = function(){ return "20";}
			, expectedResult = 30;

		//act
		var result = calculator.sum(f1,f2);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum only one number",function(){
		//arrange
		var n1 = 10
			,expectedResult = 10;

		//act
		var result = calculator.sum(n1);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should return 0 when sum is invoked with no arguments",function(){
		//arrange
		var expectedResult = 0;

		//act
		var result = calculator.sum();

		//assert
		expect(result).toBe(expectedResult);
	})
	it("should be able to sum more than 2 numbers",function(){
		//arrange
		var n1 =10
			,n2 = 20
			,n3 = 30
			,expectedResult = 60;

		//act
		var result = calculator.sum(n1,n2,n3);

		//assert
		expect(result).toBe(expectedResult);
	})
	it("should be able to sum an array of numbers",function(){
		//arrange
		var numbers = [10,20,30]
			,expectedResult = 60;

		//act
		var result = calculator.sum(numbers);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum an array of functions returning numbers in string format",function(){
		//arrange
		var f1 = function(){ return "10";}
			, f2 = function(){ return "20";}
			, expectedResult = 30;

		//act
		var result = calculator.sum([f1,f2]);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum an array of functions returning array of numbers in string format",function(){
		//arrange
		var f1 = function(){ return ["10","20"];}
			, f2 = function(){ return ["30","40"];}
			, expectedResult = 100;

		//act
		var result = calculator.sum([f1,f2]);

		//assert
		expect(result).toBe(expectedResult);
	});
	it("should be able to sum an array of functions returning nested array of numbers in string format",function(){
		//arrange
		var f1 = function(){ return ["10",["20",["30",["40"]]]];}
			, f2 = function(){ return ["30","40"];}
			, expectedResult = 170;

		//act
		var result = calculator.sum([f1,f2]);

		//assert
		expect(result).toBe(expectedResult);
	});
})