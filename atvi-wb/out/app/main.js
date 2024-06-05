"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = __importDefault(require("../io/entrada"));
var empresa_1 = __importDefault(require("../modelo/empresa"));
var cadastroCliente_1 = __importDefault(require("../negocio/cliente/cadastroCliente"));
var listagemClientes_1 = __importDefault(require("../negocio/cliente/listagemClientes"));
var editarCliente_1 = __importDefault(require("../negocio/cliente/editarCliente"));
var excluirCliente_1 = __importDefault(require("../negocio/cliente/excluirCliente"));
var clientesProntos_1 = __importDefault(require("../negocio/cliente/clientesProntos"));
var cadastroProduto_1 = __importDefault(require("../negocio/produto/cadastroProduto"));
var listagemProduto_1 = __importDefault(require("../negocio/produto/listagemProduto"));
var editarProduto_1 = __importDefault(require("../negocio/produto/editarProduto"));
var excluirProduto_1 = __importDefault(require("../negocio/produto/excluirProduto"));
var cadastroServico_1 = __importDefault(require("../negocio/servico/cadastroServico"));
var listagemServico_1 = __importDefault(require("../negocio/servico/listagemServico"));
var editarServico_1 = __importDefault(require("../negocio/servico/editarServico"));
var excluirServico_1 = __importDefault(require("../negocio/servico/excluirServico"));
var compraProduto_1 = __importDefault(require("../negocio/consumo/compraProduto"));
var compraServico_1 = __importDefault(require("../negocio/consumo/compraServico"));
var listaPedidoProduto_1 = __importDefault(require("../negocio/consumo/listaPedidoProduto"));
var listaPedidoServico_1 = __importDefault(require("../negocio/consumo/listaPedidoServico"));
var dezClientesMaisConsumiramQuantidade_1 = __importDefault(require("../negocio/listas/dezClientesMaisConsumiramQuantidade"));
var listagemGenero_1 = __importDefault(require("../negocio/listas/listagemGenero"));
var servicosProdutosGeraisMaisConsumidos_1 = __importDefault(require("../negocio/listas/servicosProdutosGeraisMaisConsumidos"));
var servicosProdutosGeneroMaisConsumidos_1 = __importDefault(require("../negocio/listas/servicosProdutosGeneroMaisConsumidos"));
var dezClientesMenosConsumiramProdutosServicos_1 = __importDefault(require("../negocio/listas/dezClientesMenosConsumiramProdutosServicos"));
var cincoClientesMaisConsumiramValor_1 = __importDefault(require("../negocio/listas/cincoClientesMaisConsumiramValor"));
console.log("Bem-vindo ao cadastro de clientes do Grupo World Beauty");
var empresa = new empresa_1.default();
var execucao = true;
var cadastroProduto = new cadastroProduto_1.default(empresa.getProdutos);
var cadastroServico = new cadastroServico_1.default(empresa.getServicos);
var gerarClientes = new clientesProntos_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
cadastroServico.gerarProntos();
cadastroProduto.gerarProntos();
gerarClientes.gerarProntos();
while (execucao) {
    console.log("Op\u00E7\u00F5es:");
    console.log("--------------------------------------");
    console.log("CLIENTES");
    console.log("1 - Cadastrar cliente");
    console.log("2 - Listar todos os clientes");
    console.log("3 - Editar informa\u00E7\u00F5es de um cliente");
    console.log("4 - Excluir um cliente");
    console.log("--------------------------------------");
    console.log("PRODUTOS");
    console.log("5 - Cadastrar produto");
    console.log("6 - Listar todos os produtos");
    console.log("7 - Editar informa\u00E7\u00F5es de um produto");
    console.log("8 - Excluir um produto");
    console.log("--------------------------------------");
    console.log("SERVICOS");
    console.log("9 - Cadastrar servico");
    console.log("10 - Listar todos os servicos");
    console.log("11 - Editar informa\u00E7\u00F5es de um servico");
    console.log("12 - Excluir um servico");
    console.log("--------------------------------------");
    console.log("CONSUMO");
    console.log("13 - Comprar produto");
    console.log("14 - Comprar servico");
    console.log("15 - Listar pedido de produtos");
    console.log("16 - Listar pedido de servicos");
    console.log("--------------------------------------");
    console.log("LISTAS");
    console.log("17 - Listagem dos 10 clientes que mais consumiram produtos ou servi\u00E7os, em quantidade, n\u00E3o em valor");
    console.log("18 - Listagem de todos os clientes por g\u00EAnero");
    console.log("19 - Listagem geral dos servi\u00E7os ou produtos mais consumidos");
    console.log("20 - Listagem dos servi\u00E7os ou produtos mais consumidos por g\u00EAnero");
    console.log("21 - Listagem dos 10 clientes que menos consumiram produtos ou servi\u00E7os");
    console.log("22 - Listagem dos 5 clientes que mais consumiram em valor, n\u00E3o em quantidade");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        //CLIENTES
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 3:
            var editarCliente = new editarCliente_1.default(empresa.getClientes);
            editarCliente.editar();
            break;
        case 4:
            var excluirCliente = new excluirCliente_1.default(empresa.getClientes);
            excluirCliente.excluir();
            break;
        // PRODUTOS    
        case 5:
            var cadastroProduto_2 = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProduto_2.cadastrar();
            break;
        case 6:
            var listagemProduto = new listagemProduto_1.default(empresa.getProdutos);
            listagemProduto.listar();
            break;
        case 7:
            var editarProduto = new editarProduto_1.default(empresa.getProdutos);
            editarProduto.editar();
            break;
        case 8:
            var excluirProduto = new excluirProduto_1.default(empresa.getProdutos);
            excluirProduto.excluir();
            break;
        // SERVICOS   
        case 9:
            var cadastroServico_2 = new cadastroServico_1.default(empresa.getServicos);
            cadastroServico_2.cadastrar();
            break;
        case 10:
            var listagemServico = new listagemServico_1.default(empresa.getServicos);
            listagemServico.listar();
            break;
        case 11:
            var editarServico = new editarServico_1.default(empresa.getServicos);
            editarServico.editar();
            break;
        case 12:
            var excluirServico = new excluirServico_1.default(empresa.getServicos);
            excluirServico.excluir();
            break;
        // CONSUMO    
        case 13:
            var comprarProduto = new compraProduto_1.default(empresa.getClientes, empresa.getProdutos);
            comprarProduto.comprar();
            break;
        case 14:
            var comprarServico = new compraServico_1.default(empresa.getClientes, empresa.getServicos);
            comprarServico.comprar();
            break;
        case 15:
            var listarPedidoProduto = new listaPedidoProduto_1.default(empresa.getClientes);
            listarPedidoProduto.listar();
            break;
        case 16:
            var listarPedidoServico = new listaPedidoServico_1.default(empresa.getClientes);
            listarPedidoServico.listar();
            break;
        // LISTAS
        case 17:
            var dezClientesMaisConsumiramQuantidade = new dezClientesMaisConsumiramQuantidade_1.default(empresa.getClientes);
            dezClientesMaisConsumiramQuantidade.listar();
            break;
        case 18:
            var listarClienteGenero = new listagemGenero_1.default(empresa.getClientes);
            listarClienteGenero.listar();
            break;
        case 19:
            var listarProdutosServicosGerais = new servicosProdutosGeraisMaisConsumidos_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listarProdutosServicosGerais.listar();
            break;
        case 20:
            var listarProdutosServicosGenero = new servicosProdutosGeneroMaisConsumidos_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            listarProdutosServicosGenero.listar();
            break;
        case 21:
            var dezClientesMenosConsumiramQuantidade = new dezClientesMenosConsumiramProdutosServicos_1.default(empresa.getClientes);
            dezClientesMenosConsumiramQuantidade.listar();
            break;
        case 22:
            var cincoClientesMaisConsumiramValor = new cincoClientesMaisConsumiramValor_1.default(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
            cincoClientesMaisConsumiramValor.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
