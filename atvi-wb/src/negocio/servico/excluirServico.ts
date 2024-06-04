import Exclusao from "../excluir";
import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";

export default class ExcluirServicos extends Exclusao{
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let nome = this.entrada.receberTexto(`Por favor informe o Nome do servico que você deseja excluir: `)
        const indice = this.servicos.findIndex(servico => servico.getNomeServico === nome);
        if (indice !== -1) {
            this.servicos.splice(indice, 1);
            console.log(`Servico com Nome: ${nome} foi excluído com sucesso!`);
        } else {
            console.log(`Servico com Nome: ${nome} não encontrado.`);
        }
}
}