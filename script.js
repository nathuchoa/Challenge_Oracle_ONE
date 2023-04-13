var messageEnter = document.getElementById("enter_text");
var messageOutput = document.getElementById("#content-return");
var messageError = document.getElementById("return_img");


var message = messageEnter.value;

document.getElementById("cript").addEventListener("click", function(e){
    e.preventDefault()

    var message = messageEnter.value;

    var messageCript = message.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");

    messageError.style.display = "none";

    document.getElementById("return").innerHTML = '<div class="content-return-text"><p class="text">' + messageCript + '</p><button id="copiar" class="btn btn-simple" onclick="copiar()">Copiar</button></div>';

    console.log(messageCript);
});


console.log("Tô funcionado")

