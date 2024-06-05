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
var servico_1 = __importDefault(require("../../modelo/servico"));
var cadastro_1 = __importDefault(require("../cadastro"));
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do servico");
        var nomeServico = this.entrada.receberTexto("Por favor informe o nome do servico: ");
        var precoServico = this.entrada.receberNumero("Por favor informe o valor do servico: ");
        var servico = new servico_1.default(nomeServico, precoServico);
        this.servicos.push(servico);
    };
    CadastroServico.prototype.gerarProntos = function () {
        var servicos = [
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
        var preco = [
            250.00,
            750.0,
            120.00,
            100.00,
            15.00,
            20.00,
            75.00,
            250.00,
            20.00
        ];
        var sliceServico = servicos.slice();
        var sliceServicoPreco = preco.slice();
        for (var index = 0; index < sliceServico.length; index++) {
            var adicionarServico = new servico_1.default(sliceServico[index], Number(sliceServicoPreco[index]));
            this.servicos.push(adicionarServico);
        }
    };
    return CadastroServico;
}(cadastro_1.default));
exports.default = CadastroServico;
