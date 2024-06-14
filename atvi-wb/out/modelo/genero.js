"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Genero = /** @class */ (function () {
    function Genero(genero) {
        this.genero = genero;
    }
    Object.defineProperty(Genero.prototype, "getGenero", {
        get: function () {
            return this.genero;
        },
        enumerable: false,
        configurable: true
    });
    return Genero;
}());
exports.default = Genero;
