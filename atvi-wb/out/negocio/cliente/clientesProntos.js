"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var servico_1 = __importDefault(require("../../modelo/servico"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var clientesProntos_1 = __importDefault(require("../clientesProntos"));
var ClientesGerados = /** @class */ (function (_super) {
    __extends(ClientesGerados, _super);
    function ClientesGerados(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    ClientesGerados.prototype.gerarProntos = function () {
        var nome = "Luiz";
        var nomeSocial = "LZ D160";
        var genero = "Masculino";
        //
        var valor = "123.323.123-92";
        var date = new Date();
        date.getDate();
        var cpf = new cpf_1.default(valor, date);
        //
        var cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "37.376.237-5";
        var rg = new rg_1.default(valor, date);
        //
        var ddd = "12";
        var numero = "992343454";
        var telefone = new telefone_1.default(ddd, numero);
        //
        var produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE"
        ];
        var sliceProdutos = produtos.slice();
        var _loop_1 = function (index) {
            var nomes = this_1.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_1.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_1 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_1(index);
        }
        //
        var servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé"
        ];
        var sliceServico = servico.slice();
        var _loop_2 = function (index) {
            var nomes = this_2.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_2.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_2 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_2(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Erik Zanneti";
        nomeSocial = "Pincher";
        genero = "Masculino";
        //
        valor = "012.012.52-21";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "52.777.451-2";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "985471234";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
            "Sabonete Intimo"
        ];
        sliceProdutos = produtos.slice();
        var _loop_3 = function (index) {
            var nomes = this_3.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_3.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_3 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_3(index);
        }
        //
        servico = [
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
        ];
        sliceServico = servico.slice();
        var _loop_4 = function (index) {
            var nomes = this_4.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_4.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_4 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_4(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Felipe Silva";
        nomeSocial = "Felipe Pinga";
        genero = "Masculino";
        //
        valor = "277.522.22-22";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "78.415.415-2";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "965412354";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
        ];
        sliceProdutos = produtos.slice();
        var _loop_5 = function (index) {
            var nomes = this_5.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_5.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_5 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_5(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
        ];
        sliceServico = servico.slice();
        var _loop_6 = function (index) {
            var nomes = this_6.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_6.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_6 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_6(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Jorge Picasso";
        nomeSocial = "Jorginho";
        genero = "Masculino";
        //
        valor = "223.338.373-33";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.339.333-3";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "985231234";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
        ];
        sliceProdutos = produtos.slice();
        var _loop_7 = function (index) {
            var nomes = this_7.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_7.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_7 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_7(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_8 = function (index) {
            var nomes = this_8.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_8.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_8 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_8(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Gabriel";
        nomeSocial = "Gabigol";
        genero = "Masculino";
        //
        valor = "444.454.777-44";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "44.454.464-4";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "999996541";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Pasta de Dente Colgate",
            "Fio dental",
        ];
        sliceProdutos = produtos.slice();
        var _loop_9 = function (index) {
            var nomes = this_9.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_9.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_9 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_9(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_10 = function (index) {
            var nomes = this_10.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_10.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_10 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_10(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Rafaela Santos";
        nomeSocial = "NJRS";
        genero = "Feminino";
        //
        valor = "555.225.555-55";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.155.555-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "945213012";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_11 = function (index) {
            var nomes = this_11.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_11.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_11 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_11(index);
        }
        //
        servico = [
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_12 = function (index) {
            var nomes = this_12.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_12.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_12 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_12(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Neymar Junior";
        nomeSocial = "NJR";
        genero = "Masculino";
        //
        valor = "226.366.136-66";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "66.66.66-6";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "987452103";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
        ];
        sliceProdutos = produtos.slice();
        var _loop_13 = function (index) {
            var nomes = this_13.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_13.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_13 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_13(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
        ];
        sliceServico = servico.slice();
        var _loop_14 = function (index) {
            var nomes = this_14.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_14.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_14 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_14(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Kaua Dezidera";
        nomeSocial = "Dezidera";
        genero = "Masculino";
        //
        valor = "777.777.777-77";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "77.577.777-7";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9852002148";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
        ];
        sliceProdutos = produtos.slice();
        var _loop_15 = function (index) {
            var nomes = this_15.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_15.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_15 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_15(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
        ];
        sliceServico = servico.slice();
        var _loop_16 = function (index) {
            var nomes = this_16.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_16.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_16 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_16(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Edson Arantes do Nascimento";
        nomeSocial = "Pelé";
        genero = "Masculino";
        //
        valor = "000.888.888-88";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "88.088.888-8";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9852363214";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve"
        ];
        sliceProdutos = produtos.slice();
        var _loop_17 = function (index) {
            var nomes = this_17.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_17.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_17 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_17(index);
        }
        //
        servico = [
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_18 = function (index) {
            var nomes = this_18.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_18.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_18 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_18(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Messi";
        nomeSocial = "GOAT";
        genero = "Masculino";
        //
        valor = "777.342.123-993";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "123.123.123-2";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9213123123";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
        ];
        sliceProdutos = produtos.slice();
        var _loop_19 = function (index) {
            var nomes = this_19.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_19.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_19 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_19(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social"
        ];
        sliceServico = servico.slice();
        var _loop_20 = function (index) {
            var nomes = this_20.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_20.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_20 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_20(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Cristiano Ronaldo";
        nomeSocial = "ROBOZÃO";
        genero = "Masculino";
        //
        valor = "400.289.225-55";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.500.555-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9665400213";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_21 = function (index) {
            var nomes = this_21.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_21.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_21 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_21(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_22 = function (index) {
            var nomes = this_22.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_22.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_22 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_22(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Paula Tejando";
        nomeSocial = "Paulinha";
        genero = "Feminino";
        //
        valor = "123.432.522-55";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.551.005-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "963214561";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
        ];
        sliceProdutos = produtos.slice();
        var _loop_23 = function (index) {
            var nomes = this_23.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_23.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_23 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_23(index);
        }
        //
        servico = [
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_24 = function (index) {
            var nomes = this_24.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_24.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_24 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_24(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "BusLigt";
        nomeSocial = "Parceiro do Yudi";
        genero = "Masculino";
        //
        valor = "125.235.998-66";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "77.545.111-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "985461313";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_25 = function (index) {
            var nomes = this_25.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_25.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_25 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_25(index);
        }
        //
        servico = [
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_26 = function (index) {
            var nomes = this_26.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_26.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_26 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_26(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Diego ";
        nomeSocial = "Maradona";
        genero = "Masculino";
        //
        valor = "123.687.345-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.000.995-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "999996200";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
        ];
        sliceProdutos = produtos.slice();
        var _loop_27 = function (index) {
            var nomes = this_27.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_27.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_27 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_27(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_28 = function (index) {
            var nomes = this_28.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_28.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_28 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_28(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Marta";
        nomeSocial = "Marta";
        genero = "Feminino";
        //
        valor = "777.234.123-23";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.122.567-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "977741114";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
        ];
        sliceProdutos = produtos.slice();
        var _loop_29 = function (index) {
            var nomes = this_29.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_29.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_29 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_29(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_30 = function (index) {
            var nomes = this_30.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_30.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_30 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_30(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Paulo Dybala";
        nomeSocial = "Dychiclete";
        genero = "Masculino";
        //
        valor = "477.145.321-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "66.123.545-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "912112221";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_31 = function (index) {
            var nomes = this_31.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_31.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_31 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_31(index);
        }
        //
        servico = [
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_32 = function (index) {
            var nomes = this_32.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_32.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_32 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_32(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Elon Musk";
        nomeSocial = "Tesla";
        genero = "Masculino";
        //
        valor = "353.630.005-55";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "23.124.655-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "963210231";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
        ];
        sliceProdutos = produtos.slice();
        var _loop_33 = function (index) {
            var nomes = this_33.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_33.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_33 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_33(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_34 = function (index) {
            var nomes = this_34.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_34.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_34 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_34(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        nome = "Erik Hideki";
        nomeSocial = "Japones";
        genero = "Masculino";
        //
        valor = "978.123.123-02";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "34.678.987-0";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "955220011";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
        ];
        sliceProdutos = produtos.slice();
        var _loop_35 = function (index) {
            var nomes = this_35.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_35.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_35 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_35(index);
        }
        //
        servico = [
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_36 = function (index) {
            var nomes = this_36.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_36.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_36 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_36(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        //
        nome = "Endrick";
        nomeSocial = "Joia";
        genero = "Masculino";
        //
        valor = "324.122.111-43";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "33.355.535-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "98522110";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
        ];
        sliceProdutos = produtos.slice();
        var _loop_37 = function (index) {
            var nomes = this_37.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_37.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_37 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_37(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_38 = function (index) {
            var nomes = this_38.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_38.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_38 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_38(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        //
        nome = "Estevão";
        nomeSocial = "Palito";
        genero = "Masculino";
        //
        valor = "546.555.224-53";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.551.545-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "922031023";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
        ];
        sliceProdutos = produtos.slice();
        var _loop_39 = function (index) {
            var nomes = this_39.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_39.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_39 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_39(index);
        }
        //
        servico = [
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_40 = function (index) {
            var nomes = this_40.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_40.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_40 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_40(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        //
        nome = "Alisha Lemaannn";
        nomeSocial = "DG";
        genero = "Feminino";
        //
        valor = "345.535.222-52";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.531.555-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "945120213";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_41 = function (index) {
            var nomes = this_41.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_41.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_41 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_41(index);
        }
        //
        servico = [
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_42 = function (index) {
            var nomes = this_42.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_42.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_42 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_42(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Rebeca";
        nomeSocial = "Mucilon";
        genero = "Feminino";
        //
        valor = "777.234.011-25";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.123.456-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "985236190";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_43 = function (index) {
            var nomes = this_43.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_43.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_43 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_43(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_44 = function (index) {
            var nomes = this_44.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_44.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_44 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_44(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Fernando Massanori";
        nomeSocial = "Massa";
        genero = "Masculino";
        //
        valor = "782.213.342-12";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "45.741.321-0";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "963254152";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
        ];
        sliceProdutos = produtos.slice();
        var _loop_45 = function (index) {
            var nomes = this_45.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_45.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_45 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_45(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_46 = function (index) {
            var nomes = this_46.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_46.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_46 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_46(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "MC DonaIDS";
        nomeSocial = "BK";
        genero = "Masculino";
        //
        valor = "324.777.215-15";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.789.123-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9875610963";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_47 = function (index) {
            var nomes = this_47.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_47.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_47 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_47(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_48 = function (index) {
            var nomes = this_48.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_48.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_48 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_48(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        //
        nome = "Alice Pira";
        nomeSocial = "Alice Para";
        genero = "Feminino";
        //
        valor = "345.533.922-11";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.125.225-2";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "919733791";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_49 = function (index) {
            var nomes = this_49.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_49.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_49 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_49(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_50 = function (index) {
            var nomes = this_50.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_50.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_50 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_50(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        //
        nome = "Marcos";
        nomeSocial = "Marcão";
        genero = "Masculino";
        //
        valor = "213.895.995-00";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "22.123.555-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9102103546";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_51 = function (index) {
            var nomes = this_51.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_51.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_51 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_51(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_52 = function (index) {
            var nomes = this_52.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_52.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_52 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_52(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Michel Temer";
        nomeSocial = "Velho";
        genero = "Masculino";
        //
        valor = "345.111.123-05";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "32.333.211-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "9082732131";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Shampoo Clear Men NJR",
        ];
        sliceProdutos = produtos.slice();
        var _loop_53 = function (index) {
            var nomes = this_53.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_53.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_53 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_53(index);
        }
        //
        servico = [
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
        ];
        sliceServico = servico.slice();
        var _loop_54 = function (index) {
            var nomes = this_54.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_54.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_54 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_54(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Dilma Rouseff";
        nomeSocial = " ";
        genero = "Feminino";
        //
        valor = "345.455.554-00";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "53.515.555-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "985613021";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_55 = function (index) {
            var nomes = this_55.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_55.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_55 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_55(index);
        }
        //
        servico = [
            "Corte Social"
        ];
        sliceServico = servico.slice();
        var _loop_56 = function (index) {
            var nomes = this_56.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_56.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_56 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_56(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Maria Kamilly";
        nomeSocial = "Pao";
        genero = "Feminino";
        //
        valor = "203.535.500-15";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "55.092.234-5";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "952145632";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
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
        ];
        sliceProdutos = produtos.slice();
        var _loop_57 = function (index) {
            var nomes = this_57.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_57.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_57 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_57(index);
        }
        //
        servico = [
            "Corte Social",
        ];
        sliceServico = servico.slice();
        var _loop_58 = function (index) {
            var nomes = this_58.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_58.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_58 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_58(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
        nome = "Marlon";
        nomeSocial = "Marlão";
        genero = "Masculino";
        //
        valor = "540.005.522-51";
        date = new Date();
        date.getDate();
        cpf = new cpf_1.default(valor, date);
        //
        cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //
        valor = "45.768.980-1";
        rg = new rg_1.default(valor, date);
        //
        ddd = "12";
        numero = "985747846";
        telefone = new telefone_1.default(ddd, numero);
        //
        produtos = [
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
        ];
        sliceProdutos = produtos.slice();
        var _loop_59 = function (index) {
            var nomes = this_59.produtos.map(function (i) { return (i.nomeProduto); });
            var pegarPreco = this_59.produtos.filter(function (produto) { return produto.nomeProduto == sliceProdutos[index]; }).map(function (i) { return i.precoProduto; }).toString();
            if (nomes.includes(sliceProdutos[index])) {
                var produtoNovo = new produto_1.default(sliceProdutos[index], Number(pegarPreco));
                cliente.getProdutosConsumidos.push(produtoNovo);
            }
        };
        var this_59 = this;
        for (var index = 0; index < sliceProdutos.length; index++) {
            _loop_59(index);
        }
        //
        servico = [
            "Corte Social",
            "Corte Frestyle",
        ];
        sliceServico = servico.slice();
        var _loop_60 = function (index) {
            var nomes = this_60.servicos.map(function (i) { return (i.nomeServico); });
            var pegarPreco = this_60.servicos.filter(function (produto) { return produto.nomeServico == sliceServico[index]; }).map(function (i) { return i.precoServico; }).toString();
            if (nomes.includes(sliceServico[index])) {
                var adicionandoServico = new servico_1.default(sliceServico[index], Number(pegarPreco));
                cliente.getServicosConsumidos.push(adicionandoServico);
            }
        };
        var this_60 = this;
        for (var index = 0; index < sliceServico.length; index++) {
            _loop_60(index);
        }
        ;
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente);
        //
    };
    return ClientesGerados;
}(clientesProntos_1.default));
exports.default = ClientesGerados;
