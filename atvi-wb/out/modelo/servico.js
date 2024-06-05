"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nomeServico, precoServico) {
        this.quantidadeServico = Number[0];
        this.nomeServico = nomeServico;
        this.precoServico = precoServico;
    }
    Object.defineProperty(Servico.prototype, "getNomeServico", {
        get: function () {
            return this.nomeServico;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getPrecoServico", {
        get: function () {
            return this.precoServico;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
