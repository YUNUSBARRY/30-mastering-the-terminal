// // Import the Express library
// const express = require("express");
// const app = express();

// // Define the port for the server to listen on
// const PORT = 3000;

// // Set up a route for the root URL
// app.get("/", (req, res) => {
//   res.send("Hello, World! This is your server speaking. Barry hear's you");
// });

// // Start the server and listen for incoming requests
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

class Pet {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      const { name, age } = this;
      return `My name is ${name} and I am ${age} years old`;
    }
  }
  
  class Cat extends Pet {
    constructor(name, age, owner) {
      super(name, age);
      this.owner = owner;
    }
    meow() {
      return `${'Meow '.repeat(3)} ${this.owner} is my owner`
    }
  }
  
  class Dog extends Pet {
    bark() {
      return "Wooh!!!!  ".repeat(3);
    }
  }
  
  const dogTalk = new Dog("Tilson", 14);
  const catTalk = new Cat("Hunnsa", 14, 'Yunus Barry');
  
  console.log(dogTalk.bark());
  console.log(catTalk.meow()); 

console.log(dogTalk.name, 'and', catTalk.name, 'are best buddies')

const person = {
  name: 'Yunus Barry',
  age: 29,
  job: 'Engineer',
  country: 'Guinea'
}