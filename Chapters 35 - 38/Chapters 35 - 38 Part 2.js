function factorialize(num) {
	if (num < 0)  {
		return -1;
	}
  	
  	else if (num == 0) {
  		return 1;
  	}
  	
  	else {
		return (num * factorialize(num - 1));
	}
}
		
var output = factorialize(parseInt(prompt("Factorialize a Number")));
console.log(output);
