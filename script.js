var messageEnter = document.getElementById("enter_text");
var messageOutput = document.getElementById("#content-return");
var messageError = document.getElementById("return_img");


document.getElementById("cript").addEventListener("click", function (e) {
    e.preventDefault()
    var message = messageEnter.value;
    var messageCript = message.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    messageError.style.display = "none";
    document.getElementById("return").innerHTML = '<div class="content-return-text"><textarea readonly id="text">' + messageCript + '</textarea><button id="copy" class="btn btn-simple" onclick="copy()">Copiar</button></div>';
    console.log(messageCript);
});

document.getElementById('descript').addEventListener('click', function (e) {
    e.preventDefault()
    var message = messageEnter.value;
    var messageDescript = message.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    messageError.style.display = 'none';
    document.getElementById('return').innerHTML = '<div class="content-return-text"><textarea readonly id="text">' + messageDescript + '</textarea><button id="copy" class="btn btn-simple" onclick="copy()">Copiar</button></div>';

    console.log(messageDescript);
});

function copy (){
    var textCopy = document.getElementById('text')
    textCopy.select();
    document.execCommand('copy');
    alert("Texto copiado!")
};


