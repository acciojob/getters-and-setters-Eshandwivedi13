class Person {
	constructor(name, age){
		this._name = name;
		this._age = age;
	}
	get name(){
		return this._name;
	}
	set name(name){
		this._name = name;
	}
	set age(age){
		this._age = age;
	}
	get age(){
		return this._age;
	}
}

class Student extends Person {
	study(){
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	teach(){
		console.log(this.name + " is teaching");
	}
}
//console.log(person.age); // Output: 25 (using the getter)
//person.age = 30; =>  Using the setter to set a new value


// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
