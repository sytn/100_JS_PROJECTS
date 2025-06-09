const poundInput = document.getElementById("pound");
const convertedEl = document.getElementById("converted");

poundInput.addEventListener("input", () => {
  const pounds = parseFloat(poundInput.value);

  if (isNaN(pounds) || pounds <= 0) {
    convertedEl.innerText = "—";
    return;
  }

  const kg = (pounds / 2.20462).toFixed(2);
  convertedEl.innerText = kg;
});
