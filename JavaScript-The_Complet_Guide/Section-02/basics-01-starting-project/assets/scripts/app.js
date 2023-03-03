// Syntax
// alert("This Works!");

/*/////////////////////////////////////////
Variables & consatans

is : 
a "Data container" / "Data Storge"

create avariable by using:
[1] let => where the value can change.
[2] const => Where teh value must not change.

variable Naming:
[1] camelCase => userName 
[2] case sensitive => Uppercase | Small case
[3] you can : Only letters and digits => ageGroup5
[4] you can : Startin with $ => $KindOfSpecial

variable Naming[Not Allowed]:
[user_name]
[21Players] => Starting digits
[user-b] => No special charactes!
[let let] => Keywords Not allowed
*/ ///////////////////////////////////////

// let currentResult = 0;

/*////////////////////////////////////////
Operators

is: 
a syntax feature in javascript that allows us to manipulate values
[+] Add tow numbers
[-] Subtaract two numbers
[*] Multiplay tow numbers
[/] Divide two numbers
[=] equal to assign a value to left variable
*/ ////////////////////////////////////////

// let currentResult = 0;

// currentResult = currentResult + 10 * 3;

// outputResult(currentResult, "");

/*/////////////////////////////////////////
DataTypes

[1] Numbers => [2, -3, 22.956]
[2] Strings (Text) => ["Hi",'Hi',`Hi`]

- String concatenation => build a string from multiple substrings.
["" + ""]  , ['' + ''] , ["" + value + ""]

- Template literal => use back tick
[` string  ${value} `]
- can easly add line break

- line break without back tick =>  ["An Error \n" +
"occurred!"]

- the charcter after the backslash considerd => "\\ \"\"\""
 */ ///////////////////////////////////////

// const defaultResult = 0;

// let currentResult = defaultResult;

// currentResult = ((currentResult + 10) * 3) / 2 - 1;

// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

// outputResult(currentResult, calculationDescription);

/*/////////////////////////////////////////
Functions

is: a "Code on Demand"

[1] Define Function => 
function Keyword + any name + (paramters) + {
    function body between curly braces
}

[2] Call Function => 
greeUser("max");

- JavaScript => registers all functions before it then really executes your script!

- global scope 

- lockal or block scope =>  shadowed variables 

- return 
[1] any code after return won't execte "retrun end teh function execution"
[2] only one return statement 

-indirect / direct function excution 
 */ ///////////////////////////////////////

// const defaultResult = 0;

// let currentResult = defaultResult;

// function add() {
//   currentResult = currentResult + userInput.value;
//   outputResult(currentResult, "");
// }

// addBtn.addEventListener("click", add);

/*/////////////////////////////////////////
Converting

convert  string to number => parseInt(); integer
convert  string to number => parseFloat(); flaot
convert  string to number => +string;
convert  number to string => number.toString();

- template literal => eny valus you pass in converted to string

#Refactoring

Operators:

[=] => Assign value to variable
[+=, -=] perform calculation and re-assign result to variable
[++,--] increment / Decrement variable value + re-assign

Data Types:

Booleans => [true / false] => important for conditional code situations wher you only have 2 options
Objects => [{name: 'Max', age: 31}] => important for grouped/ related data, lelps you with organizing data
Arrays => [[1, 3, 5]] => important for list data, unknown amounts of data

 */ ///////////////////////////////////////

// // Gets input from input field
// const defaultResult = 0;

// let currentResult = defaultResult;

// function getUserNumberInput() {
//   return parseInt(usrInput.value);
// }

// // Generates and writes calcultation log
// function createAndWriteOutput(parameter, resultBeforeCalc, calcNumber) {
//   const calcDescription = `${resultBeforeCalc} ${parameter} ${calcNumber}`;
//   outputResult(currentResult, calcDescription); // from vendor file
// }

// function add() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult += enterdNumber;
//   createAndWriteOutput("+", initialResult, enterdNumber);
// }

// function subtract() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult -= enterdNumber;
//   createAndWriteOutput("-", initialResult, enterdNumber);
// }

// function multiply() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult *= enterdNumber;
//   createAndWriteOutput("*", initialResult, enterdNumber);
// }
// function divide() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enterdNumber;
//   createAndWriteOutput("/", initialResult, enterdNumber);
// }

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);

/*/////////////////////////////////////////

Arrays => [1, 3, 5] => important for list data, unknown amounts of data

to add =>  arrayName.push()
to get => arrayName[indexNumber]
- arrays are zero based => [0,1,2]

 */ ///////////////////////////////////////

// const defaultResult = 0;

// let currentResult = defaultResult;
// let LogEntries = [];

// function getUserNumberInput() {
//   return parseInt(usrInput.value);
// }

// // Generates and writes calcultation log
// function createAndWriteOutput(parameter, resultBeforeCalc, calcNumber) {
//   const calcDescription = `${resultBeforeCalc} ${parameter} ${calcNumber}`;
//   outputResult(currentResult, calcDescription); // from vendor file
// }

// function add() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult += enterdNumber;
//   createAndWriteOutput("+", initialResult, enterdNumber);
//   LogEntries.push(enterdNumber);
//   console.log(LogEntries[0]);
// }

// function subtract() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult -= enterdNumber;
//   createAndWriteOutput("-", initialResult, enterdNumber);
// }

// function multiply() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult *= enterdNumber;
//   createAndWriteOutput("*", initialResult, enterdNumber);
// }
// function divide() {
//   const enterdNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enterdNumber;
//   createAndWriteOutput("/", initialResult, enterdNumber);
// }

// addBtn.addEventListener("click", add);
// subtractBtn.addEventListener("click", subtract);
// multiplyBtn.addEventListener("click", multiply);
// divideBtn.addEventListener("click", divide);

/*/////////////////////////////////////////

Objects => {name: 'Max', age: 31} => important for grouped/ related data, lelps you with organizing data

objectName { key: 'value',}
-value can be any data type !

- acces data on objects => objectName.dataName


 */ ///////////////////////////////////////

const defaultResult = 0;

let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calcultation log
function createAndWriteOutput(parameter, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${parameter} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    preveErsult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enterdNumber;
  createAndWriteOutput("+", initialResult, enterdNumber);
  writeToLog("ADD", initialResult, enterdNumber, currentResult);
}

function subtract() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enterdNumber;
  createAndWriteOutput("-", initialResult, enterdNumber);
  writeToLog("SUBTRACT", initialResult, enterdNumber, currentResult);
}

function multiply() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enterdNumber;
  createAndWriteOutput("*", initialResult, enterdNumber);
  writeToLog("MULTIPLY", initialResult, enterdNumber, currentResult);
}
function divide() {
  const enterdNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enterdNumber;
  createAndWriteOutput("/", initialResult, enterdNumber);
  writeToLog("DIVIDE", initialResult, enterdNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

/*/////////////////////////////////////////

Special Values

null // undefined / NaN

undefined:
=> Default value of unitialized variables
=> you shouldn't assign undefined as a value amnualy

null:
=> Never assumed by default
=> you can assign this is avalue if want to "reset" / "clear" a variable

Nan: [Not a type!]
=> Technically, it's of type number and can therefore be used in calculatins
=> It yields a new NaN and it's the result of inalid calcuations


 */ ///////////////////////////////////////
