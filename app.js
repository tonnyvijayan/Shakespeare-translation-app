var buttonTranslate=document.querySelector('#button-Translate');
var textArea=document.querySelector('#text-area');
var outputdiv=document.querySelector('#output');

var serverUrl="https://api.funtranslations.com/translate/shakespeare.json"

function makeurl(text){
    
    return serverUrl+"?text="+text
};
function errorHandler(error){
    console.log("Error occured", error)
    alert("Unexpected error detected, Please try again after sometime")
};


function clickhandler(){
    var textAreaValue=textArea.value;
    fetch(makeurl(textAreaValue))
         .then(response=>response.json())
         .then(json=>{
             var translatedText=json.contents.translated;
             outputdiv.innerText=translatedText;}) 
         .catch(errorHandler)    
}
    
   


buttonTranslate.addEventListener('click',clickhandler)