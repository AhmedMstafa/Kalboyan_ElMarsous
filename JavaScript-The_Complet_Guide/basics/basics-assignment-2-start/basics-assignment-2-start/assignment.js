const task3Element = document.getElementById("task-3");

function one() {
  alert("Hello World");
}

function two(name) {
  alert("Hi " + name);
}

one();

two("Ahmed");

task3Element.addEventListener("click", one);

function brandNew(one, two, three) {
  alert(`${one} ${two} ${three}`);
}

brandNew("it is a", "beautiful", "day");
