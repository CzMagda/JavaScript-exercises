// Napisz program, który wczyta do tablicy 5 wartości, a na koniec wypisze je w odwrotnej kolejności.

const tab1 = [];
for (let i = 0; i < 5; i++) {
  let liczba = prompt("Give me a number");
  tab1.push(liczba);
}
for (let i = tab1.length - 1; i >= 0; i--) {
  console.log(tab1[i]);
}
