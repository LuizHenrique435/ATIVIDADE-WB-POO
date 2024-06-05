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
var ServicosProdutosGenerosConsumidos = /** @class */ (function (_super) {
    __extends(ServicosProdutosGenerosConsumidos, _super);
    function ServicosProdutosGenerosConsumidos(clientes, produtos, servicos) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.produtos = produtos;
        _this.servicos = servicos;
        return _this;
    }
    ServicosProdutosGenerosConsumidos.prototype.listar = function () {
        var _this = this;
        console.log('Listagem de produtos/serviços mais consumidos por gênero:');
        var topProdutosFeminino = [];
        var topServicosFeminino = [];
        var topProdutosMasculino = [];
        var topServicosMasculino = [];
        console.log('FEMININO');
        // PRODUTOS FEMININO
        this.produtos.forEach(function (produto) {
            topProdutosFeminino.push({ nome: produto.getNomeProduto, valor: produto.getPrecoProduto, quantidade: 0 });
        });
        topProdutosFeminino.forEach(function (prod) {
            _this.clientes.forEach(function (cliente) {
                cliente.getProdutosConsumidos.forEach(function (prodConsumido) {
                    if (prodConsumido.nomeProduto == prod.nome) {
                        if (cliente.genero.toUpperCase() == 'F' || cliente.genero.toUpperCase() == 'FEMININO') {
                            prod.quantidade = prod.quantidade + 1;
                        }
                    }
                });
            });
        });
        topProdutosFeminino.sort(function (prod1, prod2) { return (prod1.quantidade > prod2.quantidade) ? -1 : 1; });
        console.log("PRODUTOS:");
        var ordemProdFeminino = 1;
        topProdutosFeminino.forEach(function (prod) {
            console.log("".concat(ordemProdFeminino, " - ").concat(prod.nome));
            ordemProdFeminino++;
        });
        // SERVIÇOS FEMININO
        this.servicos.forEach(function (servico) {
            topServicosFeminino.push({ nome: servico.getNomeServico, valor: servico.getPrecoServico, quantidade: 0 });
        });
        topServicosFeminino.forEach(function (serv) {
            _this.clientes.forEach(function (cliente) {
                cliente.getServicosConsumidos.forEach(function (servConsumido) {
                    if (servConsumido.nomeServico == serv.nome) {
                        if (cliente.genero.toUpperCase() == 'F' || cliente.genero.toUpperCase() == 'FEMININO') {
                            serv.quantidade = serv.quantidade + 1;
                        }
                    }
                });
            });
        });
        topServicosFeminino.sort(function (serv1, serv2) { return (serv1.quantidade > serv2.quantidade) ? -1 : 1; });
        console.log("SERVI\u00C7OS:");
        var ordemServFeminino = 1;
        topServicosFeminino.forEach(function (serv) {
            console.log("".concat(ordemServFeminino, " - ").concat(serv.nome));
            ordemServFeminino++;
        });
        // PRODUTOS MASCULINO
        this.produtos.forEach(function (produto) {
            topProdutosMasculino.push({ nome: produto.getNomeProduto, valor: produto.getPrecoProduto, quantidade: 0 });
        });
        topProdutosMasculino.forEach(function (prod) {
            _this.clientes.forEach(function (cliente) {
                cliente.getProdutosConsumidos.forEach(function (prodConsumido) {
                    if (prodConsumido.nomeProduto == prod.nome) {
                        if (cliente.genero.toUpperCase() == 'M' || cliente.genero.toUpperCase() == 'MASCULINO') {
                            prod.quantidade = prod.quantidade + 1;
                        }
                    }
                });
            });
        });
        console.log('MASCULINO');
        topProdutosMasculino.sort(function (prod1, prod2) { return (prod1.quantidade > prod2.quantidade) ? -1 : 1; });
        console.log("PRODUTOS:");
        var ordemProdMasculino = 1;
        topProdutosMasculino.forEach(function (prod) {
            console.log("".concat(ordemProdMasculino, " - ").concat(prod.nome));
            ordemProdMasculino++;
        });
        // SERVIÇOS FEMININO
        this.servicos.forEach(function (servico) {
            topServicosMasculino.push({ nome: servico.getNomeServico, valor: servico.getPrecoServico, quantidade: 0 });
        });
        topServicosMasculino.forEach(function (serv) {
            _this.clientes.forEach(function (cliente) {
                cliente.getServicosConsumidos.forEach(function (servConsumido) {
                    for (var indexServico = 0; indexServico < topServicosMasculino.length; indexServico++) {
                        if (servConsumido.nomeServico == serv.nome) {
                            if (cliente.genero.toUpperCase() == 'm' || cliente.genero.toUpperCase() == 'masculino') {
                                serv.quantidade = serv.quantidade + 1;
                            }
                        }
                    }
                });
            });
        });
        topServicosMasculino.sort(function (serv1, serv2) { return (serv1.quantidade > serv2.quantidade) ? -1 : 1; });
        console.log("SERVI\u00C7OS:");
        var ordemServMasculino = 1;
        topServicosMasculino.forEach(function (serv) {
            console.log("".concat(ordemServMasculino, " - ").concat(serv.nome));
            ordemServMasculino++;
        });
    };
    return ServicosProdutosGenerosConsumidos;
}(listagem_1.default));
exports.default = ServicosProdutosGenerosConsumidos;
