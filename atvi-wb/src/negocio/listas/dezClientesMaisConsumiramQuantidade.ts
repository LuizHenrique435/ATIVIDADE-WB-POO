import Cliente from "../../modelo/cliente"
import Listagem from "../listagem";

export default class DezClientesMaisConsumiramQuantidade extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nOs 10 clientes que mais consumiram em quantidade:`);
    
        this.clientes.sort((a, b) => (b.getProdutosConsumidos.length + b.getServicosConsumidos.length - a.getProdutosConsumidos.length + a.getServicosConsumidos.length) ? -1 : 1)
    
        for (let i = 0; i < Math.min(this.clientes.length, 10); i++) {
            console.log(`${i + 1} - ${this.clientes[i].nome}`);
        }
    }
    
}