const addBtn = document.querySelectorAll(".add-item");
const columns = document.querySelectorAll(".column");

addBtn[0].addEventListener("click", addItems);
addBtn[1].addEventListener("click", addItems);
addBtn[2].addEventListener("click", addItems);

mainArray = [];

if (localStorage.getItem("tasks")) {
  mainArray = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLoacalStorge();

function addItems(e) {
  let column = e.target.parentElement;
  let listItems = e.target.previousElementSibling;
  let itemInput = listItems.querySelectorAll(".item-input");
  let lastinputItem = itemInput[itemInput.length - 1];
  if (!lastinputItem || lastinputItem.textContent.trim() != "") {
    let item = document.createElement("div");
    item.className = "item";
    item.setAttribute("draggable", true);
    item.innerHTML = `<div class="item-input" contenteditable ></div>
    <span class="item-control">
    </span>
    `;
    listItems.appendChild(item);
    save(item);
  } else {
    // Add Commnt to user
  }
}

function save(item) {
  let input = item.querySelector(".item-input");
  let btn = item.parentElement.nextElementSibling;
  input.focus();
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  });
  input.addEventListener("blur", () => {
    if (item.textContent.trim() != "") {
      addTaskToArray(item);
      item.remove();
      btn.click();
      return;
    } else {
      item.remove();
    }
  });
}

function addTaskToArray(item) {
  let text = item.textContent.trim();
  let columnId = item.parentElement.parentElement.id;
  let task = {
    id: columnId,
    content: {
      id: Date.now(),
      title: text,
    },
  };
  mainArray.push(task);
  addTasksToPageFrom(mainArray);
  addDataToLocalStorgeFrom(mainArray);
}

function addTasksToPageFrom(mainArray) {
  columns.forEach((column) => {
    column.querySelector(".list-items").innerHTML = "";
  });
  mainArray.forEach((task) => {
    let item = document.createElement("div");
    item.className = "item";
    item.setAttribute("data-id", task.content.id);
    item.setAttribute("draggable", true);
    item.innerHTML = `<div class="item-input" >${task.content.title}</div>
    <span class="item-control">
    <ion-icon name="create-outline"></ion-icon>
    <ion-icon name="trash-outline"></ion-icon>
    </span>
    `;
    delet(item);
    edit(item);
    if (task.id == 0) {
      columns[0].querySelector(".list-items").appendChild(item);
    } else if (task.id == 1) {
      columns[1].querySelector(".list-items").appendChild(item);
    } else if (task.id == 2) {
      columns[2].querySelector(".list-items").appendChild(item);
    }
  });
}

function delet(item) {
  let delet = item.querySelector(".item-control :last-child");
  delet.addEventListener("click", () => {
    item.remove();
    deleteTaskWith(item.getAttribute("data-id"));
  });
}

function edit(item) {
  let edit = item.querySelector(".item-control :first-child");
  let itemInput = item.querySelector(".item-input");
  edit.addEventListener("click", () => {
    itemInput.setAttribute("contenteditable", "");
    itemInput.focus();
  });
  itemInput.addEventListener("blur", () => {
    editTaskWith(item.getAttribute("data-id"), itemInput.innerHTML);
    itemInput.removeAttribute("contenteditable");
  });
}

function addDataToLocalStorgeFrom(mainArray) {
  localStorage.setItem("tasks", JSON.stringify(mainArray));
}

function getDataFromLoacalStorge() {
  let data = localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addTasksToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  mainArray = mainArray.filter((task) => task.content.id != taskId);
  addDataToLocalStorgeFrom(mainArray);
}

function editTaskWith(taskId, input) {
  mainArray = mainArray.map((task) => {
    if (task.content.id == taskId) {
      task.content.title = input;
    }
    return task;
  });

  addDataToLocalStorgeFrom(mainArray);
}
