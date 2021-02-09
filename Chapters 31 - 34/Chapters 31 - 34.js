var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	var name = prompt("Type Your Name");
	var dateOfBirth = prompt("Type Your DOB (date)")
	var monthOfBirth = prompt("Type Your DOB (month)")
	var yearOfBirth = prompt("Type Your DOB (year)")

	var rightNow = new Date();


	var greet;

	var morningAfternoonEveningNight = rightNow.getHours();

	if (morningAfternoonEveningNight < 12) {
	    greet = "Good Morning";
	} else if (morningAfternoonEveningNight >= 12 && morningAfternoonEveningNight <= 17) {
	    greet = "Good Afternoon";
	} else if (morningAfternoonEveningNight >= 17 && morningAfternoonEveningNight <= 24) {
	    greet = "Good Evening";
	} else {
	    greet = "Good Night";
	}
	
	console.log("Hello " + name + ", " + greet);
	
	var todaysDay = rightNow.getDay();
	var nameOfTodaysDay = dayNames[todaysDay];
	
	var currentMonth = rightNow.getMonth();
	var nameOfCurrentMonth = monthNames[currentMonth];
	
	var todaysDate = rightNow.getDate();
	
	var currentYear = rightNow.getFullYear();
	
	var currentHour = rightNow.getHours();
	var currentMinute = rightNow.getMinutes();
	var currentSecond = rightNow.getSeconds();
	
	var birthDayText = monthOfBirth + "/" + dateOfBirth + "/" + yearOfBirth
	
	var birthDay = new Date(birthDayText);
	
	var month_difference = Date.now() - birthDay.getTime()
	
	var ageDifference = new Date(month_difference)
	
	var year = ageDifference.getUTCFullYear()
	
	var age = Math.abs(year - 1970)
	
	var ageInDays = age * 365
	
	var ageInHours = ageInDays * 24

	console.log("your dob is " + nameOfTodaysDay + " " + nameOfCurrentMonth + " " + todaysDate + " " + currentYear + " " + currentHour + ":" + currentMinute + ":" + currentSecond + " " + "GMT+0500 (Pakistan Standard Time)");
	console.log("You are " + age + " years old");
	console.log("Your Age in Days " + ageInDays);
	console.log("Your Age in Hours " + ageInHours);
	
	var myBirthday, today, bday, diff, days;
	myBirthday = [parseInt(dateOfBirth), parseInt(monthOfBirth)]; // 6th of February
	today = new Date();
	bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
	if( today.getTime() > bday.getTime()) {
	    bday.setFullYear(bday.getFullYear()+1);
	    console.log("happy Birth Day " + name);
	}
	else {
		diff = bday.getTime()-today.getTime();
		days = Math.floor(diff/(1000*60*60*24));
		console.log("your birthday Duration Days " + days);
	}
