var courses = [];
var course1 = prompt("Course 1: ");
var course2 = prompt("Course 2: ");
var course3 = prompt("Course 3: ");
var course4 = prompt("Course 4: ");
var course5 = prompt("Course 5: ");
courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);
newCourses = prompt(courses);
if (newCourses == course1) {
	newCourse1 = prompt("Course 1: ");                                
	courses.splice(courses.indexOf(course1), 1, newCourse1);
      	alert(courses);
}

else if (newCourses == course2) {
        newCourse2 = prompt("Course 2: ");
        courses.splice(courses.indexOf(course2), 1, newCourse2);
        alert(courses);
}

else if (newCourses == course3) {
        newCourse3 = prompt("Course 3: ");
        courses.splice(courses.indexOf(course3), 1, newCourse3);		                      
        alert(courses);
}

else if (newCourses == course4) {
        newCourse4 = prompt("Course 4: ");                                		                            
        courses.splice(courses.indexOf(course4), 1, newCourse4);
        alert(courses);
}

else if (newCourses == course5) {
        newCourse5 = prompt("Course 5: ");       
        courses.splice(courses.indexOf(course5), 1, newCourse5);                        
        alert(courses);
} 
