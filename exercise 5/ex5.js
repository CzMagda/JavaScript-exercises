"use strict";
// Napisz program, który oblicza pole trójkąta o podstawie i wysokości podanej przez użytkownika.
// Wynik wyświetl w znaczniku h3 w formacie „P = 1/2 * a * h", gdzie P, a i h będą wartościami obliczonymi lub podanymi przez użytkownika.
// Kolor tekstu ma być niebieski, a kolor tła tekstu szary.

const a = Number(prompt("Give me the base of the triangle."));
const h = Number(prompt("Give me the height of the triangle."));
let P = (1 / 2) * a * h;
let pole = document.getElementById("wynik");
pole.innerHTML = `${P} = 1/2 * ${a} * ${h}`;
pole.style.color = "blue";
pole.style.backgroundColor = "gray";
