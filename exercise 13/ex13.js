"Use strict";
const button = document.getElementById("button");

button.addEventListener("click", () => {
  let date = prompt("Give me a number");
  let date2 = prompt("Give me a second number");
  date = Number(date);
  date2 = Number(date2);

  if (date && date2) {
    if (date < date2) document.getElementById("number").innerHTML = date2;
    else if (date2 < date) document.getElementById("number").innerHTML = date;
    else {
      date === date2;
      document.getElementById("number").innerHTML = "Equal values.";
    }
  }
});
