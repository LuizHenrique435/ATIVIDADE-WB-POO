import Edição from "../editar";
import Servico from "../../modelo/servico";
import Entrada from "../../io/entrada";

export default class EditarServico extends Edição {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public editar(): void {
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico que você deseja alterar: `)
        let editarServico = this.servicos.find(servico => servico.getNomeServico === nome)
        if (editarServico) {
            let opcoes = 
`
Escolha uma opção:
1 - Alterar nome
2 - Alterar preço
0 - Sair
`

            let opcaoEscolhida = this.entrada.receberNumero(opcoes)

            switch(opcaoEscolhida) {
                case 1:
                    let nomeServico = this.entrada.receberTexto(`Informe o novo nome do servico: `)
                    editarServico.nomeServico = nomeServico
                    console.log(`Nome alterado com sucesso!`);
                    break;
                case 2:
                    let precoServico = this.entrada.receberNumero(`Por favor informe o novo valor do servico: `)
                    editarServico.precoServico = precoServico
                    console.log(`Preço alterado com sucesso!`);
                    break;
                case 0:
                    console.log(`Saindo da edição de servicos...`);
                    break;
                default:
                    console.log(`Opção inválida!`);
            }
            this.servicos[this.servicos.indexOf(editarServico)] = editarServico
        }else {
            console.log(`Servico não encontrado!`);
        }
    }
}
