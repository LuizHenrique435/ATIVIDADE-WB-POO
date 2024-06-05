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
var excluir_1 = __importDefault(require("../excluir"));
var ExcluirClientes = /** @class */ (function (_super) {
    __extends(ExcluirClientes, _super);
    function ExcluirClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ExcluirClientes.prototype.excluir = function () {
        var cpf = this.entrada.receberTexto("Por favor informe o CPF do Cliente que voc\u00EA deseja excluir: ");
        var indice = this.clientes.findIndex(function (cliente) { return cliente.getCpf.getValor === cpf; });
        if (indice !== -1) {
            this.clientes.splice(indice, 1);
            console.log("Cliente com CPF: ".concat(cpf, " foi exclu\u00EDdo com sucesso!"));
        }
        else {
            console.log("Cliente com CPF: ".concat(cpf, " n\u00E3o encontrado."));
        }
    };
    return ExcluirClientes;
}(excluir_1.default));
exports.default = ExcluirClientes;
