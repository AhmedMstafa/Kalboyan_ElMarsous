// const columns = document.querySelectorAll(".column");
// const addItem = document.querySelectorAll(".add-item");
// let drag = null;

// // Empty Array To Store The Tasks

// let arrayOfTasks = [];

// addItem.forEach((addItem) => {
//   addItem.addEventListener("click", (e) => {
//     let listItems = e.target.parentElement.querySelector(".list-items");
//     let inputItem = e.target.parentElement.querySelectorAll(".item-input");
//     let lastinputItem = inputItem[inputItem.length - 1];
//     // console.log(lastinputItem);
//     if (!lastinputItem || lastinputItem.textContent.trim() != "") {
//       let item = document.createElement("div");
//       item.className = "item";
//       item.setAttribute("draggable", true);
//       item.innerHTML = `<div class="item-input" contenteditable ></div>
//     <span class="item-control">
//     <ion-icon name="create-outline"></ion-icon>
//     <ion-icon name="trash-outline"></ion-icon>
//     </span>
//     `;
//       listItems.appendChild(item);
//       // focus before add

//       listItems.lastElementChild.querySelector(".item-input").focus();

//       // add attribute before add

//       listItems.lastElementChild
//         .querySelector(".item-input")
//         .addEventListener("blur", (e) => {
//           e.target.removeAttribute("contenteditable");
//           if (item.textContent.trim() != "") {
//             addTaskToArray(item.textContent.trim(), addItem.parentElement.id);
//             console.log(arrayOfTasks);
//           }
//         });
//       listItems.lastElementChild
//         .querySelector(".item-input")
//         .addEventListener("keypress", (e) => {
//           if (e.key === "Enter") {
//             e.target.removeAttribute("contenteditable");
//             if (item.textContent.trim() != "") {
//               addTaskToArray(item.textContent.trim(), addItem.parentElement.id);
//               console.log(arrayOfTasks);
//             }
//           }
//         });

//       // edit iteme before add

//       listItems.lastElementChild
//         .querySelector(".item-control :first-child")
//         .addEventListener("click", (e) => {
//           e.target.parentElement.previousElementSibling.setAttribute(
//             "contenteditable",
//             ""
//           );
//           e.target.parentElement.previousElementSibling.focus();
//         });

//       // remove item before add

//       listItems.lastElementChild
//         .querySelector(".item-control :last-child")
//         .addEventListener("click", (e) => {
//           e.target.parentElement.parentElement.remove();
//           e.target.closest(".item").remove();
//         });
//     } else {
//       alert("add item");
//     }
//     dragItem();
//   });
// });

// /// DragItems //////////////////////////////////////////
// function dragItem() {
//   let items = document.querySelectorAll(".item");
//   items.forEach((item) => {
//     item.addEventListener("dragstart", function () {
//       drag = item;
//     });
//     item.addEventListener("dragend", function () {
//       drag = null;
//     });

//     columns.forEach((column) => {
//       column.addEventListener("dragover", function (e) {
//         e.preventDefault();
//       });

//       column.addEventListener("dragleave", function () {});

//       column.addEventListener("drop", function () {
//         this.querySelector(".list-items").appendChild(drag);
//       });
//     });
//   });
// }

// /////////////////////////////////////////////////////////
// function addTaskToArray(taskText, id) {
//   // Task Data
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     ParentId: id,
//   };
//   arrayOfTasks.push(task);

//   // Add Tasks To Page
//   // addElementsToPageFrom(arrayOfTasks) {}
// }
// console.log(arrayOfTasks);

// let columns = document.querySelectorAll(".column");

// let arryOfTasks = [];

// const addBtns = document.querySelectorAll(".add-item");

// addBtns.forEach((addBtn) => {
//   addBtn.addEventListener("click", (e) => {
//     const column = e.target.parentElement;
//     const itemInput = column.querySelectorAll(".item-input");
//     const lastItemInput = itemInput[itemInput.length - 1];
//     if (!lastItemInput || lastItemInput.textContent.trim() != "") {
//       addItem(column.id);
//     } else {
//     }
//   });
// });

// function addItem(columnId) {
//   let column = document.getElementById(columnId);
//   const listItems = column.querySelector(".list-items");
//   let item = document.createElement("div");
//   item.className = "item";
//   item.setAttribute("draggable", true);
//   item.innerHTML = `<div class="item-input" contenteditable ></div>
//   <span class="item-control">
//   <ion-icon name="create-outline"></ion-icon>
//   <ion-icon name="trash-outline"></ion-icon>
//   </span>
//   `;
//   listItems.appendChild(item);

//   const lastItemInList =
//     listItems.lastElementChild.querySelector(".item-input");
//   // focus
//   lastItemInList.focus();
//   save(item, listItems);
// }

