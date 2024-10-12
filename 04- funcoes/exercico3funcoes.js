/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    -1 À vista Débito, recebe 10% de desconto;
    -2 À vista no Dinheiro ou PIX, recebe 15% de desconto;
    -3 Em duas vezes, preço normal de etiqueta sem juros;
    -4 Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor,desconto) {
    return (valor - (valor * (desconto / 100)));
}

function aplicarJuros(valor,desconto) {
    return (valor + (valor * (desconto / 100)));
}

const precoEtiqueta = 100;
const formaDePagamento = 4;


if (formaDePagamento === 1) {
    console.log('O valor final com pagamento em débito é: R$ ' + aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
    console.log('O valor final com pagamento no Dinheiro ou PIX é: R$ ' + aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
    console.log('O valor final com pagamento em duas vezes é: R$ ' + (precoEtiqueta));
} else {
    console.log('O valor final acima de duas vezes é: R$ ' + aplicarJuros(precoEtiqueta, 10));
}


