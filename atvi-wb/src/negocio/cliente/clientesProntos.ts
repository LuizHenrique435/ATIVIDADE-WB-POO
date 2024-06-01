import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import ClientesProntos from "../clientesProntos";

export default class ClientesGerados extends ClientesProntos{
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public gerarProntos(): void {
        let nome = "Thyago Augusto"
        let nomeSocial = "Thygas"
        let genero = "Masculino"
        //
        let valor = "123.323.123-92";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        //
        let cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "37.376.237-5"
        let rg = new RG(valor, date)
        //
        let ddd = "12"
        let numero = "992343454"
        let telefone = new Telefone(ddd, numero)
        //
        let produtos = [
            "Lixa",
            "cotonetes",
            "Shampoo Clear Men de cacau"
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        let servico = [
            "corte de cabelo",
            "modelagem e corte de barba",
            "tratamento para quedas de cabelo"]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Eliezer"
        nomeSocial = "Eli"
        genero = "Masculino"
        //
        valor = "112.112.22-21";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "11.111.111-1"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "11111111"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "Sabonete DOVE",
            "Shampoo Clear Men de cacau",
            "Fio dental",
            "Lenços",
            "sabonetes antiacne",
            "protetor solar em spray",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo",
            "modelagem e corte de barba"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Mariana Veloso"
        nomeSocial = "Velvel"
        genero = "Feminino"
        //
        valor = "222.222.22-22";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "22.22.222-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "22222222"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "Sabonete DOVE",
            "Fio dental",
            "Creme Pantene",
            "cotonetes",
            "Escova de dente Colgate",
            "sabonetes antiacne",
            "protetor solar em spray",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo",
            "redução de medidas",
            "venda de produtos especializados"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Jorge Almeida"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "333.333.333-33";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "33.33.333-3"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "3333333333"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Fio dental",
            "Creme Pantene",
            "Escova de dente Colgate",
            "sabonetes antiacne",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo"]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Gabriel"
        nomeSocial = "Gabison"
        genero = "Masculino"
        //
        valor = "444.444.444-44";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "44.44.444-4"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "4444444444"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Fio dental",
            "Lixa",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Rafaela"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "555.555.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Ruana Alvez"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "666.666.666-66";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "66.66.66-6"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "666666666666"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "venda de produtos especializados",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Frida Jorgina"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "777.777.777-77";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "77.77.777-7"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "777777777777"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "venda de produtos especializados",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Gamora"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "888.888.888-88";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "88.88.888-8"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "888888888888"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Lixa",
            "Lenços",
            "cotonetes",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }

        //
        servico = [
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Thanos"
        nomeSocial = "Inevitável"
        genero = "Masculino"
        //
        valor = "777.342.123-993";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "123.123.123-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "213123123"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "tratamento para quedas de cabelo",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Vin Diesel"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "400.289.225-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Antisséptico bucal",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Thor"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "123.432.522-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Pente",
            "Creme de barbear",
            "Desodorante Old Spice",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "tratamento para quedas de cabelo",
            "corte de cabelo",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Sion"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "125.235.998-66";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "corte de cabelo",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Pimon"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "123.687.345-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Pente",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "corte de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Sona"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "444.234.123-23";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Fio dental",
            "Pente",
            "Antisséptico bucal",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "aplicação de botox",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Paula Santina"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "432.645.321-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Raiden"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "353.637.245-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Pente",
            "Lixa",
            "Lenços",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        nome = "Leona"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "978.123.435-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Lixa",
            "Lenços",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "tratamento para quedas de cabelo",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Pogga Chu"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "324.122.111-43";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Escova de dente Colgate",
            "Fio dental",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "aplicação de botox",
            "tratamento para emagrecimento",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Gweny"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "546.555.554-53";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Ash"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "345.535.222-52";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Esmalte purpuro",
            "Lixa",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Mandraxa"
        nomeSocial = "Mandraka"
        genero = "Feminino"
        //
        valor = "333.234.011-25";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Paolo Rubens"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "782.213.342-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Donald"
        nomeSocial = "Quack"
        genero = "Masculino"
        //
        valor = "324.567.215-15";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Alice"
        nomeSocial = " "
        genero = "Feminino"
        //
        valor = "345.533.922-11";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        //
        nome = "Bambi"
        nomeSocial = "Cervo"
        genero = "Masculino"
        //
        valor = "213.555.995-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "tratamento para quedas de cabelo",
            "remoção  de  rugas",
            "modelagem e corte de barba",
            "corte de cabelo",
            "remoção  de manchas na pele",
            "aplicação de botox",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Michel"
        nomeSocial = "Velho"
        genero = "Masculino"
        //
        valor = "345.111.123-05";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados",
            "redução de medidas"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Steva"
        nomeSocial = "Minecraft"
        genero = "Feminino"
        //
        valor = "345.455.554-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
            "Escova de dente Colgate",
            "Fio dental",
            "Cortador para unhas",
            "Pente",
            "Esmalte purpuro",
            "Antisséptico bucal",
            "Gillette prestobarba",
            "Creme de barbear",
            "Desodorante Old Spice",
            "Lixa",
            "Lenços",
            "sabonetes para peles oleosas",
            "cotonetes",
            "protetor solar em spray",
            "sabonetes antiacne"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "venda de produtos especializados"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Chitao"
        nomeSocial = "Choro Choro"
        genero = "Masculino"
        //
        valor = "203.535.553-15";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme Pantene",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men de cacau",
            "Shampoo Clear Men de cacau",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "corte de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }

        };

        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
        nome = "Goldo"
        nomeSocial = " "
        genero = "Masculino"
        //
        valor = "540.005.522-51";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.55.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "55555555555"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Lixa",
            "cotonetes",
            "Shampoo Clear Men de cacau"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nomeProduto))
            let pegarPreco = this.produtos.filter(produto => produto.nomeProduto == sliceProdutos[index]).map(i => { return i.precoProduto }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        //
        servico = [
            "remoção  de  rugas",
            "corte de cabelo",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nomeServico))
            let pegarPreco = this.servicos.filter(produto => produto.nomeServico == sliceServico[index]).map(i => { return i.precoServico }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        //
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
        //
    }
}