// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const removeIdKey = (employees) => {
    employees.forEach(element => {
        delete(element.id)
    });
    return employees;
}

const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 27,
      id : 1
    },
    {
      firstName: "Ana",
      lastName: "Rosy",
      age: 25,
      id : 2
    },
    {
      firstName: "Zion",
      lastName: "Albert",
      age: 30,
      id : 3
    },
  ];

  const filterdArray = removeIdKey(employees);

  