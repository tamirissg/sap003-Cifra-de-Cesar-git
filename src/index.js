
function encode (){
event.preventDefault()
let offset = parseInt(document.getElementById("offset").value);
let string = document.getElementById("string").value;
console.log(string)
let resultado = window.cipher.encode(offset,string);
console.log(resultado);
document.getElementById("resultado1").innerHTML = `<p> Suma mensagem Codificada é ${resultado} </p>`;
}




function Decode(){
    event.preventDefault()
    let offset = parseInt(document.getElementById("offset2").value);
    let string = document.getElementById("string2").value;
    let soma  = window.cipher.decode(offset,string);
    console.log(soma);
    document.getElementById("resultado2").innerHTML = `<p> Suma mensagem Codificada é ${soma} </p>`;
};
   

