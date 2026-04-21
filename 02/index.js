const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maior = cidades.reduce((acc, atual) => {
    return atual.length > acc.length ? atual : acc;
});

console.log(maior);