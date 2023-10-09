const arraySort = (employees) => {
  employees.sort((i, j) => {
    if (i.age > j.age) return 1;
    else return -1;
  });

  return employees;
};

const employees = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    joinedDate: "December 15, 2017",
  },

  {
    firstName: "Ana",
    lastName: "Rosy",
    age: 25,
    joinedDate: "January 15, 2019",
  },

  {
    firstName: "Zion",
    lastName: "Albert",
    age: 30,
    joinedDate: "February 15, 2011",
  },
];

const sortedArray = arraySort(employees);

