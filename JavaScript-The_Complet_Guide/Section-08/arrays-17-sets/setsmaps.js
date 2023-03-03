// const ids = new Set([1, 2, 3]);
// const ids = new Set(["Hi", "From", "Set!"]);

// ids.add(2);
// if (ids.has(2)) {
//   ids.delete(2);
// }
// console.log(ids);

// for (const entry of ids.entries()) {
//   console.log(entry[0]);
// }

// const person1 = { name: "Max" };
// const person2 = { name: "Manuel" };

// const personData = new Map([[person1, [{ date: "yesterday", price: 10 }]]]);

// personData.set(person2, [{ date: "two weeks ago", price: 100 }]);

// console.log(personData);
// console.log(personData.get(person1));

// for (const [key, value] of personData.entries()) {
//   console.log(key, value);
// }
// for (const keys of personData.keys()) {
//   console.log(keys);
// }
// for (const values of personData.values()) {
//   console.log(values);
// }

// console.log(personData.size);

let person = { name: "Max" };

const persons = new WeakSet();
// const persons = new Set();

persons.add(person);

// ... some operations

// person = null;

console.log(persons);

const personData = new WeakMap();

personData.set(person, "Extra info!");

person = null;

console.log(personData);
