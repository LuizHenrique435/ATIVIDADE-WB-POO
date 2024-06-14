import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import Exclusao from "../excluir";

export default class ExcluirClientes extends Exclusao{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let cpf = this.entrada.receberTexto(`Por favor informe o CPF do Cliente que você deseja excluir: `)
        const indice = this.clientes.findIndex(cliente => cliente.getCpf.getValor === cpf);
        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            console.log(`Cliente com CPF: ${cpf} foi excluído com sucesso!`);
        } else {
            console.log(`Cliente com CPF: ${cpf} não encontrado.`);
        }
}
}
