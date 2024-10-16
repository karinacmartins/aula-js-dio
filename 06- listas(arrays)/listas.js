//1) Crie um programa que dado um número imprima a sua tabuada.

const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(i * numero);    
}


//2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [1,5,9,15,18,22,27,30];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    
    if (numero % 2 === 0) {
        console.log(numero);
    }    
}

//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ["Valeria", "Carlos", "Vinicius", "Amanda", "Vanessa", "Bruno"];

const nomesComV = nomes.filter(nome => nome.startsWith("V"));

console.log("Nomes que começam com a letra 'V':");
nomesComV.forEach(nome => console.log(nome));


//4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numerosPares = [];

for (let i = 10; i <= 50; i++) {
  if (i % 2 === 0) {
    numerosPares.push(i);
  }
}

console.log("Números pares de 10 a 50:");
console.log(numerosPares);



//5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
//   Ex de lista = [2, 7, 3, 8, 10, 4]

const medias = [2, 7, 3, 8, 10, 4];

const mediasRecuperacao = medias.filter(media => media < 5);

console.log("Médias de recuperação (menores que 5):");
console.log(mediasRecuperacao);


//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const notas = [2, 7, 3, 8, 10, 4];

const maiorNota = Math.max(...notas);

console.log("A maior nota é:");
console.log(maiorNota);
