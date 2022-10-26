const numToConvert = document.getElementById("num-to-convert");
const numConvert = document.getElementById("num-convert");
const deviseToConvert = document.getElementById("devise-to-convert");
const deviseConvert = document.getElementById("devise-convert");
const btnConvert = document.getElementById("btn-convert");

fetch("https://api.exchangerate.host/latest")
  .then((response) => response.json())
  .then((data) => {
    for (let values in data.rates) {
      let optionsDeviseToConvert = document.createElement("option");
      let optionsDeviseConvert = document.createElement("option");
      optionsDeviseToConvert.innerHTML = `<option value="${values}">${values}</option>`;
      optionsDeviseConvert.innerHTML = `<option value="${values}">${values}</option>`;
      deviseToConvert.appendChild(optionsDeviseToConvert);
      deviseConvert.appendChild(optionsDeviseConvert);
    }
  });

const convertion = (num, deviseToConvert, deviseConvert) => {
  fetch(
    `https://api.exchangerate.host/convert?amount=${num}&from=${deviseToConvert}&to=${deviseConvert}`
  )
    .then((response) => response.json())
    .then((data) => (numConvert.value = data.result));
};

btnConvert.addEventListener("click", () => {
  convertion(numToConvert.value, deviseToConvert.value, deviseConvert.value);
});
