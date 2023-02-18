// function sayHello(name) {
//   console.log("Hi " + name);
// }

// sayHello();

///////////////////#1

const sayHello1 = (name) => console.log("Hi " + name);

sayHello1("Ahmed");

///////////////////#2

const sayHello2 = (name, say = "Hi ") => console.log(say + name);

sayHello2("Ahmed");

const sayHello3 = () => console.log("Hi Ahmed");

sayHello3();

const sayHello4 = (name) => `Hi ${name}`;

console.log(sayHello4("Ahmed"));

///////////////////#3

const sayHello5 = (name = "Ahmed") => console.log("Hi " + name);

sayHello5();

///////////////////#4

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log("All not empty!");
  },
  "Hello",
  "12",
  "aaa",
  "Not empty"
);
