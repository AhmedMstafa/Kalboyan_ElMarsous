const button = document.querySelector("button");

// button.onclick = function () {

// }

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("This was clicked!");
};

// button.onclick = buttonClickHandler;

// button.onclick = anotherButtonClickHandler;

// button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

// button.removeEventListener("click");

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

button.addEventListener("click", (event) => {
  // event.stopPropagation();
  // event.stopImmediatePropagation();
  console.log("clicked button");
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener("mouseenter", (event) => {
  console.log("clicked div");
  console.log(event);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

list.addEventListener("click", (event) => {
  if (event.target !== event.currentTarget) {
    // console.log(event.target);
    // console.log(event.currentTarget);
    // event.target.classList.toggle("highlight");
    event.target.closest("li").classList.toggle("highlight");
    // button.click();
    // form.submit();
  }
});
