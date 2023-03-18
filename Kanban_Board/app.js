const columns = document.querySelectorAll(".column");
// const listItems = document.querySelectorAll(".list-items")
const addItem = document.querySelectorAll(".add-item");
let drag = null;
// let mainArray = [];

// columns.forEach((column) => {
//   let addBtn = column.querySelector(".add-item");
//   addBtn.addEventListener("click", (e) => {
//     let input = e.target.parentElement.querySelector(".item-input");
//     console.log(input);
//     let listItems = e.target.parentElement.querySelector(".list-items");
//     let item = document.createElement("div");
//     item.className = "item";
//     item.setAttribute("draggable", true);
//     item.innerHTML = `<input class="item-input" />
//       <span class="item-control">
//       <ion-icon name="create-outline"></ion-icon>
//       <ion-icon name="trash-outline"></ion-icon>
//       </span>
//       `;
//     listItems.prepend(item);
//   });
//   dragItem();
// });

addItem.forEach((addItem) => {
  addItem.addEventListener("click", (e) => {
    let listItems = e.target.parentElement.querySelector(".list-items");
    let inputItem = e.target.parentElement.querySelectorAll(".item-input");
    let lastinputItem = inputItem[inputItem.length - 1];
    console.log(lastinputItem);
    if (!lastinputItem || lastinputItem.innerHTML != "") {
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

      // focus before add

      listItems.lastElementChild.querySelector(".item-input").focus();

      // add attribute before add

      listItems.lastElementChild
        .querySelector(".item-input")
        .addEventListener("blur", (e) => {
          e.target.removeAttribute("contenteditable");
        });

      // edit iteme before add

      listItems.lastElementChild
        .querySelector(".item-control :first-child")
        .addEventListener("click", (e) => {
          e.target.parentElement.previousElementSibling.setAttribute(
            "contenteditable",
            ""
          );
          e.target.parentElement.previousElementSibling.focus();
        });

      // remove item before add

      listItems.lastElementChild
        .querySelector(".item-control :last-child")
        .addEventListener("click", (e) => {
          e.target.parentElement.parentElement.remove();
          e.target.closest(".item").remove();
        });
    } else {
      alert("add item");
    }
    dragItem();
  });
});

/// DragItems //////////////////////////////////////////
function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
    });
    item.addEventListener("dragend", function () {
      drag = null;
    });

    columns.forEach((column) => {
      column.addEventListener("dragover", function (e) {
        e.preventDefault();
      });

      column.addEventListener("dragleave", function () {});

      column.addEventListener("drop", function () {
        this.querySelector(".list-items").appendChild(drag);
      });
    });
  });
}
