// Assignment 4 Chapters 10, 11, 12, 13, 14

var num1 = prompt("Enter A Number: ");
var num2 = prompt("Enter Another Number: ");
var operation = prompt("Enter A Mathematical Operation To Perform: ");

if (operation == "+") {
	alert(num1 + operation + num2 + "=" + (parseInt(num1) + parseInt(num2)));	
}

else if (operation == "-") {
	alert(num1 + operation + num2 + "=" + (parseInt(num1) - parseInt(num2)));
}

else if (operation == "*") {
	alert(num1 + opeartion + num2 + "=" + (parseInt(num1) * parseInt(num2)));
}

else if (operation == "/") {
	alert(num1 + operation + num2 + "=" + (parseInt(num1) / parseInt(num2)));
}
