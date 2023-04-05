const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

let db;

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.onsuccess = function (event) {
  db = event.target.result;
};

dbRequest.onupgradeneeded = function (event) {
  db = event.target.result;

  const objeStore = db.createObjectStore("products", { keyPath: "id" });

  objeStore.transaction.oncomplete = function (event) {
    const productsStore = db
      .transaction("products", "readwrite")
      .objeStore("products");
    productsStore.add({
      id: "p1",
      title: "A First Product",
      price: 12.99,
      tags: ["Expensive", "Luxury"],
    });
  };
};

dbRequest.onerror = function (event) {
  console.log("error");
};

storeBtn.addEventListener("click", () => {
  if (db) {
    return;
  }
  const productsStore = db
    .transaction("products", "readwrite")
    .objeStore("products");
  productsStore.add({
    id: "p2",
    title: "A Second Product",
    price: 122.99,
    tags: ["Expensive", "Luxury"],
  });
});

retrBtn.addEventListener("click", () => {});
