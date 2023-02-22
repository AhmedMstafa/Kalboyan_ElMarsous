///////////////////////////////////#1
const taskId = document.getElementById("task-1");
taskId.style.backgroundColor = "black";

const taskSelector = document.querySelector("li:first-of-type");
taskSelector.style.color = "white";

///////////////////////////////////#2

const title1 = document.querySelector("title");
const title2 = document.head.querySelector("title");

title1.textContent = "Assignment - Solved!";
title2.textContent = "Assignment - Solved!";

///////////////////////////////////#3

const h1 = document.querySelectorAll("h1");

h1[0].textContent = "Assignment - Solved!";

// const h1 = document.querySelector("h1");

// h1.textContent = "Assignment - Solved!";
