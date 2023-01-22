// Napisz program, który zsumuje wartości z tablicy i wyświetli ich sume:

const tab1 = [3, 4, 5, 6];
let suma = 0;

for (let i = 0; i <= tab1.length - 1; i++) {
  suma += tab1[i];
}
console.log(`Suma to ${suma}`);
