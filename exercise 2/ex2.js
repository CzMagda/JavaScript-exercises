"use strict";
const x = Number(prompt("Give me a number x"));
const y = Number(prompt("Give me a number y"));
let z = x + y;
const suma = document.getElementById("wynik");
suma.innerHTML = x + "+" + y + "=" + z;
suma.style.color = "green";
