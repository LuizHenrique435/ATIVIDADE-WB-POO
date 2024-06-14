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
var EditarServico = /** @class */ (function (_super) {
    __extends(EditarServico, _super);
    function EditarServico(servicos) {
        var _this = _super.call(this) || this;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    EditarServico.prototype.editar = function () {
        var nome = this.entrada.receberTexto("Por favor informe o nome do servico que voc\u00EA deseja alterar: ");
        var editarServico = this.servicos.find(function (servico) { return servico.getNomeServico === nome; });
        if (editarServico) {
            var opcoes = "\nEscolha uma op\u00E7\u00E3o:\n1 - Alterar nome\n2 - Alterar pre\u00E7o\n0 - Sair\n";
            var opcaoEscolhida = this.entrada.receberNumero(opcoes);
            switch (opcaoEscolhida) {
                case 1:
                    var nomeServico = this.entrada.receberTexto("Informe o novo nome do servico: ");
                    editarServico.nomeServico = nomeServico;
                    console.log("Nome alterado com sucesso!");
                    break;
                case 2:
                    var precoServico = this.entrada.receberNumero("Por favor informe o novo valor do servico: ");
                    editarServico.precoServico = precoServico;
                    console.log("Pre\u00E7o alterado com sucesso!");
                    break;
                case 0:
                    console.log("Saindo da edi\u00E7\u00E3o de servicos...");
                    break;
                default:
                    console.log("Op\u00E7\u00E3o inv\u00E1lida!");
            }
            this.servicos[this.servicos.indexOf(editarServico)] = editarServico;
        }
        else {
            console.log("Servico n\u00E3o encontrado!");
        }
    };
    return EditarServico;
}(editar_1.default));
exports.default = EditarServico;
