class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";

  constructor() {
    super();
    this.age = 30;
    // this.greet = function() {....}
  }

  // greet = () => {
  //   console.log(
  //     "Hi, I am " + this.name + " and I am " + this.age + " Years old."
  //   );
  // };

  greet() {
    console.log(
      "Hi, I am " + this.name + " and I am " + this.age + " Years old."
    );
  }
}

// function Person() {
//   this.age = 30;
//   this.name = "Max";
//   // this.greet = function() {....}
// }

// Person.prototype.greet = function () {
//   console.log(
//     "Hi, I am " + this.name + " and I am " + this.age + " Years old."
//   );
// };

// Person.describe = function () {
//   console.log("Creating persons...");
// };

// Person.prototype = {
//   printAge() {
//     console.log(this.age);
//   },
// };

// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// console.dir(Person);

// const p = new Person();
// p.greet();
// p.printAge();
// console.log(p.__proto__);
// const p2 = new p.__proto__.constructor();
// console.log(p.toString());
// console.log(p2);
// console.dir(Object.prototype.__proto__);
// console.log(p);

// console.log(p.__proto__ === Person.prototype);
// console.log(Person.prototype);

// const p = new Person();
// p.greet();
// const p2 = new Person();

// console.log(p);
// console.log(p.__proto__ === p2.__proto__);

// const btn = document.getElementById("btn");
// // btn.addEventListener("click", p.greet);
// btn.addEventListener("click", p.greet.bind(p));

const course = {
  title: "JavaScript - The Complete Guide",
  rating: 5,
}; // new Object()

// console.log(course.__proto__);

// console.log(Object.getPrototypeOf(course))

Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progoress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 0.8,
      writable: true,
    },
  }
);

// student.name = "Max";

// Object.defineProperty(student, "Progress", {
//   configurable: true,
//   enumerable: true,
//   value: 0.8,
//   writable: true,
// });

console.log(student);

course.printRating();

// course.rintRating()
