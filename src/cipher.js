
window.cipher = {
  encode:encode,
  decode:decode
};

function encode (offset,string){
  let arrayVazia = [];
  let tamanho = string.length;
  for(let i=0; i<tamanho; i++){
  let codigoDeletraAsc = string[i].charCodeAt(0);
  if(codigoDeletraAsc >=65 && codigoDeletraAsc <=90){
    let somando = (codigoDeletraAsc - 65 + offset) % 26 + 65;
    let soma = String.fromCharCode(somando);
    arrayVazia.push(soma);
}else if (codigoDeletraAsc >=97 && codigoDeletraAsc <=122){
let somando = (codigoDeletraAsc - 97 + offset) % 26 + 97;
let soma = String.fromCharCode(somando);
arrayVazia.push(soma);
  } else{
    arrayVazia.push(string[i]);
  }
    
}

  return arrayVazia.join(""); 
    }
 

function decode(offset,string){
  let arrayVazia = [];
  let tamanho = string.length;
  for(let i=0; i<tamanho; i++){
  let codigoDeletraAsc = string[i].charCodeAt(0);
  if(codigoDeletraAsc >=65 && codigoDeletraAsc <=90){
    let somando = (codigoDeletraAsc - 90 - offset) % 26 + 90;
    let soma = String.fromCharCode(somando);
    arrayVazia.push(soma);
}else if (codigoDeletraAsc >=97 && codigoDeletraAsc <=122){
let somando = (codigoDeletraAsc - 122 - offset) % 26 + 122;
let soma = String.fromCharCode(somando);
arrayVazia.push(soma);
  } else{
    arrayVazia.push(string[i]);
  }
    
}

  return arrayVazia.join(""); 
    }




