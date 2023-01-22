// Napisz program, który będzie pobierać od użytkownika dane i zapisać je do tablicy dopóki użytkownik nie wpisze stop.
//  Po zakończeniu pobierania liczb program wypisze dane z tablicy w konsoli.

const tab1 = [];

for (let i = 0; i === tab1.length; i++) {
  let box = prompt("Enter the data");
  if (box.toLowerCase() === "stop") {
    alert("Stopped");
  } else {
    tab1.push(box);
  }
}

console.log(tab1);
