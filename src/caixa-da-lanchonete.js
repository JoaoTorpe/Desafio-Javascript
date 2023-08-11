
class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const itemsNames = itens.map((item)=>item.split(",")[0]);
        const itemsQuant = itens.map((item)=>item.split(",")[1]);
            console.log(itemsQuant[0] , itemsNames[0] )

            const pedidosSet = new Set();
        for(let i = 0; i< itens.length;i++){

            const pedido={
                nome: itemsNames[i],
                quant: itemsQuant [i]
            }

            pedidosSet.add(pedido);
        }

        console.log(pedidosSet)


        return "";
    }

}

export { CaixaDaLanchonete };

const caixa = new CaixaDaLanchonete();

caixa.calcularValorDaCompra("Credito",['cafe,1','chantily,1'])