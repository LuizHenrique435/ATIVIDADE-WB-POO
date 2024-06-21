/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

import M from 'materialize-css';
import { text } from "stream/consumers";

type props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<props> {
    constructor(props: props | Readonly<props>) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            const elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
            M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"), {});
        });
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map(valor =>
                <li key={valor}><a onClick={(e) => this.props.seletorView(valor, e)} style={{ color: 'white' }}>{valor}</a></li>
            );
            return lista;
        }
    }

    render() {
        const estiloNav = {
            backgroundColor: '#212529'
        };

        const estiloTexto = {
            color: 'white'
        };

        return (
            <>
                <nav style={estiloNav}>
                    <div className="nav-wrapper" style={estiloNav}>
                        <a className="brand-logo" style={estiloTexto}>WB</a>
                        <ul className="right hide-on-med-and-down">
                            {this.gerarListaBotoes()}
                        </ul>
                    </div>
                </nav>
            </>
        );
    }
}
