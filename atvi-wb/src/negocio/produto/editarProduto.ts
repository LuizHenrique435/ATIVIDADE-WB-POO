import Edição from "../editar";
import Produto from "../../modelo/produto";
import Entrada from "../../io/entrada";

export default class EditarProduto extends Edição {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public editar(): void {
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto que você deseja alterar: `)
        let editarProduto = this.produtos.find(produto => produto.getNomeProduto === nome)
        if (editarProduto) {
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
                    let nomeProduto = this.entrada.receberTexto(`Informe o novo nome do produto: `)
                    editarProduto.nomeProduto = nomeProduto
                    console.log(`Nome alterado com sucesso!`);
                    break;
                case 2:
                    let precoProduto = this.entrada.receberNumero(`Por favor informe o novo valor do produto: `)
                    editarProduto.precoProduto = precoProduto
                    console.log(`Preço alterado com sucesso!`);
                    break;
                case 0:
                    console.log(`Saindo da edição de produtos...`);
                    break;
                default:
                    console.log(`Opção inválida!`);
            }
            this.produtos[this.produtos.indexOf(editarProduto)] = editarProduto
        }else {
            console.log(`Produto não encontrado!`);
        }
    }
}
