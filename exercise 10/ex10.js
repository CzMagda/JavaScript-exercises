// Napisz program, który znajdzie największą liczbę w tablicy.

const arr = [1, 2, 3, 4, 5];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);
