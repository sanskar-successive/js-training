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
console.log(person.greetings());
console.log(person.farewell());

const student = new Student("pqr", 80, "Female", "Watching reels", "Maths");
console.log(student.greetings());
console.log(student.farewell())

const teacher = new Teacher("xyz", 60, "Female", "Listening podcasts", "Algorithms");
console.log(teacher.greetings());
console.log(teacher.farewell())