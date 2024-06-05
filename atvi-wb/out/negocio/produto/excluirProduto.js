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
var excluir_1 = __importDefault(require("../excluir"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var ExcluirProdutos = /** @class */ (function (_super) {
    __extends(ExcluirProdutos, _super);
    function ExcluirProdutos(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ExcluirProdutos.prototype.excluir = function () {
        var nome = this.entrada.receberTexto("Por favor informe o Nome do produto que voc\u00EA deseja excluir: ");
        var indice = this.produtos.findIndex(function (produto) { return produto.getNomeProduto === nome; });
        if (indice !== -1) {
            this.produtos.splice(indice, 1);
            console.log("Produto com Nome: ".concat(nome, " foi exclu\u00EDdo com sucesso!"));
        }
        else {
            console.log("Produto com Nome: ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    return ExcluirProdutos;
}(excluir_1.default));
exports.default = ExcluirProdutos;
