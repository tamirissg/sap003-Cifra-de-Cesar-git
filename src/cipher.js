
window.cipher = {
  encode:encode,
  decode:decode
}

function encode (offset,string){
  let arrayVazia = [];
  let tamanho = string.length;
  for(let i=0; i<tamanho; i++){
    let somando = ((string[i].charCodeAt(0) - 65 + offset) % 26) + 65;
    let soma = String.fromCharCode(somando);
    arrayVazia.push(soma);
  
  }
  return arrayVazia.join("");

}
  



function decode(offset,string){
  let arrayVazia = [];
  let tamanho = string.length;
  // let array = Array.from(string);
  for(let i=0; i<tamanho; i++){
    let somando = ((string[i].charCodeAt(0) + 65 - offset) % 26) - 65;
    let soma = String.fromCharCode(somando);
    arrayVazia.push(soma);
  
  }
  return arrayVazia.join("");

}


