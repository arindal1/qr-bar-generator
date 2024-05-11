let input = document.getElementById("input");
let btn = document.getElementById("btn-barcode-generator");
let barcode = document.getElementById("barcode");
let container = document.querySelector(".container");
let initialContainerWidth = container.offsetWidth;

btn.addEventListener("click", () => {
  let inputValue = input.value.trim();

  if (inputValue === "") {
    showError("Please enter text to generate a barcode.");
  } else {
    generateBarcode(inputValue);
  }
});

function generateBarcode(inputValue) {
  try {
    JsBarcode("#barcode", inputValue, {
      format: "code128",
      displayValue: true,
      fontSize: 24,
      lineColor: "#000",
    });

    // Get the width of the generated barcode
    let barcodeWidth = barcode.getBBox().width;

    // Adjust container width only if barcode width exceeds initial container width
    if (barcodeWidth > initialContainerWidth) {
      container.style.width = `${barcodeWidth}px`;
    } else {
      container.style.width = `${initialContainerWidth}px`;
    }
  } catch (error) {
    showError("An error occurred while generating the barcode. Please try again.");
  }
}

function showError(message) {
  let errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.textContent = message;
  barcode.innerHTML = "";
  barcode.appendChild(errorMessage);
}

window.onload = (event) => {
  input.value = "";
};
