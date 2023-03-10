// Pure function
function add(num1, num2) {
  return num1 + num2;
}

// not Pure function
console.log(add(1, 5));
console.log(add(12, 15));

function addRandom(num1) {
  return num1 + Math.random();
}

console.log(addRandom(5));

// side effects function
let previousResult = 0;

function addMoreNumbers(num1, num2) {
  const sum = num1 + num2;
  previousResult = sum;
  return sum;
}

console.log(addMoreNumbers(1, 5));

const hobbies = ["Sports", "Cooking"];

function printHobbies(h) {
  h.push("New Hobby");
  console.log(h);
}

printHobbies(hobbies);

//////////////////////////////////////

// factory function

let mulitplier = 1.1;

function createTaxCalculator(tax) {
  function calulateTax(amout) {
    console.log(mulitplier);
    return amout * tax * mulitplier;
  }
  return calulateTax;
}

mulitplier = 1.1;

const calculateVatAmout = createTaxCalculator(0.19);

const calculateincomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmout(100));
console.log(calculateVatAmout(200));

////////////////////////////////////////////

// Closures

let userName = "Max";

function greetUser() {
  let name = "Anna";
  console.log("Hi " + name);
}

let name = "Maximilian";

userName = "Manuel";

greetUser();

//////////////////////

// Recursion

// function powerOf(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) return x;
  // return x * powerOf(x, n - 1);

  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

///////////////////////////////

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Hari",
            },
            {
              name: "Amilia",
            },
          ],
        },
      ],
    },
    {
      name: "julia",
    },
  ],
};

function printFrindNames(person) {
  const collectedNames = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...printFrindNames(friend));
  }

  return collectedNames;
}

console.log(printFrindNames(myself));
