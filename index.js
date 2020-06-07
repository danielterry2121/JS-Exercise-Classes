/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person class whose constructor initializes `name` and `age` from arguments.
    - All instances of Person should also initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
	constructor(name,age) {
		this.name = name;
		this.age = age;
		this.stomach = [];
	}
	eat(food) {
		if(this.stomach.length <= 9){this.stomach.push(food);
		}
		else{
			console.log(`You are full and need to poop!`);
		}
	}
	poop() {
		this.stomach = [];
	}
	toString () {
		return `${this.name} , ${this.age}`;
	}
}
peep = new Person("Daniel",26);
console.log(peep);
console.log(peep.toString());
peep.eat('pizza');
console.log(peep);
peep.poop();
console.log(peep);
/*
  TASK 2
    - Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
	constructor(model,milesPerGallon) {
		this.model = model;
		this.milesPerGallon = milesPerGallon;
		this.odometer = 0;
		this.tank = 0;
	}
	fill(){
		if(this.tank <=5) {
		this.tank += 10;
	}
	else if(this.tank > 5 && this.tank < 8) {
		this.tank += 5;
	}
	else if (this.tank > 10){
		this.tank = 10;
		console.log('Tank is full!');
	}
  }
  drive(distance){
  		let trueDistance = this.tank * this.milesPerGallon;
  		let damages = (trueDistance - distance)/this.milesPerGallon;
  		let equat = Math.round(this.tank - damages);
  		 if(damages > 0 && equat > 0 ){
  		this.tank = equat;
  		this.odometer += Math.round(damages);
  		console.log(`I still have gas at ${this.odometer} miles!`);
  		}
  		else{
  			this.tank = 0;
  			this.odometer += Math.round(trueDistance);
  			console.log(`I ran out of gas at ${this.odometer} miles!`);
  		}
   }
}

car = new Car('ford', 11);
console.log(car);
car.drive(100);
console.log(car);
car.fill();
console.log(car);
car.drive(5);
console.log(car);
car.fill();
car.drive(30);
console.log(car);
car.fill();
car.drive(180);
console.log(car);

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
	constructor(keys) {
		this.name = keys.name;
		this.age = keys.age;
		this.location = keys.location;
	}
	speak() {
		return `Hello my name is ${this.name} , I am from ${this.location}`;
		}
	}
let lammy = new Lambdasian({name:"Lammy" , age: 26 , location:"Vermont" });

console.log(lammy.speak());

/*
  TASK 4
    - Write an Instructor class extending Lambdasian.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        + `catchPhrase`: i.e. `Don't forget the homies`.
    - The constructor calls the parent constructor passing it what it needs.
    - The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    - Instructor instances have the following methods:
        + `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        + `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{
	constructor(data) {
		super(data);
		this.specialty = data.specialty;
		this.catchPhrase = data.catchPhrase;
		this.favLanguage = data.favLanguage;
	}
	demo(subject){
		return ` Today we are learning about ${subject}`;
	}
	grade(studentz,subject){
		let student = new Lambdasian({name:studentz});
		return `${student.name} receives a perfect score on ${subject}`;
	}
}
pace = new Instructor({name:"Pace", age:"Old", location:"Mom's garage", specialty: "JS" , favLanguage: "JS" , catchPhrase: "I'm going to talk to someone about that."})
console.log(pace);
console.log(pace.grade('daniel', 'Coding'));
console.log(pace.demo('Java'));
/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian{
	constructor(data) {
		super(data);
		this.previousBackground=data.previousBackground;
		this.className = data.className;
		this.favSubjects = data.favSubjects;
	}
	listSubjects(){
		let str = this.favSubjects.toString();
		return ` Loving ${str}! `;
	}
	PRAssignment(subject){
		return ` ${this.name} has submitted a PR for ${subject}`;
	}
	sprintChallenge(subject){
		return ` ${this.name} has begun a sprint challenge on ${subject}`;
	}
}
let daniel = new Student({name:"Daniel", age:26, previousBackground:"Business",className:"Web Dev", favSubjects:["Python", "HTML", "Javascript", "CSS", "React"]});
console.log(daniel);

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor{
	constructor(manager){
		super(manager);
		this.gradClassName = manager.gradClassName;
		this.favInstructor = manager.favInstructor;
	}
	standUp(channel) {
		return ` ${this.name} announces to ${channel}, @channel standy times!`
	}
	debugsCode(student,subject){
		return `${this.name} debugs ${student.name}/'s code on ${subject}`;
	}
}

let christine = new ProjectManager({name:"Christine", age:"never as a womans age",gradClassName:"web21",favInstructor:'sean'});
console.log(christine.standUp("webpt19"));
console.log(christine.debugsCode(daniel,"in your dreams"));

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