// function save(item, listItems) {
//   listItems.lastElementChild
//     .querySelector(".item-input")
//     .addEventListener("keypress", (e) => {
//       if (e.key === "Enter") {
//         e.target.removeAttribute("contenteditable");
//         if (item.textContent.trim() != "") {
//           addTaskToArray(listItems, item.textContent.trim());
//           listItems.nextElementSibling.click();
//         } else {
//           item.remove();
//         }
//       }
//     });
//   // listItems.lastElementChild
//   //   .querySelector(".item-input")
//   //   .addEventListener("blur", (e) => {
//   //     e.target.removeAttribute("contenteditable");
//   //     if (item.textContent.trim() != "") {
//   //       addTaskToArray(listItems, item.textContent.trim());
//   //     }
//   //   });
// }

// function addTaskToArray(listItems, itemInput) {
//   const task = {
//     columnId: listItems.parentElement.id,
//     content: {
//       id: Date.now(),
//       title: itemInput,
//     },
//   };
//   arryOfTasks.push(task);
//   addElementsToPageFrom(listItems, arryOfTasks);
// }

// function addElementsToPageFrom(listItems, arrayOfTasks) {
//   listItems.innerHTML = "";

//   arrayOfTasks.forEach((task) => {
//     let item = document.createElement("div");
//     item.className = "item";
//     item.setAttribute("id", task.content.id);
//     item.setAttribute("draggable", true);
//     item.innerHTML = `<div class="item-input" contenteditable >${task.content.title}</div>
//     <span class="item-control">
//     <ion-icon name="create-outline"></ion-icon>
//     <ion-icon name="trash-outline"></ion-icon>
//     </span>
//     `;
//     listItems.appendChild(item);
//   });
// }

const columns = document.querySelectorAll(".column");
const addBtns = document.querySelectorAll(".add-item");

let arrayOne = [];
let arrayTwo = [];
let arrayThree = [];

addBtns[0].addEventListener("click", addItem.bind(null, columns[0], arrayTwo));
addBtns[1].addEventListener("click", addItem.bind(null, columns[1], arrayTwo));
addBtns[2].addEventListener(
  "click",
  addItem.bind(null, columns[2], arrayThree)
);

class Task {
  constructor(column, array) {
    (this.array = array), (this.column = column);
  }

  clickHand() {
    const itemInput = this.column.querySelectorAll(".item-input");
    const lastItemInput = itemInput[itemInput.length - 1];
    if (!lastItemInput || lastItemInput.textContent.trim() != "") {
      this.addItem();
    } else {
    }
  }

  addItem() {
    const listItems = this.column.querySelector(".list-items");
    let item = document.createElement("div");
    item.className = "item";
    item.setAttribute("draggable", true);
    item.innerHTML = `<div class="item-input" contenteditable ></div>
  <span class="item-control">
  <ion-icon name="create-outline"></ion-icon>
  <ion-icon name="trash-outline"></ion-icon>
  </span>
  `;
    listItems.appendChild(item);

    const lastItemInList =
      listItems.lastElementChild.querySelector(".item-input");
    // focus
    lastItemInList.focus();
    this.save(item, listItems);
  }
  save(item, listItems) {
    listItems.lastElementChild
      .querySelector(".item-input")
      .addEventListener("blur", (e) => {
        e.target.removeAttribute("contenteditable");
        if (item.textContent.trim() != "") {
          this.addTaskToArray(listItems, item.textContent.trim());
          item.remove();

          // listItems.nextElementSibling.click();
          return;
        } else {
          item.remove();
          return;
        }
      });
    listItems.lastElementChild
      .querySelector(".item-input")
      .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          e.target.removeAttribute("contenteditable");
          if (item.textContent.trim() != "") {
            this.addTaskToArray(listItems, item.textContent.trim());
            item.remove();
            listItems.nextElementSibling.click();
            return;
          } else {
            item.remove();
            return;
          }
        }
      });
  }

  addTaskToArray(listItems, itemInput) {
    const task = {
      columnId: listItems.parentElement.id,
      content: {
        id: Date.now(),
        title: itemInput,
      },
    };
    this.array.push(task);
    console.log(this.array);
    // this.addElementsToPageFrom(listItems);
    // console.log(array);
  }

  addElementsToPageFrom(listItems) {
    listItems.innerHTML = "";

    this.array.forEach((task) => {
      let item = document.createElement("div");
      item.className = "item";
      item.setAttribute("id", task.content.id);
      item.setAttribute("draggable", true);
      item.innerHTML = `<div class="item-input" contenteditable >${task.content.title}</div>
    <span class="item-control">
    <ion-icon name="create-outline"></ion-icon>
    <ion-icon name="trash-outline"></ion-icon>
    </span>
    `;
      // console.log(this.array, this.column);
      listItems.appendChild(item);
    });
  }
}

function addItem(column, array) {
  const columnOne = new Task(column, array);
  columnOne.clickHand();
}
