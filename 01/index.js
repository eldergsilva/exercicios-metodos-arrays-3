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
