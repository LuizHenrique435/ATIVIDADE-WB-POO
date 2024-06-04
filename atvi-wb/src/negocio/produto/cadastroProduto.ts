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
            "cotonetes",
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        let preco = [
            50.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
            100.00,
        ]
        let sliceProdutos = produtos.slice();
        let sliceProdutosPreco = preco.slice()
        for (let index = 0; index < sliceProdutos.length; index++) {
            let adicionandoProdutos = new Produto(sliceProdutos[index], sliceProdutosPreco[index])
            this.produtos.push(adicionandoProdutos)
        }
    }
}