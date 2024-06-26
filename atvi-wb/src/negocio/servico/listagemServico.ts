import Servico from "../../modelo/servico";
import Listagem from "../listagem";

export default class ListagemServicos extends Listagem{
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os servicos:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ` + servico.nomeServico);

            console.log(`Preço: ` + servico.precoServico);
            
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
}