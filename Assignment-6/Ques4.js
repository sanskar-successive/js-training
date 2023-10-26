
// 4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
//    The class should also have a method called `fullName` that returns the person's full name.
//    Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects
//    and returns the average age of all the people in the array.

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    fullName(){
        return this.firstName + ' ' + this.lastName;
    }

    static averageAge(personArr){

        let sum = 0;

        personArr.forEach(person => {
            sum += person.age;
        });

        return sum/personArr.length;
    }
}

const person = new Person('Donald', 'Trump', 73);


const arr = [{...new Person('abc', 'def', 10)}, {...new Person('ghi', 'jkl', 17)}, {...new Person('mno', 'pqr', 21)}];
