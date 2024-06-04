import Cliente from "../../modelo/cliente";
import Edição from "../editar";
import Entrada from "../../io/entrada";
import RG from "../../modelo/rg";
import Telefone from "../../modelo/telefone";

export default class EditarClientes extends Edição{
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public editar(): void {
        let cpf = this.entrada.receberTexto(`Por favor informe o CPF do cliente que você deseja alterar: `)
        let editarCliente = this.clientes.find(cliente => cliente.getCpf.getValor === cpf)
        if (editarCliente) {
            let opcoes = 
`
Escolha uma opção:
1 - Alterar nome
2 - Alterar nome social
3 - Alterar gênero
4 - Alterar rg
5 - Alterar telefone
0 - Sair
`

            let opcaoEscolhida = this.entrada.receberNumero(opcoes)

            switch(opcaoEscolhida) {
                case 1:
                    let nome = this.entrada.receberTexto(`Informe o novo nome do cliente: `)
                    editarCliente.nome = nome
                    console.log(`Nome alterado com sucesso!`);
                    break;
                case 2:
                    let nomeSocial = this.entrada.receberTexto(`Informe o novo nome social do cliente: `)
                    editarCliente.nomeSocial = nomeSocial
                    console.log(`Nome social alterado com sucesso!`);
                    break;
                case 3:
                    let genero = this.entrada.receberTexto(`Informe o novo gênero do cliente: `)
                    editarCliente.genero = genero
                    console.log(`Gênero alterado com sucesso!`);
                    break;
                case 4:
                    let valorRg = this.entrada.receberTexto(`Por favor informe o número do rg: `);
                    let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
                    let partesDataRg = dataRg.split('/')
                    let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
                    let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
                    let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
                    let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
                    let rgs = new RG(valorRg, dataEmissaoRg);
                    editarCliente.getRgs[0] = rgs
                    console.log(`RG alterado com sucesso!`);
                    break;
                case 5:
                    let ddd = this.entrada.receberTexto(`Por favor informe o DDD: `) 
                    let numero = this.entrada.receberTexto(`Por favor informe o número do telefone: `)
                    let telefone = new Telefone (ddd, numero)
                    editarCliente.getTelefones[0] = telefone
                    console.log(`Telefone alterado com sucesso!`);
                    break;
                case 0:
                    console.log(`Saindo da edição de clientes...`);
                    break;
                default:
                    console.log(`Opção inválida!`);
            }
            this.clientes[this.clientes.indexOf(editarCliente)] = editarCliente
        } else {
            console.log(`Cliente não encontrado!`);
        }
    }
}
