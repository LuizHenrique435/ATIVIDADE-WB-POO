import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do servico`);
        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let precoServico = this.entrada.receberNumero(`Por favor informe o valor do servico: `)
        let servico = new Servico (nomeServico, precoServico)
        this.servicos.push(servico);
    }
    public gerarProntos(): void {
        let servicos = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ]
        let preco = [
            250.00,
            750.0,
            120.00,
            100.00,
            15.00,
            20.00,
            75.00,
            250.00,
            20.00
        ]
        let sliceServico = servicos.slice();
        let sliceServicoPreco = preco.slice()
        for (let index = 0; index < sliceServico.length; index++) {
            let adicionarServico = new Servico(sliceServico[index], Number(sliceServicoPreco[index]))
            this.servicos.push(adicionarServico)
        }
    }
}