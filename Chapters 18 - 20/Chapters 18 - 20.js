courses = []
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
for (i = 0; i < courses.length; i++) {
	if (newCourses == i) {
		newCourse1 = prompt("Course " + i);                                
		//courses.splice(courses.indexOf(i), 1, newCourse1);
		updatedCourses = courses.toString()
		updatedCourses = updatedCourses.replace(i, newCourse1);
      		alert(updatedCourses);
	}
