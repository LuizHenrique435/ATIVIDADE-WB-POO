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
var listagem_1 = __importDefault(require("../listagem"));
var ServicosProdutosGeraisConsumidos = /** @class */ (function (_super) {
    __extends(ServicosProdutosGeraisConsumidos, _super);
    function ServicosProdutosGeraisConsumidos(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    ServicosProdutosGeraisConsumidos.prototype.listar = function () {
        var _this = this;
        console.log('Listagem de produtos/serviços gerais mais consumidos:');
        var topProdutos = [];
        var topServicos = [];
        // PRODUTOS
        this.produtos.forEach(function (produto) {
            topProdutos.push(produto);
        });
        topProdutos.forEach(function (prod) {
            var qtdProduto = 0;
            _this.clientes.forEach(function (cliente) {
                cliente.getProdutosConsumidos.forEach(function (prodConsumido) {
                    for (var indexProduto = 0; indexProduto < topProdutos.length; indexProduto++) {
                        if (prodConsumido.nomeProduto == prod.nomeProduto) {
                            qtdProduto += 1;
                        }
                    }
                });
            });
            prod.quantidadeProduto = qtdProduto;
        });
        topProdutos.sort(function (prod1, prod2) { return (prod1.quantidadeProduto > prod2.quantidadeProduto) ? -1 : 1; });
        console.log("PRODUTOS:");
        var ordemProd = 1;
        topProdutos.forEach(function (prod) {
            console.log("".concat(ordemProd, " - ").concat(prod.nomeProduto));
            ordemProd++;
        });
        // SERVIÇOS
        this.servicos.forEach(function (servico) {
            topServicos.push(servico);
        });
        topServicos.forEach(function (serv) {
            var qtdServico = 0;
            _this.clientes.forEach(function (cliente) {
                cliente.getServicosConsumidos.forEach(function (servConsumido) {
                    for (var indexServico = 0; indexServico < topServicos.length; indexServico++) {
                        if (servConsumido.nomeServico == serv.nomeServico) {
                            qtdServico += 1;
                        }
                    }
                });
            });
            serv.quantidadeServico = qtdServico;
        });
        topServicos.sort(function (serv1, serv2) { return (serv1.quantidadeServico > serv2.quantidadeServico) ? -1 : 1; });
        console.log("SERVI\u00C7OS:");
        var ordemServ = 1;
        topServicos.forEach(function (serv) {
            console.log("".concat(ordemServ, " - ").concat(serv.nomeServico));
            ordemServ++;
        });
    };
    return ServicosProdutosGeraisConsumidos;
}(listagem_1.default));
exports.default = ServicosProdutosGeraisConsumidos;
