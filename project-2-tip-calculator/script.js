const buttonEl = document.querySelector("#calculate");
const billInput = document.querySelector(".billAmount");
const perInput = document.querySelector(".perAmount")
const total = document.querySelector("#total");


function calcTotal() {
    const billValue = billInput.value;
    const perValue = perInput.value;
    const totalValue = billValue * (1 + perValue / 100);
    total.innerText = totalValue.toFixed(2);
}

buttonEl.addEventListener("click", calcTotal);