let availableKeywords = ["Rijndael Chiper", "HTML", "CSS", "Caesar Chiper"];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.addEventListener("input", function () {
  let input = inputBox.value.trim().toLowerCase();
  let result = [];

  if (input.length > 0) {
    result = availableKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input);
    });
  }

  display(result);

  if (!result.length) {
    resultsBox.style.display = "none";
  } else {
    resultsBox.style.display = "block";
    adjustResultBoxWidth(); // Adjust result box width dynamically
  }
});

function adjustResultBoxWidth() {
  let inputWidth = inputBox.offsetWidth;
  resultsBox.style.width = `${inputWidth}px`;
}

function display(result) {
  const content = result
    .map((item) => {
      return `<li>${item}</li>`;
    })
    .join("");

  resultsBox.innerHTML = `<ul>${content}</ul>`;
}

resultsBox.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    inputBox.value = e.target.textContent;
    resultsBox.style.display = "none";
  }
});
