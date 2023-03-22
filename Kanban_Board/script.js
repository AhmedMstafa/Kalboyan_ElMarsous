// const addBtn = document.querySelectorAll(".add-item");
// const columns = document.querySelectorAll(".column");

// arrayOne = [];
// arrayTow = [];
// arrayThree = [];

// if (localStorage.getItem("tasksOne")) {
//   arrayOne = JSON.parse(localStorage.getItem("tasksOne"));
// }
// if (localStorage.getItem("tasksTwo")) {
//   arrayTow = JSON.parse(localStorage.getItem("tasksTwo"));
// }
// if (localStorage.getItem("tasksThree")) {
//   arrayThree = JSON.parse(localStorage.getItem("tasksThree"));
// }

// addBtn[0].addEventListener("click", addItems.bind(null, columns[0], arrayOne));
// addBtn[1].addEventListener("click", addItems.bind(null, columns[1], arrayTow));
// addBtn[2].addEventListener(
//   "click",
//   addItems.bind(null, columns[2], arrayThree)
// );

// function addItems(column, array) {
//   let listItems = column.querySelector(".list-items");
//   let inputItem = column.querySelectorAll(".item-input");
//   let lastinputItem = inputItem[inputItem.length - 1];
//   if (!lastinputItem || lastinputItem.textContent.trim() != "") {
//     addItems();
//   }
//   function addItems() {
//     let item = document.createElement("div");
//     item.className = "item";
//     item.setAttribute("draggable", true);
//     item.innerHTML = `<div class="item-input" contenteditable ></div>
//     <span class="item-control">
//     <ion-icon name="create-outline"></ion-icon>
//     <ion-icon name="trash-outline"></ion-icon>
//     </span>
//     `;
//     listItems.appendChild(item);

//     save(item);
//   }
//   function save(item) {
//     listItems.lastElementChild
//       .querySelector(".item-input")
//       .addEventListener("blur", (e) => {
//         if (item.textContent.trim() != "") {
//           addTaskToArray(item.textContent.trim());
//           item.remove();
//           return;
//         }
//       });
//     listItems.lastElementChild
//       .querySelector(".item-input")
//       .addEventListener("keypress", (e) => {
//         if (e.key === "Enter") {
//           if (item.textContent.trim() != "") {
//             addTaskToArray(item.textContent.trim());
//             item.remove();
//             return;
//           }
//         }
//       });
//   }
//   function addTaskToArray(text) {
//     let task = {
//       id: column.id,
//       content: {
//         id: Date.now(),
//         title: text,
//       },
//     };
//     array.push(task);
//     // console.log(array);
//     addTasksToPageFrom(array);
//     addDataToLocalStorgeFrom(array);
//   }

//   function addTasksToPageFrom(array) {
//     listItems.innerHTML = "";
//     array.forEach((task) => {
//       let item = document.createElement("div");
//       item.className = "item";
//       item.setAttribute("data-id", task.content.id);
//       item.setAttribute("draggable", true);
//       item.innerHTML = `<div class="item-input" >${task.content.title}</div>
//       <span class="item-control">
//       <ion-icon name="create-outline"></ion-icon>
//       <ion-icon name="trash-outline"></ion-icon>
//       </span>
//       `;
//       // deleteListener();
//       // editeListener();
//       listItems.appendChild(item);
//     });
//   }
//   function addDataToLocalStorgeFrom(array) {
//     if (array === arrayOne) {
//       console.log(array);
//       localStorage.setItem("tasksOne", JSON.stringify(array));
//     } else if (array === arrayTow) {
//       localStorage.setItem("tasksTwo", JSON.stringify(array));
//     } else if (array === arrayThree) {
//       localStorage.setItem("tasksThree", JSON.stringify(array));
//     }
//   }
//   function getDataFromLoacalStorge() {
//     let dataOne = localStorage.getItem("tasksOne");
//     let dataTwo = localStorage.getItem("tasksTwo");
//     let dataThree = localStorage.getItem("tasksThree");
//     if (dataOne) {
//       let tasksOne = JSON.parse(dataOne);
//       addTasksToPageFrom(tasksOne);
//     }

//     if (dataTwo) {
//       let tasksTwo = JSON.parse(dataTwo);
//       addTasksToPageFrom(tasksTwo);
//     }

//     if (dataThree) {
//       let tasksThree = JSON.parse(dataThree);
//       addDataToLocalStorgeFrom(tasksThree);
//     }
//   }
// }

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
