"Use strict";
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let date = prompt("Give me a value");
  alert(`Your value is ${date}.`);
});
