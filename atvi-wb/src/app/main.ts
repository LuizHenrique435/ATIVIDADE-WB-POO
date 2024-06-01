import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"

import CadastroCliente from "../negocio/cliente/cadastroCliente";
import ListagemClientes from "../negocio/cliente/listagemClientes";
import EditarClientes from "../negocio/cliente/editarCliente";
import ExcluirClientes from "../negocio/cliente/excluirCliente";
import ClientesGerados from "../negocio/cliente/clientesProntos";

import CadastroProduto from "../negocio/produto/cadastroProduto";
import ListagemProdutos from "../negocio/produto/listagemProduto";
import EditarProduto from "../negocio/produto/editarProduto";
import ExcluirProdutos from "../negocio/produto/excluirProduto";

import CadastroServico from "../negocio/servico/cadastroServico";
import ListagemServicos from "../negocio/servico/listagemServico";
import EditarServico from "../negocio/servico/editarServico";
import ExcluirServicos from "../negocio/servico/excluirServico";

import ComprarProduto from "../negocio/consumo/compraProduto";
import ComprarServico from "../negocio/consumo/compraServico";
import ListaPedidoProduto from "../negocio/consumo/listaPedidoProduto";
import ListaPedidoServico from "../negocio/consumo/listaPedidoServico";

import DezClientesMaisConsumiramQuantidade from "../negocio/listas/dezClientesMaisConsumiramQuantidade";
import ListagemClientesGenero from "../negocio/listas/listagemGenero";
import ServicosProdutosGeraisConsumidos from "../negocio/listas/servicosProdutosGeraisMaisConsumidos";
import ServicosProdutosGenerosConsumidos from "../negocio/listas/servicosProdutosGeneroMaisConsumidos";
import DezClientesMenosConsumiram from "../negocio/listas/dezClientesMenosConsumiramProdutosServicos";
import CincoClientesMaisConsumiramValor from "../negocio/listas/cincoClientesMaisConsumiramValor";


console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let cadastroServico = new CadastroServico(empresa.getServicos);
let gerarClientes = new ClientesGerados(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
cadastroServico.gerarProntos();
cadastroProduto.gerarProntos();
gerarClientes.gerarProntos();

while (execucao) {
    console.log(`Opções:`);
    console.log(`--------------------------------------`);

    console.log(`CLIENTES`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Editar informações de um cliente`);
    console.log(`4 - Excluir um cliente`);

    console.log(`--------------------------------------`);

    console.log(`PRODUTOS`);
    console.log(`5 - Cadastrar produto`);
    console.log(`6 - Listar todos os produtos`);
    console.log(`7 - Editar informações de um produto`);
    console.log(`8 - Excluir um produto`);

    console.log(`--------------------------------------`);

    console.log(`SERVICOS`);
    console.log(`9 - Cadastrar servico`);
    console.log(`10 - Listar todos os servicos`);
    console.log(`11 - Editar informações de um servico`);
    console.log(`12 - Excluir um servico`);

    console.log(`--------------------------------------`);

    console.log(`CONSUMO`)
    console.log(`13 - Comprar produto`)
    console.log(`14 - Comprar servico`)
    console.log(`15 - Listar pedido de produtos`)
    console.log(`16 - Listar pedido de servicos`)

    console.log(`--------------------------------------`);

    console.log(`LISTAS`)
    console.log(`17 - Listagem dos 10 clientes que mais consumiram produtos ou serviços, em quantidade, não em valor`)
    console.log(`18 - Listagem de todos os clientes por gênero`)
    console.log(`19 - Listagem geral dos serviços ou produtos mais consumidos`)
    console.log(`20 - Listagem dos serviços ou produtos mais consumidos por gênero`)
    console.log(`21 - Listagem dos 10 clientes que menos consumiram produtos ou serviços`)
    console.log(`22 - Listagem dos 5 clientes que mais consumiram em valor, não em quantidade`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {

        //CLIENTES

        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let editarCliente = new EditarClientes(empresa.getClientes)
            editarCliente.editar()
            break;
        case 4:
            let excluirCliente = new ExcluirClientes(empresa.getClientes)
            excluirCliente.excluir()
            break;

        // PRODUTOS    

        case 5:
            let cadastroProduto = new CadastroProduto(empresa.getProdutos)
            cadastroProduto.cadastrar()
            break;
        case 6:
            let listagemProduto = new ListagemProdutos(empresa.getProdutos)
            listagemProduto.listar()
            break;
        case 7:
            let editarProduto = new EditarProduto(empresa.getProdutos)
            editarProduto.editar()
            break;
        case 8:
            let excluirProduto = new ExcluirProdutos(empresa.getProdutos)
            excluirProduto.excluir()
            break;

        // SERVICOS   

        case 9:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 10:
            let listagemServico = new ListagemServicos(empresa.getServicos)
            listagemServico.listar()
            break;
        case 11:
            let editarServico = new EditarServico(empresa.getServicos)
            editarServico.editar()
            break;
        case 12:
            let excluirServico = new ExcluirServicos(empresa.getServicos)
            excluirServico.excluir()
            break;

        // CONSUMO    

        case 13:
            let comprarProduto = new ComprarProduto(empresa.getClientes,empresa.getProdutos)
            comprarProduto.comprar()
            break;
        case 14:
            let comprarServico = new ComprarServico(empresa.getClientes,empresa.getServicos)
            comprarServico.comprar()
            break;
        case 15:
            let listarPedidoProduto = new ListaPedidoProduto(empresa.getClientes)
            listarPedidoProduto.listar()
            break;
        case 16:
            let listarPedidoServico = new ListaPedidoServico(empresa.getClientes)
            listarPedidoServico.listar()
            break;

        // LISTAS

        case 17:
            let dezClientesMaisConsumiramQuantidade= new DezClientesMaisConsumiramQuantidade(empresa.getClientes)
            dezClientesMaisConsumiramQuantidade.listar()
            break;
        case 18:
            let listarClienteGenero = new ListagemClientesGenero(empresa.getClientes)
            listarClienteGenero.listar()
            break;
        case 19:
            let listarProdutosServicosGerais = new ServicosProdutosGeraisConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listarProdutosServicosGerais.listar()
            break;
        case 20:
            let listarProdutosServicosGenero = new ServicosProdutosGenerosConsumidos(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listarProdutosServicosGenero.listar()
            break;
        case 21:
            let dezClientesMenosConsumiramQuantidade = new DezClientesMenosConsumiram(empresa.getClientes)
            dezClientesMenosConsumiramQuantidade.listar()
            break;
        case 22:
            let cincoClientesMaisConsumiramValor = new CincoClientesMaisConsumiramValor(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cincoClientesMaisConsumiramValor.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
    
}
