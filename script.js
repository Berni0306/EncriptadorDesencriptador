var textareaInput = document.getElementById("content");
var textareaOutput = document.getElementById("output");
var codeButton = document.getElementById("code");
var decodeButton = document.getElementById("decode");
var copyButton = document.getElementById("copy");
var muneco = document.getElementById("muneco");
var empty = document.getElementById("empty");
var muneco = document.getElementById("muneco");
var notext= document.getElementById("notext");
var output = document.getElementById("output");
var copy = document.getElementById("copy");
const rExpression = /^[a-z\s!]+$/

function code(message){
    var valid = messageValidation();
    if (valid){
        showResult();
        var result = "";
        for(var letterposition=0;letterposition<message.length;letterposition++){
            if(message[letterposition] == "a"){
                result += "ai";     
            }else if(message[letterposition] == "e"){
                result += "enter";
            }else if(message[letterposition] == "i"){
                result += "imes";
            }else if(message[letterposition] == "o"){
                result += "ober";
            }else if(message[letterposition] == "u"){
                result += "ufat";
            }else{
                result += message[letterposition];
            }
        }
        textareaOutput.value = result;
    }
}

function decode(message){
    var valid = messageValidation();
    if (valid){
        showResult();
        var check = true
        var result= message;
        while (check){
            if (result.includes("ai")) {
                result = result.replace("ai", "a");
            } else if (result.includes("enter")) {
                result = result.replace("enter", "e");
            } else if (result.includes("imes")) {
                result = result.replace("imes", "i");
            } else if (result.includes("ober")) {
                result = result.replace("ober", "o");
            } else if (result.includes("ufat")) {
                result = result.replace("ufat", "u");
            } else {
                check = false;            
            }
        }
        textareaOutput.value = result;
    }
}

function messageValidation(){
    if (textareaInput.value.trim() === ""){
        alert("Por favor coloca el texto a encriptar o desencriptar");
        return false;
    } else{
        if (rExpression.test(textareaInput.value)){
            return true;
        } else{
            alert("Solo letras minúsculas, sin acentos ni caracteres especiales");
            return false;
        }
    } 
}

function showResult(){
    muneco.style.display = "none";
    empty.style.display = "none";
    notext.style.display = "none";
    output.style.display = "block";
    copy.style.display = "block";
}

codeButton.onclick = function codeButton(){
    event.preventDefault();
    code(textareaInput.value);
};

decodeButton.onclick = function decodeButton(){
    event.preventDefault();
    decode(textareaInput.value);
};

copyButton.onclick = function copyButton(){
    event.preventDefault();
    navigator.clipboard.writeText(textareaOutput.value);
    alert("Mensaje copiado al portapapeles");
};