import Cliente from "../../modelo/cliente";
import Produto from "../../modelo/produto";
import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class CincoClientesMaisConsumiramValor extends Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public listar(): void {
        console.log(`\nOs 5 clientes que mais consumiram em valor:`);
    
        let produtos: Array<Produto> = [...this.produtos];
        let servicos: Array<Servico> = [...this.servicos];
    
        this.clientes.forEach(cliente => {
            let precoPedido: number = 0;
    
            cliente.getProdutosConsumidos.forEach(prodConsumido => {
                const produto = produtos.find(item => item.nomeProduto === prodConsumido.nomeProduto);
                if (produto) {
                    precoPedido += produto.precoProduto;
                }
            });
    
            cliente.getServicosConsumidos.forEach(servConsumido => {
                const servico = servicos.find(item => item.nomeServico === servConsumido.nomeServico);
                if (servico) {
                    precoPedido += servico.precoServico;
                }
            });
    
            cliente.precoPedido = precoPedido;
        });
    
        this.clientes.sort((cliente1, cliente2) => (cliente1.precoPedido > cliente2.precoPedido) ? -1 : 1);
    
        let ordemPedido = 1;
    
        for (let i = 0; i < Math.min(this.clientes.length, 5); i++) {
            const cliente = this.clientes[i];
            console.log(`${ordemPedido} - ${cliente.nome}: ${cliente.precoPedido}`);
            ordemPedido++;
        }
    }
    
}