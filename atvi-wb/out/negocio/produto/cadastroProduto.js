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
var entrada_1 = __importDefault(require("../../io/entrada"));
var produto_1 = __importDefault(require("../../modelo/produto"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroProduto = /** @class */ (function (_super) {
    __extends(CadastroProduto, _super);
    function CadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroProduto.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do produto");
        var nomeProduto = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        var precoProduto = this.entrada.receberNumero("Por favor informe o valor do produto: ");
        var produto = new produto_1.default(nomeProduto, precoProduto);
        this.produtos.push(produto);
    };
    CadastroProduto.prototype.gerarProntos = function () {
        var produtos = [
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
        var preco = [
            50.00,
            75.00,
            120.00,
            90.00,
            110.00,
            85.00,
            95.00,
            130.00,
            105.00,
            70.00,
            140.00,
            100.00,
            80.00,
            115.00,
            125.00,
            60.00,
            135.00,
            145.00,
            55.00,
            65.00
        ];
        var sliceProdutos = produtos.slice();
        var sliceProdutosPreco = preco.slice();
        for (var index = 0; index < sliceProdutos.length; index++) {
            var adicionandoProdutos = new produto_1.default(sliceProdutos[index], sliceProdutosPreco[index]);
            this.produtos.push(adicionandoProdutos);
        }
    };
    return CadastroProduto;
}(cadastro_1.default));
exports.default = CadastroProduto;
