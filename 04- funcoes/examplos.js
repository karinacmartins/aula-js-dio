function sayMyName(name) {
    console.log('Your name is ' + name)
}

sayMyName('Karina');
sayMyName('João');

function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome
}

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Karina') +', sou maior de idade.');
    } else {
        console.log('Menor de idade.')
    }    
}

verificarIdade(39);


verificarIdade(39);

function incrementarJuros (valor, percentualJuros) { 
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));


