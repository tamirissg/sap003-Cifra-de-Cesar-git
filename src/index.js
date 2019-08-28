


function encode (){
event.preventDefault()
let offset = parseInt(document.getElementById("offset").value);
let string = document.getElementById("string").value;
console.log(string)
let resultado = window.cipher.encode(offset,string);
document.getElementById("resultado1").innerHTML = `<p> Sua mensagem Codificada é ${resultado} </p>`;
}


function decode(){
    event.preventDefault()
    let offset = parseInt(document.getElementById("offset2").value);
    let string = document.getElementById("string2").value;
    let resultado  = window.cipher.decode(offset,string);
   document.getElementById("resultado2").innerHTML = `<p> Sua mensagem Codificada é ${resultado} </p>`;
};
   

document.getElementById("myBtn").addEventListener("click", encode)
document.getElementById("myBtn2").addEventListener("click", decode)
document.getElementById("myBtn3").addEventListener("click", "")
document.getElementById("myBtn4").addEventListener("click", "")




