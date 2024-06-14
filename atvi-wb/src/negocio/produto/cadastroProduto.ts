import Entrada from "../../io/entrada";
import Produto from "../../modelo/produto";
import Cadastro from "../cadastro";

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto`);
        let nomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `)
        let precoProduto = this.entrada.receberNumero(`Por favor informe o valor do produto: `)
        let produto = new Produto (nomeProduto, precoProduto)
        this.produtos.push(produto);
    }
    public gerarProntos(): void {
        let produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
            "Sabonete Intimo"
        ]
        let preco = [
            50.00,
            75.00,
            120.00,
            90.00,
            110.00,
            85.00,
            95.00,
            130.00,
            105.00,
            70.00,
            140.00,
            100.00,
            80.00,
            115.00,
            125.00,
            60.00,
            135.00,
            145.00,
            55.00,
            65.00
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}