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

let arryOfTasks = [];

const addBtns = document.querySelectorAll(".add-item");

addBtns.forEach((addBtn) => {
  addBtn.addEventListener("click", (e) => {
    const column = e.target.parentElement;
    const itemInput = column.querySelectorAll(".item-input");
    const lastItemInput = itemInput[itemInput.length - 1];
    if (!lastItemInput || lastItemInput.textContent.trim() != "") {
      addItem(e, column, lastItemInput);
    } else {
    }
  });
});

function addItem(e, column, itemInput) {
  const listItems = column.querySelector(".list-items");
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
  save(item, listItems);
}

function save(item, listItems) {
  listItems.lastElementChild
    .querySelector(".item-input")
    .addEventListener("blur", (e) => {
      e.target.removeAttribute("contenteditable");
      if (item.textContent.trim() != "") {
        addTaskToArray(listItems.parentElement, item.textContent.trim());
      }
    });
  listItems.lastElementChild
    .querySelector(".item-input")
    .addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        e.target.removeAttribute("contenteditable");
        if (item.textContent.trim() != "") {
          addTaskToArray(listItems.parentElement, item.textContent.trim());
        }
      }
    });
}

function addTaskToArray(column, itemInput) {
  const task = {
    columnId: column.id,
    contet: {
      id: Date.now(),
      tilte: itemInput,
    },
  };
  arryOfTasks.push(task);
  console.log(arryOfTasks);
}
