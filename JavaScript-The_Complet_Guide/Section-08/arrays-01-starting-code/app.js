// const numbers = [1, 2, 3];

// const moreNumbers = new Array("Hi", "Welcome");
// const moreNumbers = new Array(1, 5);
// const moreNumbers = new Array(5);

// const yetMoreNumbers = Array.of(1, 2);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);

// const arrayListItems = Array.from(listItems);

// console.log(arrayListItems);

// const hobbies = ["Cooking", "Sports"];

// const personalData = [30, "Max", { moreDtail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5.4, 2.1],
// ];

// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading");
// hobbies.unshift("Coding");
// const popedValue = hobbies.pop();
// const shiftValue = hobbies.shift();
// console.log(shiftValue);
// console.log(popedValue);
// hobbies[1] = "Coding";
// // hobbies[5] = "Reading";
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, "Good Food");
// console.log(hobbies);

// const removedElements = hobbies.splice(0, 1);
// console.log(hobbies);
// console.log(removedElements);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.66, 3]);

// testResults.push(4.91);

// console.log(storedResults, testResults);
// // console.log(testResults.indexOf(1.5));
// console.log(testResults.lastIndexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: "Max" }, { name: "Manuel" }];

// console.log(personData.indexOf({ name: "Max" }));

// const manuel = personData.find((person, index, persons) => {
//   return person.name === "Manuel";
// });

// console.log(personData.indexOf(manuel));

// const maxIndex = personData.findIndex((person, index, persons) => {
//   return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];

// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// // console.log(taxAdjustedPrices);

// prices.forEach((val, idx, arr) => {
//   const priceObj = { index: idx, taxAdjPrice: val * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];

const tax = 0.19;

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// console.log(taxAdjustedPrices);

const taxAdjustedPrices = prices.map((val, idx, arr) => {
  const priceObj = { index: idx, taxAdjPrice: val * (1 + tax) };
  return priceObj;
});

console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log(sum);

// const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// const data = "New York;10.10;2000";

// const transfrormedData = data.split(";");
// transfrormedData[1] = +transfrormedData[1];
// console.log(transfrormedData);

// const nameFragments = ["Max", "Schwarz"];
// const name = nameFragments.join(" ");
// console.log(name);

// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr");
// console.log(copiedNameFragments, nameFragments);

// console.log(Math.min(...prices), Math.max(...prices));

// const persons = [
//   { name: "Max", age: 30 },
//   { name: "Manuel", age: 31 },
// ];

// const copiedPersons = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];

// persons.push({ name: "Anna", age: 29 });

// console.log(persons, copiedPersons);

const nameData = ["Max", "Schwarz", "Mr", 30];

// const firstName = nameData[0];
// const lastName = nameData[1];

const [firstName, lastName, ...otherInformation] = nameData;

console.log(firstName, lastName, otherInformation);
