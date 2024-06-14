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
var comprar_1 = __importDefault(require("../comprar"));
var ComprarServico = /** @class */ (function (_super) {
    __extends(ComprarServico, _super);
    function ComprarServico(clientes, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.servicos = servicos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    ComprarServico.prototype.comprar = function () {
        var cpf = this.entrada.receberTexto('Por favor informe o CPF de quem irá realizar a compra: ');
        for (var index = 0; index < this.clientes.length; index++) {
            if (this.clientes[index].getCpf.getValor == cpf) {
                var operacao = true;
                while (operacao) {
                    console.log("--------------------------------------");
                    console.log("Op\u00E7\u00F5es: ");
                    console.log("1 - Pedido de servico");
                    console.log("0 - Sair");
                    var opcao = this.entrada.receberNumero('Escolha abaixo o que você quer fazer: ');
                    switch (opcao) {
                        case 1:
                            for (var indexServicos = 0; indexServicos < this.servicos.length; indexServicos++) {
                                console.log(indexServicos + " - " + this.servicos[indexServicos].getNomeServico);
                            }
                            var servico = this.entrada.receberNumero('Insira o número do serviço desejado: ');
                            this.clientes[index].getServicosConsumidos.push(this.servicos[servico]);
                            break;
                        case 0:
                            operacao = false;
                            break;
                    }
                }
            }
        }
    };
    return ComprarServico;
}(comprar_1.default));
exports.default = ComprarServico;
