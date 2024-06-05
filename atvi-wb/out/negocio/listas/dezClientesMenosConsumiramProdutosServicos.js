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
var DezClientesMenosConsumiram = /** @class */ (function (_super) {
    __extends(DezClientesMenosConsumiram, _super);
    function DezClientesMenosConsumiram(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    DezClientesMenosConsumiram.prototype.listar = function () {
        console.log("\nOs 10 clientes que menos consumiram produtos/servi\u00E7os:");
        this.clientes.sort(function (a, b) { return (a.getProdutosConsumidos.length + a.getServicosConsumidos.length) - (b.getProdutosConsumidos.length + b.getServicosConsumidos.length); });
        var ordem = 1;
        for (var i = 0; i < Math.min(this.clientes.length, 10); i++) {
            console.log("".concat(ordem, " - ").concat(this.clientes[i].nome));
            ordem++;
        }
    };
    return DezClientesMenosConsumiram;
}(listagem_1.default));
exports.default = DezClientesMenosConsumiram;
