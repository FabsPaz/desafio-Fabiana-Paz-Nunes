class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
      // Definindo o menu com os códigos, descrições e valores dos itens
    const menu = {
        'cafe': 3.00,
        'chantily': 1.50,
        'suco': 6.20,
        'sanduiche': 6.50,
        'queijo': 2.00,
        'salgado': 7.25,
        'combo1': 9.50,
        'combo2': 7.50,
      };
  
      // Definindo os descontos para cada forma de pagamento
      const descontos = {
        'dinheiro': 0.05,
        'debito': 1,
        'credito': 1.03,
      };
  
      // Definindo os itens extras e seus respectivos itens principais
      const extras = {
        'chantily': 'cafe',
        'queijo': 'sanduiche',
      };
  
      // Inicializando o valor total da compra
      let total = 0;
  
      // Verificando se não há itens no carrinho
      if (itens.length === 0) {
        return 'Não há itens no carrinho de compra!';
      }
  
      // Iterando pelos itens no carrinho
      for (const item of itens) {
      
      // Separando o código do item e a quantidade
      const [codigo, quantidade] = item.split(',');
  
      // Verificando se o código do item existe no menu
      if (!menu.hasOwnProperty(codigo)) {
          return 'Item inválido!';
        }
  
        
      // Verificando se a quantidade é maior que zero
      if (quantidade <= 0) {
          return 'Quantidade inválida!';
        }
       
      // Calculando o valor total do item multiplicado pela quantidade
      total += menu[codigo] * quantidade;
  
      // Verificando se o item extra está sendo pedido sem o principal correspondente
      if (!extras.hasOwnProperty(codigo)) {
        let achou = false
        for (let index = 0; index < itens.length; index++) {
        if (!achou){
          const item = itens [index]
          const valorEncontrado = item.startsWith(extras[codigo])
        if (valorEncontrado.length > 0)
          achou = true 
          return 'Item extra não pode ser pedido sem o principal'; 
        }
      }       
    }
  }
      
      // Verificando se a forma de pagamento é válida
      if (!descontos.hasOwnProperty(metodoDePagamento)) {
        return 'Forma de pagamento inválida!';
      }
     
      // Aplicando descontos ou acréscimos com base na forma de pagamento
      if (metodoDePagamento === 'dinheiro') {
        total -= total * descontos[metodoDePagamento];
      } else if (metodoDePagamento === 'credito') {
        total = total * descontos[metodoDePagamento];
      } else (metodoDePagamento === 'debito')
      total = total
  
      // Formatando e retornando o valor total da compra
      return `R$ ${total.toFixed(2)}`;  

    }

}

export { CaixaDaLanchonete };
