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
var editar_1 = __importDefault(require("../editar"));
var entrada_1 = __importDefault(require("../../io/entrada"));
var rg_1 = __importDefault(require("../../modelo/rg"));
var telefone_1 = __importDefault(require("../../modelo/telefone"));
var EditarClientes = /** @class */ (function (_super) {
    __extends(EditarClientes, _super);
    function EditarClientes(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    EditarClientes.prototype.editar = function () {
        var cpf = this.entrada.receberTexto("Por favor informe o CPF do cliente que voc\u00EA deseja alterar: ");
        var editarCliente = this.clientes.find(function (cliente) { return cliente.getCpf.getValor === cpf; });
        if (editarCliente) {
            var opcoes = "\nEscolha uma op\u00E7\u00E3o:\n1 - Alterar nome\n2 - Alterar nome social\n3 - Alterar g\u00EAnero\n4 - Alterar rg\n5 - Alterar telefone\n0 - Sair\n";
            var opcaoEscolhida = this.entrada.receberNumero(opcoes);
            switch (opcaoEscolhida) {
                case 1:
                    var nome = this.entrada.receberTexto("Informe o novo nome do cliente: ");
                    editarCliente.nome = nome;
                    console.log("Nome alterado com sucesso!");
                    break;
                case 2:
                    var nomeSocial = this.entrada.receberTexto("Informe o novo nome social do cliente: ");
                    editarCliente.nomeSocial = nomeSocial;
                    console.log("Nome social alterado com sucesso!");
                    break;
                case 3:
                    var genero = this.entrada.receberTexto("Informe o novo g\u00EAnero do cliente: ");
                    editarCliente.genero = genero;
                    console.log("G\u00EAnero alterado com sucesso!");
                    break;
                case 4:
                    var valorRg = this.entrada.receberTexto("Por favor informe o n\u00FAmero do rg: ");
                    var dataRg = this.entrada.receberTexto("Por favor informe a data de emiss\u00E3o do rg, no padr\u00E3o dd/mm/yyyy: ");
                    var partesDataRg = dataRg.split('/');
                    var anoRg = new Number(partesDataRg[2].valueOf()).valueOf();
                    var mesRg = new Number(partesDataRg[1].valueOf()).valueOf();
                    var diaRg = new Number(partesDataRg[0].valueOf()).valueOf();
                    var dataEmissaoRg = new Date(anoRg, mesRg, diaRg);
                    var rgs = new rg_1.default(valorRg, dataEmissaoRg);
                    editarCliente.getRgs[0] = rgs;
                    console.log("RG alterado com sucesso!");
                    break;
                case 5:
                    var ddd = this.entrada.receberTexto("Por favor informe o DDD: ");
                    var numero = this.entrada.receberTexto("Por favor informe o n\u00FAmero do telefone: ");
                    var telefone = new telefone_1.default(ddd, numero);
                    editarCliente.getTelefones[0] = telefone;
                    console.log("Telefone alterado com sucesso!");
                    break;
                case 0:
                    console.log("Saindo da edi\u00E7\u00E3o de clientes...");
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida!");
            }
            this.clientes[this.clientes.indexOf(editarCliente)] = editarCliente;
        }
        else {
            console.log("Cliente n\u00E3o encontrado!");
        }
    };
    return EditarClientes;
}(editar_1.default));
exports.default = EditarClientes;
