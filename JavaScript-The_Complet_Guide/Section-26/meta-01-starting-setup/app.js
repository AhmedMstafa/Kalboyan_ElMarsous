const uid = Symbol("uid");
const u2d = Symbol("uid");

// unique identifiers which can't be accidentally overriden

const user = {
  [uid]: "p1",
  name: "Max",
  age: 30,
};

// app land => Using the Libarary

console.log(user[uid]);

// symbol.toStringTag
const user2 = {
  [uid]: "p1",
  name: "Max",
  age: 30,
  [Symbol.toStringTag]: "user",
};

console.log(user2.toString());

// iterator

const company = {
  curEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  // next() {
  //   if (this.curEmployee >= this.employees.length) {
  //     return { value: this.curEmployee, done: true };
  //   }
  //   const returnValue = {
  //     value: this.employees[this.curEmployee],
  //     done: false,
  //   };
  //   this.curEmployee++;
  //   return returnValue;
  // },
  [Symbol.iterator]: function* employeeGenerator() {
    // let employee = company.next()

    // while (!employee.done) {
    //   console.log(employee.value);
    //   employee = company.next();
    // }

    let curEmployee = 0;
    while (curEmployee < this.employees.length) {
      yield this.employees[curEmployee]; // return value has a next method
      curEmployee++;
    }
  },
};

// console.log(company.next());
// console.log(company.next());
// console.log(company.next());
// console.log(company.next());

// let employee = company.next();

for (const employee of company) {
  console.log(employee);
}

console.log(...company);

// while (!employee.done) {
//   console.log(employee.value);
//   employee = company.next();
// }

// Generator and Iterable Objects

// const persons = ["max", "manul", ]

// Reflect Api

const course = {
  title: "javaScript - The Complete Guide",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

Reflect.defineProperty(course, "object", { value: "4" });

// Reflect.deleteProperty(course, "title"); // Object => delate

console.log(course);
console.log(course.toString());

// Proxy Api

const courseHandler = {
  get(object, propertyName) {
    // console.log(propertyName);
    return object[propertyName] || "Not Found";
  },
  set(object, propertyName, newValue) {
    object[propertyName] = newValue;
  },
};

const pCourse = new Proxy(course, courseHandler);

console.log(pCourse.title);
console.log(pCourse.title, pCourse.object, pCourse.rating);
