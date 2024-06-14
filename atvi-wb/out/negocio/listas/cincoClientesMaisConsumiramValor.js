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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var listagem_1 = __importDefault(require("../listagem"));
var CincoClientesMaisConsumiramValor = /** @class */ (function (_super) {
    __extends(CincoClientesMaisConsumiramValor, _super);
    function CincoClientesMaisConsumiramValor(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    CincoClientesMaisConsumiramValor.prototype.listar = function () {
        console.log("\nOs 5 clientes que mais consumiram em valor:");
        var produtos = __spreadArray([], this.produtos, true);
        var servicos = __spreadArray([], this.servicos, true);
        this.clientes.forEach(function (cliente) {
            var precoPedido = 0;
            cliente.getProdutosConsumidos.forEach(function (prodConsumido) {
                var produto = produtos.find(function (item) { return item.nomeProduto === prodConsumido.nomeProduto; });
                if (produto) {
                    precoPedido += produto.precoProduto;
                }
            });
            cliente.getServicosConsumidos.forEach(function (servConsumido) {
                var servico = servicos.find(function (item) { return item.nomeServico === servConsumido.nomeServico; });
                if (servico) {
                    precoPedido += servico.precoServico;
                }
            });
            cliente.precoPedido = precoPedido;
        });
        this.clientes.sort(function (cliente1, cliente2) { return (cliente1.precoPedido > cliente2.precoPedido) ? -1 : 1; });
        var ordemPedido = 1;
        for (var i = 0; i < Math.min(this.clientes.length, 5); i++) {
            var cliente = this.clientes[i];
            console.log("".concat(ordemPedido, " - ").concat(cliente.nome, ": ").concat(cliente.precoPedido));
            ordemPedido++;
        }
    };
    return CincoClientesMaisConsumiramValor;
}(listagem_1.default));
exports.default = CincoClientesMaisConsumiramValor;
