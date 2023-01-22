"use strict";
// Napisz program który sprawdzi czy dany rok jest przestępny;
// (Każdy rok, który można podzielić przez 4, jest rokiem przestępnym, na przykład 2016, 2020, 2024, 2028.
// Uwaga: powyższa zasada nie dotyczy stuleci.
// Stulecia, takie jak 1900 i 2000, mają dzień przestępny tylko wtedy, gdy można je podzielić przez 400.)

let year = prompt("Enter the year");
if (year % 4 === 0) alert("Leap year");
else alert("Non-leap year");
