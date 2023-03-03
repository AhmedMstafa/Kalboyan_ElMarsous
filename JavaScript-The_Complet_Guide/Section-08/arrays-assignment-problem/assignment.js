/////////////////////#1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterArr = arr.filter((value) => {
  return value > 5;
});

console.log(filterArr);

const mapArr = arr.map((val) => ({ number: val }));

console.log(mapArr);

const reduceArr = arr.reduce((p, c) => {
  return p * c;
});

console.log(reduceArr);

/////////////////////#2

const findMax = (...numbers) => {
  let curMax = numbers[0];
  for (const num of numbers) {
    if (num > curMax) {
      curMax = num;
    }
  }

  return curMax;
};

console.log(findMax(...arr));

/////////////////////#3

// const findMax = (...numbers) => {
//   const maxNumber = numbers.reduce((p, c) => {
//     return p > c ? (p = p) : (p = c);
//   });
//   const minNumber = numbers.reduce((p, c) => {
//     return p < c ? (p = p) : (p = c);
//   });
//   return [minNumber, maxNumber];
// };

// let [minMumber, maxNumber] = findMax(...arr);
// console.log(minMumber, maxNumber);

const findMinMax = (...numbers) => {
  let curMin = numbers[0];
  let curMax = numbers[0];
  for (const num of numbers) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }

  return [curMin, curMax];
};

const [min, max] = findMinMax(...arr);

console.log(min, max);

/////////////////////#4

const list = new Set();
list.add(10);
list.add(5);
list.add(5);

console.log(list);
