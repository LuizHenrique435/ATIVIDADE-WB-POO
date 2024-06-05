"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Produto = /** @class */ (function () {
    function Produto(nomeProduto, precoProduto) {
        this.quantidadeProduto = Number[0];
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
    }
    Object.defineProperty(Produto.prototype, "getNomeProduto", {
        get: function () {
            return this.nomeProduto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "getPrecoProduto", {
        get: function () {
            return this.precoProduto;
        },
        enumerable: false,
        configurable: true
    });
    return Produto;
}());
exports.default = Produto;
