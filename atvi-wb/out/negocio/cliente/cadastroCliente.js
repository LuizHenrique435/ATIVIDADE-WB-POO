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
var cliente_1 = __importDefault(require("../../modelo/cliente"));
var cpf_1 = __importDefault(require("../../modelo/cpf"));
var cadastro_1 = __importDefault(require("../cadastro"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var CadastroCliente = /** @class */ (function (_super) {
    __extends(CadastroCliente, _super);
    function CadastroCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroCliente.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do cliente");
        //Nome
        var nome = this.entrada.receberTexto("Por favor informe o nome do cliente: ");
        var nomeSocial = this.entrada.receberTexto("Por favor informe o nome social do cliente: ");
        //Genero
        var genero = this.entrada.receberTexto("Por favor informe o seu g\u00EAnero, no padr\u00E3o Feminino/Masculino: ");
        //CPF
        var valor = this.entrada.receberTexto("Por favor informe o n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var cliente = new cliente_1.default(nome, nomeSocial, genero, cpf);
        //RG
        var valorRg = this.entrada.receberTexto("Por favor informe o n\u00FAmero do rg: ");
        var dataRg = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
        var partesDataRg = dataRg.split('/');
        var anoRg = new Number(partesDataRg[2].valueOf()).valueOf();
        var mesRg = new Number(partesDataRg[1].valueOf()).valueOf();
        var diaRg = new Number(partesDataRg[0].valueOf()).valueOf();
        var dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
        var rgs = new rg_1.default(valorRg, dataEmissaoRg);
        cliente.getRgs.push(rgs);
        //Telefone
        var ddd = this.entrada.receberTexto("Por favor informe o DDD: ");
        var numero = this.entrada.receberTexto("Por favor informe o n\u00FAmero do telefone: ");
        var telefone = new telefone_1.default(ddd, numero);
        cliente.getTelefones.push(telefone);
        //Cadastro cliente
        this.clientes.push(cliente);
        console.log("\nCadastro conclu\u00EDdo :)\n");
    };
    return CadastroCliente;
}(cadastro_1.default));
exports.default = CadastroCliente;
