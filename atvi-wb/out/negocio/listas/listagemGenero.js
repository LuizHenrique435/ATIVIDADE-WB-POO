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
var ListagemClientesGenero = /** @class */ (function (_super) {
    __extends(ListagemClientesGenero, _super);
    function ListagemClientesGenero(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    ListagemClientesGenero.prototype.listar = function () {
        var mulheres = this.clientes.filter(function (cliente) { return cliente.genero === "Feminino"; });
        var homens = this.clientes.filter(function (cliente) { return cliente.genero === "Masculino"; });
        console.log("\nLista dos clientes do sexo feminino:");
        mulheres.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("G\u00EAnero: " + cliente.genero);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\nLista dos clientes do sexo masculino:");
        homens.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            console.log("Nome social: " + cliente.nomeSocial);
            console.log("G\u00EAnero: " + cliente.genero);
            console.log("CPF: " + cliente.getCpf.getValor);
            console.log("--------------------------------------");
        });
        console.log("\n");
    };
    return ListagemClientesGenero;
}(listagem_1.default));
exports.default = ListagemClientesGenero;
