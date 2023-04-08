const outputContainer = document.getElementById("output-container");
const loadingContainer = document.querySelector(".loading-container");
const loadingIcon = document.querySelector(".loading-icon");

const data = {
  "srishtinene_": "The user seems be quite interested in FASHION. We should suggest our new trendy suits.",
  "gautammannan": "The user has been frequently using the tag TECHNOLOGY. We can suggest them our techfolios.",
  "samrudhiyeginwar": "The user seems be quite interested in FASHION. We should suggest our new trendy suits.",
  "shivinidixit_": "The user has been frequently using the tag TECHNOLOGY. We can suggest him our techfolios.",
  "poorvz_": "User seems quite keen on NATURE. Our Nature based beauty solutions could be a great sell.",
  "travuersa29": "The user seems be quite interested in FASHION. We should suggest our new trendy suits.",
  "rahulsingh0512": "The user seems be quite interested in FASHION. We should suggest our new trendy suits.",
  "shreyan_1629": "The user seems be quite interested in FASHION. We should suggest our new trendy suits.",
  "bhavyaguptaa_": "The user has been frequently using the tag TECHNOLOGY. We can suggest him our techfolios.",
  "_atharva": "The user has been frequently using the tag TECHNOLOGY. We can suggest him our techfolios."
};

const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');
const submitButton = document.querySelector('button[type="submit"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  outputContainer.style.display = "none";
  loadingContainer.style.display = "flex";
  loadingIcon.style.display = "inline-block";
  submitButton.style.display = "none";

  setTimeout(() => {
    const inputValue = input.value;
    if (inputValue in data) {
      outputContainer.innerHTML = `<p>${data[inputValue]}</p>`;
    } else {
      outputContainer.innerHTML = "<p>No matching data found!</p>";
    }
    loadingContainer.style.display = "none";
    outputContainer.style.display = "block";
    submitButton.style.display = "block";
  }, 2000);
});

