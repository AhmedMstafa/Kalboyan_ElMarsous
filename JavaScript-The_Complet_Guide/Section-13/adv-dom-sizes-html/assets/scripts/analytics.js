const intervelId = setInterval(() => {
  console.log("Sending Analytics....");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervelId);
});
