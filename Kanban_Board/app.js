const columns = document.querySelectorAll(".column");
// const listItems = document.querySelectorAll(".list-items")
const addItem = document.querySelectorAll(".add-item");
let drag = null;
// let mainArray = [];

addItem.forEach((addItem) => {
  addItem.addEventListener("click", (e) => {
    let listItems = e.target.parentElement.querySelector(".list-items");
    let item = document.createElement("div");
    item.className = "item";
    item.setAttribute("draggable", true);
    item.innerHTML = `<div class="item-input" contenteditable > </div>
            <span class="item-control">
              <ion-icon name="create-outline"></ion-icon>
              <ion-icon name="trash-outline"></ion-icon>
            </span>
            `;
    listItems.appendChild(item);
    let dropZone = document.createElement("div");
    dropZone.className = "dropzone";
    listItems.appendChild(dropZone);

    // focus before add

    listItems.lastElementChild.previousSibling
      .querySelector(".item-input")
      .focus();

    // add attribute before add

    listItems.lastElementChild.previousSibling
      .querySelector(".item-input")
      .addEventListener("blur", (e) => {
        e.target.removeAttribute("contenteditable");
      });

    // edit iteme before add

    listItems.lastElementChild.previousSibling
      .querySelector(".item-control :first-child")
      .addEventListener("click", (e) => {
        e.target.parentElement.previousElementSibling.setAttribute(
          "contenteditable",
          ""
        );
        e.target.parentElement.previousElementSibling.focus();
      });

    // remove item before add

    listItems.lastElementChild.previousSibling
      .querySelector(".item-control :last-child")
      .addEventListener("click", (e) => {
        e.target.parentElement.parentElement.previousElementSibling.remove();
        e.target.closest(".item").remove();
      });

    dragItem();
  });
});

function dragItem() {
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    item.addEventListener("dragstart", function () {
      drag = item;
      // item.style.opacity = "0.5";
    });
    item.addEventListener("dragend", function () {
      drag = null;
      // item.style.opacity = "1";
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
