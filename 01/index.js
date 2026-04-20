const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]


const crescente = numeros.sort((a,b)=>{
   return a-b
});

console.log(crescente);

const decrecente= numeros.sort((a,b)=>{
    return b-a ;
})

console.log(decrecente);

const crescenteUnicode = numeros.sort()

console.log(crescenteUnicode);


console.log('--------------------------------------');


const frutasCrescente = frutas.sort((a,b)=>{
    return a.localeCompare(b)

});


const frutasTamanho = frutas.sort((a,b)=>{
      return a.length - b.length

});



console.log(frutasCrescente);
console.log(frutasTamanho);
