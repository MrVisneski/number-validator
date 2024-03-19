const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const phoneRegex = new RegExp(/^(1)?[\s]*((\d{3})|(\(\d{3}\)))[\s-]*\d{3}[\s-]*\d{4}$/gm);

checkButton.addEventListener("click", () => {
  console.log(userInput.value);
  if (userInput.value == "") {
    alert("Please provide a phone number");
    return;
  }
  if (resultsDiv.style.display === "none") {
    resultsDiv.style.display = "block";
  }
  if (phoneRegex.test(userInput.value)) {
    resultsDiv.innerHTML += `<div class="result">Valid US number: ${userInput.value}</div>`;
  } else {
    resultsDiv.innerHTML += `<div class="result">Invalid US number: ${userInput.value}</div>`;
  }

  console.log(phoneRegex.test(userInput.value));

  //resultsDiv.innerHTML += `<div class="result">Input: ${userInput.value}</div>`;
});

clearButton.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
  resultsDiv.style.display = "none";
});
