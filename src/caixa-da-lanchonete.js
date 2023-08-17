
    const cardapio = {
        cafe: 3,
        chantily: 1.5,
        suco: 6.2,
        sanduiche: 6.5,
        queijo: 2,
        salgado: 7.25,
        combo1: 9.5,
        combo2: 7.5
    };
    class CaixaDaLanchonete {
    calcularValorDaCompra(formaDePagamento, itens) {
        const arrayItens = [];
        let calculo = 0;
        let temCafe = false;
        let temSanduiche = false;

        if (itens.length === 0) {
            return 'Não há itens no carrinho de compra!';
        }
        for (const itemEQtd of itens) {
            const partes = itemEQtd.split(',');
            const item = partes[0];
            const quantidadeItem = partes[1];

            if (cardapio[item] === undefined) {
                return 'Item inválido!';
            } else if (quantidadeItem === undefined || parseInt(quantidadeItem) === 0) {
                return 'Quantidade inválida!';
            }

            arrayItens.push(item);
            calculo += cardapio[item] * parseInt(quantidadeItem);
            
            if (item === 'cafe') {
                temCafe = true;
            } else if (item === 'sanduiche') {
                temSanduiche = true;
            }
        }
      
        if (arrayItens.includes('chantily') && !temCafe) {
            return 'Item extra não pode ser pedido sem o principal';
        } else if (arrayItens.includes('queijo') && !temSanduiche) {
            return 'Item extra não pode ser pedido sem o principal';
        }

        if (formaDePagamento === 'dinheiro') {
            calculo *= 0.95;// 5% de desconto
        } else if (formaDePagamento === 'credito') {
            calculo *= 1.03; // 3% de acréscimo
        } else if (formaDePagamento !== 'debito') {
            return 'Forma de pagamento inválida!';
        }


        return 'R$ ' + calculo.toFixed(2).replace('.', ',');
    }
}

var resultado = new CaixaDaLanchonete().calcularValorDaCompra('debito', ['cafe,1','chantily,5']);


console.log(resultado);

export { CaixaDaLanchonete };