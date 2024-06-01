import Exclusao from "../excluir";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";

export default class ExcluirProdutos extends Exclusao{
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public excluir(): void {
        let nome = this.entrada.receberTexto(`Por favor informe o Nome do produto que você deseja excluir: `)
        const indice = this.produtos.findIndex(produto => produto.getNomeProduto === nome);
        if (indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log(`Produto com Nome: ${nome} foi excluído com sucesso!`);
        } else {
            console.log(`Produto com Nome: ${nome} não encontrado.`);
        }
}
}