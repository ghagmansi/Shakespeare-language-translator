var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var btnClear = document.querySelector("#btn-clear");
//var serverURL = "https://api.funtranslations.com/translate/minion.json";

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";


function getTranslationURL(inputData) {
  console.log("Inside gettranslation = " + inputData);
  return serverURL + "?text=" + inputData;
}

function errorHandler(error) {
  console.log("Error occured", error);
  alert("There's something wrong with the server. Please try after some time.");
}

function clickEventHandler() {
  fetch(getTranslationURL(txtInput.value))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    })
    .catch(errorHandler);
}

function clearEventHandler(){
    txtInput.value="";
    outputDiv.innerText="";
}

btnTranslate.addEventListener("click", clickEventHandler);
btnClear.addEventListener("click", clearEventHandler);
