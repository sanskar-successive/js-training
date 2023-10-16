// 3.1 Create a class Person with properties name, age, gender, and interests. 
//     Add a method greeting() that returns a string introducing the person. 
//     Also add a method farewell() that returns a string saying goodbye to the person.

// 3.2 Create a class Student that inherits from the Person class and has a property studies. 
//     Override the greeting() method to include information about what the student is studying.

// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
//     Override the farewell() method to include information about what the teacher teaches.

class Person{
    constructor(name, age, gender, interest){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
    }

    greetings(){
        return `Welcome ${this.name}`;
    }

    farewell(){
        return `Goodbye ${this.name}`;
    }
}

class Student extends Person{
    constructor(name, age, gender, interest, studies){
        super(name, age, gender, interest);
        this.studies = studies;
    }

    greetings(){
        return `${this.name} studies ${this.studies}`;
    }
}

class Teacher extends Person{
    constructor(name, age, gender, interest, subjectTaught){
        super(name, age, gender, interest);
        this.subjectTaught = subjectTaught;
    }

    farewell(){
        return `${this.name} teaches ${this.subjectTaught}`
    }
}

const person = new Person("abc", 100, "Male", "google search");

const student = new Student("pqr", 80, "Female", "Watching reels", "Maths");

const teacher = new Teacher("xyz", 60, "Female", "Listening podcasts", "Algorithms");