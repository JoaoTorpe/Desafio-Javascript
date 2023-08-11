
class CaixaDaLanchonete {
    
    calcularValorDaCompra(metodoDePagamento, itens) {
        //Separa os nomes das quantidades

        if(itens.length === 0){
            return "Não há itens no carrinho de compra!"
        }

        const itemsNames = itens.map((item)=>item.split(",")[0]);
        const itemsQuant = itens.map((item)=>item.split(",")[1]);
        
        if(itemsQuant.some((itemQuant)=>itemQuant=== "0")){
            return "Quantidade inválida!";
        }

        //Cria objetos com o nome e a quantidade
        const pedidosSet = new Set();
        for(let i = 0; i< itens.length;i++){

            const itemDopedido={
                name: itemsNames[i],
                quant: itemsQuant [i],
                preco: this.obterPreco(itemsNames[i])
            }
            //Armazena em um Set para evitar repetição
            pedidosSet.add(itemDopedido);
        }
            if(  [... pedidosSet].some((pedido)=> this.itemExiste(pedido.name)===false)){
                return "Item inválido!"
            }
            if(  [... pedidosSet].some((pedido)=> pedido.name === null)){
                return "Não há itens no carrinho de compra!"
            }


        if([... pedidosSet].some((pedido)=> pedido.name === "chantily")  || [... pedidosSet].some((pedido)=> pedido.name === "queijo") ){
            
        if( [... pedidosSet].some((pedido)=> pedido.name === "chantily") ){
            let validacao = this.validarCafe([...pedidosSet])

            if(validacao === false){
                return "Item extra não pode ser pedido sem o principal";
            }
            else{
             return  this.valorFinal(metodoDePagamento,pedidosSet)

            }

        }
        if([... pedidosSet].some((pedido)=> pedido.name === "queijo") ){
            let validacao = this.validarSanduiche([...pedidosSet])

            if(validacao === false){
                return "Item extra não pode ser pedido sem o principal";
            }
            else{
               return this.valorFinal(metodoDePagamento,pedidosSet)
            }
        }
}
else{


return this.valorFinal(metodoDePagamento,pedidosSet) 
}

    
    }
        valorFinal(formaDePagamento,pedidos){
            switch (formaDePagamento) {
                case "dinheiro":
                    var soma = 0;
                   pedidos.forEach((pedido)=>soma += pedido.quant * pedido.preco)  
                    soma = soma - (soma *0.05 ) 
                return soma;
                case "credito":
                    var soma = 0;
                    pedidos.forEach((pedido)=>soma += pedido.quant * pedido.preco)  
                     soma = soma + (soma *0.03 ) 
                return soma;
                case "debito":
                    var soma = 0;
                    pedidos.forEach((pedido)=>soma += pedido.quant * pedido.preco) 
                return soma;

                default:
                    return"Forma de pagamento inválida!";

        }
    }


        validarCafe(pedidosSet){
            return [... pedidosSet].some((pedido)=> pedido.name === "cafe")
        }
        validarSanduiche(pedidosSet){
            return [... pedidosSet].some((pedido)=> pedido.name === "sanduiche")
        }


    obterPreco(itemName) {
        switch (itemName) {
            case "cafe":
                return 3.00;
            case "chantily":
                //extra
                return 1.50;
            case "suco":
                return 6.20;
            case "sanduiche":
                return 6.50;
            case "queijo":
                //extra
                return 2.00;
            case "salgado":
                return 7.25;
            case "combo1":
                return 9.50;
            case "combo2":
                return 7.50;
            default:
                return "item inválido"; 
        }
    }
itemExiste(itemName) {
        switch (itemName) {
            case "cafe":
                return true;
            case "chantily":
                return true;
            case "suco":
                return true;
            case "sanduiche":
                return true;
            case "queijo":
                return true ;
            case "salgado":
                return true;
            case "combo1":
                return true;
            case "combo2":
                return true;
            default:
                return false; 
        }
    }



}

export { CaixaDaLanchonete };

const caixa = new CaixaDaLanchonete();


console.log( caixa.calcularValorDaCompra("credito",['combo1,1','cafe,2'])  )