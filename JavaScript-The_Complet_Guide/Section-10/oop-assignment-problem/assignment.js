//////////////////////////////#1
class Course {
  #price;
  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw `Invalid value`;
    }
    this.#price = value;
  }

  constructor(title, lenght, price) {
    (this.title = title), (this.lenght = lenght), (this.#price = price);
  }
  getLengthPrice() {
    return this.#price / this.lenght;
  }
  courseSummary() {
    console.log(
      `Title: ${this.title} Lenght: ${this.lenght} Price: ${this.#price}`
    );
  }
}

const math = new Course("khanacademy - Math 1", 10, 50);
const english = new Course("ZAmericanEnglish", 50, 500);

console.log(math);
console.log(english);

//////////////////////////////#2

console.log(math.getLengthPrice());
console.log(english.getLengthPrice());

math.courseSummary();
english.courseSummary();

//////////////////////////////#3

class PracticalCourse extends Course {
  constructor(title, lenght, price, numOfExercises) {
    super(title, lenght, price);
    this.numOfExercises = numOfExercises;
  }
}
class TheoreticalCouse extends Course {
  publish() {
    return console.log("something");
  }
}
const angularCourse = new PracticalCourse(
  "Angular - the Complate Guide",
  10,
  50,
  20
);

console.log(angularCourse);
angularCourse.courseSummary();

const flutterCourse = new TheoreticalCouse(
  "Flutter - the Complate Guide",
  30,
  34
);

flutterCourse.courseSummary();
flutterCourse.publish();

//////////////////////////////#4

const flutterCourseTest = new TheoreticalCouse(
  "Flutter - the Complate Guide",
  30,
  -34
);

flutterCourseTest.courseSummary();
flutterCourseTest.publish();

flutterCourseTest.price = -10;
