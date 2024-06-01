import Cliente from "../../modelo/cliente"
import Listagem from "../listagem";

export default class DezClientesMenosConsumiram extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super ()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nOs 10 clientes que menos consumiram produtos/serviços:`);
    
        this.clientes.sort((a, b) => (a.getProdutosConsumidos.length + a.getServicosConsumidos.length) - (b.getProdutosConsumidos.length + b.getServicosConsumidos.length));
        
        let ordem = 1;
    
        for (let i = 0; i < Math.min(this.clientes.length, 10); i++) {
            console.log(`${ordem} - ${this.clientes[i].nome}`);
            ordem++;
        }
    }
    
}