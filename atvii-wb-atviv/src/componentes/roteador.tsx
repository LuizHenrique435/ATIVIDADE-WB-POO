import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaCliente from "./listaCliente"
import AtualizarCliente from "./atualizarCliente";
import ExcluirCliente from "./excluirCliente";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Cadastro'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-2" botoes={['Cadastro', 'Clientes']} />
        
        if (this.state.tela === 'Cadastro') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="purple lighten-2" seletorView={this.selecionarView}  />
                </>
            )
            
        } if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-2"  seletorView={this.selecionarView}/>
                </>
            )

        } if (this.state.tela === 'AtualizarCliente') {
            return (
               <>
                    {barraNavegacao}
                    <AtualizarCliente tema=" purple lighten-2"  seletorView={this.selecionarView}/>
                </>
            )  
        }if (this.state.tela === 'ExcluirCliente') {
            return (
               <>
                    {barraNavegacao}
                    <ExcluirCliente tema=" purple lighten-2"  seletorView={this.selecionarView}/>
                </>
            )  
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema=" purple lighten-2" seletorView={this.selecionarView}/>
                </>
            )
        }

    }
}