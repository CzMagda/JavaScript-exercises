// Napisz funkcję. która zmienia wartości dwóch liczb podanych jako parametry i wyświetla ich "przed" i "po" na ekranie.

function funkcja(a, b) {
  console.log(a, b);
  const c = a;
  a = b;
  b = c;
  console.log(a, b);
}
funkcja(1, 5);
