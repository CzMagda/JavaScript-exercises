// Napisz program, który dostanie informację o
// temperaturze w st C i wypisze na ekran wiadomość zależnie od podanej wartości;

const temperaturaC = Number(prompt("Give me a temperature in C"));
if (!isNaN(temperaturaC)) {
  if (temperaturaC < 0) alert("Freezing weather");
  else if (temperaturaC >= 0 && temperaturaC <= 10) alert("Very cold weather.");
  else if (temperaturaC > 10 && temperaturaC <= 20) alert("Cold weather.");
  else if (temperaturaC > 20 && temperaturaC <= 30) alert("Normal in temp.");
  else if (temperaturaC > 30 && temperaturaC < 40) alert("It's hot.");
  else if (temperaturaC >= 40) alert("It's very hot.");
} else alert("Please give number.");
