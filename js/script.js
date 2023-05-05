// var nome = "Luizinho";

// if(nome != ""){
//     let nome = "Nicolly";
// }

// console.log(nome);
//Quando declaramos uma variável com var
// o Javascript aplica um processo nestas que chamamos de HOISTING.
//O HOISTING ou elevação, coloca todas as variáveis do tipo var no topo do programa.
//Isso faz com que se existirem variáveis com mesmo nome, elas se sobrepõem.
// let nr1 = 10;
// let nr2 = 5;
// //IF TERNÁRIO - DESCOBRINDO SE O NÚMERO É PAR OU IMPAR
// let resultado = !(nr1 % nr2) ? "PAR" : "IMPAR";
// console.log(resultado);

//Recuperar um elemento do HTML com a função getElementById(parâmetro)
// const mn = document.getElementById("menu");
// console.log(mn.textContent);

// //Recuperando uma collection de elementos...
// const aElements = document.getElementsByTagName("a");
// const aElementsArray = [...aElements];

// aElementsArray.forEach((a)=>{
//     console.log(a);
// });

// //Exercícios
// //1 - Recupere uma coleção de imagens da página e imprima o
// // atributo src...
// const imgElements = [...document.getElementsByTagName("img")];
// // const imgElementsArray = [...imgElements];
// // console.log(imgElements);

// //IMPRIMINDO O ATRIBUTO SRC do elemento com o forEach
// imgElements.forEach((img)=>{
//     console.log(`Path das imagens : ${img.src}`);
// });

// const botao = document.querySelector("div > button");

// botao.addEventListener("click", ()=>{
//     alert("TCHAU!!!");
// });



// //Declarando um array em Javascript
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// // let nr3 = [nr1,nr2];
// console.log(nr1);
// console.log(nr2);

// //OPERADOR SPREAD ...
// let nr3 = [...nr1,...nr2];
// console.log("NOVO ARRAY " + nr3);

// nr3.forEach( (numero)=>{
//     console.log("ITEM DO ARRAY : " + numero);
// } );

// let frutas = ["laranja","banana","acerola","abacate","caqui","uva"];
// console.log(frutas);
// //Inserir itens ao final do array com o método push(iten);
// frutas.push("kiwi");
// console.log(frutas);
// //Inserir itens no início do array com o unshift();
// frutas.unshift("melancia");
// console.log(frutas);
// //Remover itens do final do array com o método pop();
// frutas.pop();
// console.log(frutas);
// //Remover itens do inicio do array com o método shift();
// frutas.shift();
// console.log(frutas);

// //Realizando a busca de um item no array usando o método indexOf(iten)
// //Quando usamos o indexOf(iten) ele retorna o indice do item procurado.
// // let indice = frutas.indexOf("acerola");
// // console.log(frutas[indice]);

// //Utilizando o método splice(indice do item, qtd de vezes que ele será removido), para remover um iten do array em conjunto com o indexOf(iten).
// let indice = frutas.indexOf("abacate");
// console.log("FRUTA QUE ESTAVA NO INDICE ANTES DA REMOÇÃO : " + frutas[indice]);
// frutas.splice(indice,1);
// console.log("FRUTA QUE FICOU NO INDICE DEPOIS DA REMOÇÃO : " + frutas[indice]);
// console.table(frutas);

//Estrutura de repetição para iteração de collections
let frutas = ["laranja","banana","acerola","abacate","caqui","uva"];
const aElements  = document.querySelectorAll("a");
//Loop for
// for(let x = 0; x < aElements.length ; x++){
//     console.log("Valor de x = " + aElements[x].textContent);
// }
// for (const fruta of frutas) {
//     console.log("Frutas " + fruta);
// }

// for (const indice in frutas) {
//     console.log("Fruta " + frutas[indice]);
// }

//MAP
// frutas.map( (fruta,key)=>{
//     console.log(`Fruta nr:${key+1} ${fruta}`);
// });


const inputUser = document.querySelector("#idUser");

inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style","outline-color:#ff0000;");
});