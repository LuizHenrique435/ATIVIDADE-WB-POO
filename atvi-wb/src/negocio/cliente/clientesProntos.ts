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
        let nome = "Luiz"
        let nomeSocial = "LZ D160"
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
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE"
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
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE"]
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
        nome = "Erik Zanneti"
        nomeSocial = "Pincher"
        genero = "Masculino"
        //
        valor = "012.012.52-21";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "52.777.451-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "985471234"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
            "Sabonete Intimo"
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
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",]
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
        nome = "Felipe Silva"
        nomeSocial = "Felipe Pinga"
        genero = "Masculino"
        //
        valor = "277.522.22-22";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "78.415.415-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "965412354"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",]
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
        nome = "Jorge Picasso"
        nomeSocial = "Jorginho"
        genero = "Masculino"
        //
        valor = "223.338.373-33";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.339.333-3"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "985231234"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
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
            "Corte Social",]
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
        nomeSocial = "Gabigol"
        genero = "Masculino"
        //
        valor = "444.454.777-44";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "44.454.464-4"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "999996541"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Pasta de Dente Colgate",
            "Fio dental",
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
           "Corte Social",
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
        nome = "Rafaela Santos"
        nomeSocial = "NJRS"
        genero = "Feminino"
        //
        valor = "555.225.555-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.155.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "945213012"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
            "Sabonete Intimo"
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
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Neymar Junior"
        nomeSocial = "NJR"
        genero = "Masculino"
        //
        valor = "226.366.136-66";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "68.166.866-6"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "987452103"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
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
        nome = "Kaua Dezidera"
        nomeSocial = "Dezidera"
        genero = "Masculino"
        //
        valor = "777.777.777-77";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "77.577.777-7"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "9852002148"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente "
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
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
        nome = "Edson Arantes do Nascimento"
        nomeSocial = "Pelé"
        genero = "Masculino"
        //
        valor = "000.888.888-88";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "88.088.888-8"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "9852363214"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve"
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
           "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Messi"
        nomeSocial = "GOAT"
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
        numero = "9213123123"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social"
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
        nome = "Cristiano Ronaldo"
        nomeSocial = "ROBOZÃO"
        genero = "Masculino"
        //
        valor = "400.289.225-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.500.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "9665400213"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
            "Sabonete Intimo"
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
            "Corte Social",
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
        nome = "Paula Tejando"
        nomeSocial = "Paulinha"
        genero = "Feminino"
        //
        valor = "123.432.522-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.551.005-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "963214561"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
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
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "BusLigt"
        nomeSocial = "Parceiro do Yudi"
        genero = "Masculino"
        //
        valor = "125.235.998-66";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "77.545.111-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "985461313"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
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
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Diego"
        nomeSocial = "Maradona"
        genero = "Masculino"
        //
        valor = "123.687.345-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.000.995-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "999996200"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
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
            "Corte Social",
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
        nome = "Marta"
        nomeSocial = "Marta"
        genero = "Feminino"
        //
        valor = "777.234.123-23";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.122.567-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "977741114"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
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
        nome = "Paulo Dybala"
        nomeSocial = "Dychiclete"
        genero = "Masculino"
        //
        valor = "477.145.321-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "66.123.545-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "912112221"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
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
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Elon Musk"
        nomeSocial = "Tesla"
        genero = "Masculino"
        //
        valor = "353.630.005-55";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "23.124.655-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "963210231"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
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
        nome = "Erik Hideki"
        nomeSocial = "Japones"
        genero = "Masculino"
        //
        valor = "978.123.123-02";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "34.678.987-0"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "955220011"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
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
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Endrick"
        nomeSocial = "Joia"
        genero = "Masculino"
        //
        valor = "324.122.111-43";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "33.355.535-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "98522110"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
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
        nome = "Estevão"
        nomeSocial = "Palito"
        genero = "Masculino"
        //
        valor = "546.555.224-53";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.551.545-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "922031023"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
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
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Alisha Lemaannn"
        nomeSocial = "DG"
        genero = "Feminino"
        //
        valor = "345.535.222-52";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.531.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "945120213"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
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
           "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Rebeca"
        nomeSocial = "Mucilon"
        genero = "Feminino"
        //
        valor = "777.234.011-25";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.123.456-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "985236190"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
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
            "Corte Social",
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
        nome = "Fernando Massanori"
        nomeSocial = "Massa"
        genero = "Masculino"
        //
        valor = "782.213.342-12";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "45.741.321-0"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "963254152"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "MC DonaIDS"
        nomeSocial = "BK"
        genero = "Masculino"
        //
        valor = "324.777.215-15";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.789.123-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "9875610963"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Alice Pira"
        nomeSocial = "Alice Para"
        genero = "Feminino"
        //
        valor = "345.533.922-11";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.125.225-2"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "919733791"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
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
            "Corte Social",
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
        nome = "Marcos"
        nomeSocial = "Marcão"
        genero = "Masculino"
        //
        valor = "213.895.995-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "22.123.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "9102103546"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Michel Temer"
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
        valor = "32.333.211-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "9082732131"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Shampoo Clear Men NJR",
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
            "Tratamento de Pele",
            "Tratamento de Calvice",
            "Tratamento para Chulé",
            "Corte Social",
            "Corte Frestyle",
            "Depilação Intima",
            "Desing de Sobrançelhas",
            "Massagem Corporal",
            "Massagem Intima"
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
        nome = "Dilma Rouseff"
        nomeSocial = "Pix"
        genero = "Feminino"
        //
        valor = "345.455.554-00";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "53.515.555-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "985613021"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
            "Hidratante",
            "Protetor Solar ft 100",
            "Sabonete Intimo"
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
           "Corte Social"
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
        nome = "Maria Kamilly"
        nomeSocial = "Pao"
        genero = "Feminino"
        //
        valor = "203.535.500-15";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "55.092.234-5"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "952145632"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Creme de Barbear",
            "Creme de Cabelo",
            "Sabonete DOVE",
            "Sabonete LUX",
            "Condicionador Clear Men CR7",
            "Shampoo Clear Men NJR",
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
            "Pente ",
            "Esmalte Vermelho",
            "Antisséptico bucal",
            "Gillette Maquina 3",
            "Shampoo Elseve",
            "Desodorante Old Spice Lenha",
            "Rexona Clinical",
            "Lenços Umidecido",
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
            "Corte Social",
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
        nome = "Marlon"
        nomeSocial = "Marlão"
        genero = "Masculino"
        //
        valor = "540.005.522-51";
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        //
        cliente = new Cliente(nome, nomeSocial, genero, cpf)
        //
        valor = "45.768.980-1"
        rg = new RG(valor, date)
        //
        ddd = "12"
        numero = "985747846"
        telefone = new Telefone(ddd, numero)
        //
        produtos = [
            "Pasta de Dente Colgate",
            "Fio dental",
            "Cortador de Unhas",
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
            "Corte Social",
            "Corte Frestyle",
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