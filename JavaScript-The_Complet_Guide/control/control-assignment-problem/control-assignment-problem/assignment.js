//////////////////////////////#1

const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

st = false;

if (randomNumber > 0.7) st = true;
while (st) {
  alert("Hello World");
  st = false;
}

//////////////////////////////#2

const Arr = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < Arr.length; i++) {
  console.log(Arr[i]);
}

for (const num of Arr) {
  console.log(num);
}

///////////////////////////////#3

for (let i = Arr.length; i > 0; ) {
  i--;
  console.log(Arr[i]);
}

///////////////////////////////#4

const randomNumberTwo = randomNumber;

let stat = false;

if (randomNumberTwo > 7.0 || !(randomNumber > 0.2)) stat = true;

while (stat) {
  alert("Hello Ahmed");
  stat = false;
}
