const buttonTranslate = document.querySelector("#button-Translate");
const textArea = document.querySelector("#text-area");
const outputdiv = document.querySelector("#output");

const serverUrl = "https://api.funtranslations.com/translate/shakespeare.json";

function makeurl(text) {
  return serverUrl + "?text=" + text;
}

function errorHandler(error) {
  alert("Unexpected error detected, Please try again after sometime");
}

function clickhandler() {
  const textAreaValue = textArea.value;
  fetch(makeurl(textAreaValue))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputdiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

buttonTranslate.addEventListener("click", clickhandler);
