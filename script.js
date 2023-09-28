// Challenge 1

const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  const youngPeople = people
        .filter((person) => person.age <=25)
        .map((person) => {
            return {
                name: person.firstName + ' ' + person.lastName,
                email: person.email,
            }
        })
        console.log(youngPeople);

// Challenge 2

const numbers = [2, -30, 50, 20, -12, -9, 7];

const postiveNumber = (numbers = []) => {
    const positive = number => typeof number === 'number' && number > 0;
    const sum = numbers.reduce((acc, cur) => {
       if(positive(cur)){
          acc += cur;
       };
       return acc;
    }, 0);
    return sum;
 };
 console.log(postiveNumber(numbers));

// Chellenge 3

const words = ['coder', 'programmer', 'developer'];

const capitalizedWords = words.map(words => words.charAt(0).toUpperCase() + words.slice(1));
    
console.log(capitalizedWords);