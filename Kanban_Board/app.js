const addBtn = document.querySelectorAll(".add-item");
const columns = document.querySelectorAll(".column");

addBtn[0].addEventListener("click", addItems);
addBtn[1].addEventListener("click", addItems);
addBtn[2].addEventListener("click", addItems);

let drag = null;

mainArray = [];

if (localStorage.getItem("tasks")) {
  mainArray = JSON.parse(localStorage.getItem("tasks"));
}

getDataFromLoacalStorge();

function addItems(e) {
  let listItems = e.target.previousElementSibling;
  let itemInput = listItems.querySelectorAll(".item-input");
  let lastinputItem = itemInput[itemInput.length - 1];
  if (!lastinputItem || lastinputItem.textContent.trim() != "") {
    let item = document.createElement("div");
    item.className = "item input";
    item.innerHTML = `<div class="item-input" contenteditable ></div>
    `;
    listItems.appendChild(item);
    save(item);
  } else {
    // Add Message to user
  }
}

function save(item) {
  let input = item.firstElementChild;
  let btn = item.parentElement.nextElementSibling;
  input.focus();
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.target.blur();
    }
  });
  input.addEventListener("blur", (_) => {
    if (item.textContent.trim() != "") {
      addTaskToArray(item);
      item.remove();
      // btn.click();
      return;
    } else {
      item.remove();
      // item.firstElementChild.innerHTML =
      //   "<small class='message'>Empty task</small>";
      // setTimeout(() => {
      //   item.remove();
      // }, 400);
    }
  });
}

function addTaskToArray(item, update) {
  let text = item.textContent.trim();
  let columnId = item.parentElement.parentElement.id;
  let task = {
    id: update || columnId,
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
    column.firstElementChild.nextElementSibling.innerHTML = "";
  });
  mainArray.forEach((task) => {
    let item = document.createElement("div");
    let time = new Date(task.content.id);
    item.className = "item";
    item.setAttribute(
      "data-time",
      `${time.getDate()}-${time.getMonth() + 1}-${time.getFullYear()}`
    );
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
      columns[0].firstElementChild.nextElementSibling.appendChild(item);
    } else if (task.id == 1) {
      columns[1].firstElementChild.nextElementSibling.appendChild(item);
    } else if (task.id == 2) {
      columns[2].firstElementChild.nextElementSibling.appendChild(item);
    }
    dragItem();
  });
}

function delet(item) {
  let delet = item.lastElementChild.lastElementChild;
  delet.addEventListener("click", (_) => {
    item.remove();
    deleteTaskWith(item.getAttribute("data-id"));
  });
}

function edit(item) {
  let edit = item.lastElementChild.firstElementChild;
  let itemInput = item.firstElementChild;
  edit.addEventListener("click", (_) => {
    itemInput.setAttribute("contenteditable", "");
    itemInput.focus();
  });
  itemInput.addEventListener("blur", (_) => {
    if (itemInput.textContent == "") {
      item.remove();
      deleteTaskWith(item.getAttribute("data-id"));
    } else {
      editTaskWith(item.getAttribute("data-id"), itemInput.innerHTML);
      itemInput.removeAttribute("contenteditable");
    }
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

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", (_) => {
      drag = item;

      item.style.opacity = "0.5";
      item.lastElementChild.style.display = "none ";
    });
    item.addEventListener("dragend", (_) => {
      drag = null;
      item.style.opacity = "1";
      item.lastElementChild.style.display = "block";
    });

    columns.forEach((column) => {
      column.addEventListener("dragover", (e) => {
        e.preventDefault();
        column.style.boxShadow = " 0px 0px 15px #8BF5FA";
      });
      column.addEventListener("dragleave", (_) => {
        column.removeAttribute("style");
      });
      column.addEventListener("drop", (_) => {
        if (drag) {
          column.firstElementChild.nextElementSibling.appendChild(drag);
          dragItemWith(drag.getAttribute("data-id"), column.id);
        }
        column.removeAttribute("style");
      });
    });
  });
}

function dragItemWith(dragId, columnId) {
  mainArray = mainArray.map((task) => {
    if (task.content.id == dragId) {
      task.id = columnId;
    }
    return task;
  });
  addDataToLocalStorgeFrom(mainArray);
}

// function dragItem() {
//   let items = document.querySelectorAll(".item");
//   items.forEach((item) => {
//     item.addEventListener("dragstart", (e) => {
//       e.dataTransfer.setData("text/plain", item.getAttribute("data-id"));
//       e.dataTransfer.effectAllowed = "move";
//       item.style.opacity = "0.5";
//       item.lastElementChild.style.display = "none ";
//     });
//     item.addEventListener("dragend", (_) => {
//       // drag = null;
//       item.style.opacity = "1";
//       item.lastElementChild.style.display = "block";
//     });

//     columns.forEach((column) => {
//       // column.addEventListener("dragenter", (e) => {
//       //   e.preventDefault();
//       // });
//       column.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         column.style.boxShadow = " 0px 0px 15px #8BF5FA";
//       });
//       column.addEventListener("dragleave", (_) => {
//         column.removeAttribute("style");
//       });
//       column.addEventListener("drop", (e) => {
//         // if (e.dataTransfer.types[0] === "text/plain") {
//         // column.firstElementChild.nextElementSibling.appendChild(drag);
//         dragItemWith(e.dataTransfer.getData("text/plain"), column.id);
//         console.log(e.dataTransfer.getData("text/plain"), column.id);
//         // }
//         column.removeAttribute("style");
//       });
//     });
//   });
// }

// function dragItemWith(taskId, columnId) {
//   mainArray = mainArray.map((task) => {
//     if (task.content.id == taskId) {
//       task.id = columnId;
//     }
//     return task;
//   });
//   // addTasksToPageFrom(mainArray);
//   addDataToLocalStorgeFrom(mainArray);
// }
