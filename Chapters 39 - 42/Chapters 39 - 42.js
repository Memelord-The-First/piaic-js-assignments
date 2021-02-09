course1 = prompt("Marks For Course 1");
			course2 = prompt("Marks For Course 2");
			course3 = prompt("Marks For Course 3");
			course4 = prompt("Marks For Course 4");
			course5 = prompt("Marks For Course 5");
			
			var totalMarks = 500;
			
			var totalPercentage = ((parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5)) * 100) / totalMarks;
			
			var output = "";
			
			var decision = 0;
			
			if (totalPercentage > 90 && totalPercentage < 100) {
				decision = 1;
			}
			
			else if (totalPercentage > 75 && totalPercentage < 89) {
				decision = 2;
			}
			
			else if (totalPercentage > 60 && totalPercentage < 74) {
				decision = 3;
			}
			
			else if (totalPercentage > 45 && totalPercentage < 60) {
				decision = 4;
			}
			
			else if (totalPercentage > 30 && totalPercentage < 44) {
				decision = 5;
			}
			
			else if (totalPercentage > 0 && totalPercentage < 29) {
				decision = 6;
			}
			
			switch(decision) {
				case 1:
					output = "A+";
					break;
				case 2:
					output = "A";
					break;
				case 3:
					output = "B";
					break;
				case 4:
					output = "C";
					break;
				case 5:
					output = "D";
					break;
				case 6:
					output = "F";
					break;
			}
			
			alert(output);
