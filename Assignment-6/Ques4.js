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


console.log(person.fullName());

const arr = [{...new Person('abc', 'def', 10)}, {...new Person('ghi', 'jkl', 17)}, {...new Person('mno', 'pqr', 21)}];

console.log(Person.averageAge(arr))

