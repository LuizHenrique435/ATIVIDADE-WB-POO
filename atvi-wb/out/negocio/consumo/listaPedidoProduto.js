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
var ListaPedidoProduto = /** @class */ (function (_super) {
    __extends(ListaPedidoProduto, _super);
    function ListaPedidoProduto(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListaPedidoProduto.prototype.listar = function () {
        console.log("\nLista de todos os pedidos de produtos por cliente:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome do cliente: ".concat(cliente.nome));
            for (var index = 0; index < cliente.getProdutosConsumidos.length; index++) {
                console.log("".concat(index, " - Produto consumido: ").concat(cliente.getProdutosConsumidos[index].getNomeProduto));
            }
        });
    };
    return ListaPedidoProduto;
}(listagem_1.default));
exports.default = ListaPedidoProduto;
