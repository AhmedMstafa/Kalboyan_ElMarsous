const { printTitle } = require("./Utill");

const button = document.querySelector("button");

button.addEventListener("click", printTitle);

exports.printTitle = printTitle;
