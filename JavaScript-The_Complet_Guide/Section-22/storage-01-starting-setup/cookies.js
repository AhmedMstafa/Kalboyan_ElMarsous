// console.log(document.cookie);

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = " u123";
  const user = { name: "Max", age: 30 };
  document.cookie = `uesr=${JSON.stringify(user)}; max-age=50 `;
  document.cookie = `uid=${userId}`;
});

retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  // console.log(document.cookie.split(";"));
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split("=")[0]);
});
