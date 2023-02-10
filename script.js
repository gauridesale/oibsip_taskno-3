let celsius = document.getElementById("cel");
let fahrenheit = document.getElementById("fahr");
let kelvin = document.getElementById("kel");

celsius.oninput = function () {
  let foutput = parseFloat(celsius.value) * 1.8 + 32;
  fahrenheit.value = parseFloat(foutput.toFixed(4));

  let koutput = parseFloat(celsius.value) + 273.15;
  kelvin.value = parseFloat(koutput.toFixed(4));
};

fahrenheit.oninput = function () {
  let coutput = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(coutput.toFixed(4));

  let koutput = ((parseFloat(fahrenheit.value) - 32) * 5) / 9 + 273.15;
  kelvin.value = parseFloat(koutput.toFixed(4));
};

kelvin.oninput = function () {
  let foutput = ((parseFloat(kelvin.value) - 273.15) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(foutput.toFixed(4));

  let coutput = parseFloat(kelvin.value) - 273.15;
  celsius.value = parseFloat(coutput.toFixed(4));
};

function reset_all(){
  document.getElementById("converter").reset();
}

