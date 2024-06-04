import Cliente from "../../modelo/cliente";
import Listagem from "../listagem";

export default class ListagemClientesGenero extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        const mulheres = this.clientes.filter(cliente => cliente.genero === "Feminino");
        const homens = this.clientes.filter(cliente => cliente.genero === "Masculino");
    
        console.log(`\nLista dos clientes do sexo feminino:`);
        mulheres.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });

        console.log(`\nLista dos clientes do sexo masculino:`);
        homens.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Gênero: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`--------------------------------------`);
        });
    
        console.log(`\n`);
    }
}