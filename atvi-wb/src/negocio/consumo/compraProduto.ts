import Produto from "../../modelo/produto";
import Cliente from "../../modelo/cliente";
import Entrada from "../../io/entrada";
import Comprar from "../comprar";

export default class ComprarProduto extends Comprar {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public comprar(): void {
        let cpf = this.entrada.receberTexto(`Por favor informe o CPF de quem irá realizar a compra: `)
        for (let index = 0; index < this.clientes.length; index++) {
            if (this.clientes[index].getCpf.getValor == cpf) {
                var operacao = true
                while(operacao){     
                    console.log(`Escolha uma opção: `);
                    console.log(`1 - Pedido de Produto`);
                    console.log(`0 - Sair`);     
                    let opcao = this.entrada.receberNumero('Escolha abaixo o que você quer fazer: ')
                    switch (opcao) {
                        case 1 :   
                            for (let indexProduto = 0; indexProduto < this.produtos.length; indexProduto++) {
                                console.log(indexProduto +" - " + this.produtos[indexProduto].getNomeProduto);                 
                            }
                            let produto = this.entrada.receberNumero('Insira o número do produto desejado: ')
                            this.clientes[index].getProdutosConsumidos.push(this.produtos[produto])
                            break;
                        case 0:
                            operacao = false
                            break;    
                    }
                }
            }
        }
    }
}