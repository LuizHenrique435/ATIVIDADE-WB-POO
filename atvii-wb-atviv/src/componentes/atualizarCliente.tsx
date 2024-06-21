import React, { Component, ChangeEvent, FormEvent } from "react";
import M from "materialize-css"; 
import { Button } from 'react-bootstrap';

type Props = {
    tema: string;
    seletorView: Function;
};

type State = {
    id: string;
    nome: string;
    sobrenome: string;
    email: string;
    endereco: {
        id: string;
        estado: string;
        cidade: string;
        rua: string;
        numero: string;
    };
    telefones: {
        id: string;
        ddd: string;
        numero: string;
    }[];
    telefoneSelecionado: number | null;
};

export default class AtualizarCliente extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: '',
            nome: '',
            sobrenome: '',
            email: '',
            endereco: {
                id: '',
                estado: '',
                cidade: '',
                rua: '',
                numero: ''
            },
            telefones: [{
                id: '',
                ddd: '',
                numero: ''
            }],
            telefoneSelecionado: null,
        };

        this.capturarCampo = this.capturarCampo.bind(this);
        this.submeterFormulario = this.submeterFormulario.bind(this);
        this.capturarId = this.capturarId.bind(this);
        this.capturarEndereco = this.capturarEndereco.bind(this);
        this.capturarTelefone = this.capturarTelefone.bind(this);
        this.adicionarTelefone = this.adicionarTelefone.bind(this);
        this.removerTelefone = this.removerTelefone.bind(this);
    }

    capturarCampo(event: ChangeEvent<HTMLInputElement>) {
        const { id, value } = event.target;
        const newState: unknown = {
            ...this.state,
            [id]: value
        };
        this.setState(newState as Pick<State, keyof State>);
    }
    

    capturarId(event: ChangeEvent<HTMLInputElement>) {
        this.setState({ id: event.target.value });
    }

    capturarEndereco(event: ChangeEvent<HTMLInputElement>) {
        const { endereco } = this.state;
        this.setState({
            endereco: {
                ...endereco,
                [event.target.id]: event.target.value
            }
        });
    }

    capturarTelefone(event: ChangeEvent<HTMLInputElement>, index: number) {
        const { telefones } = this.state;
        const newTelefones = [...telefones];
        newTelefones[index][event.target.id.split("-")[0]] = event.target.value;
        this.setState({ telefones: newTelefones });
    }

    adicionarTelefone() {
        this.setState(prevState => ({
            telefones: [...prevState.telefones, { id: '', ddd: '', numero: '' }]
        }));
    }

    removerTelefone(index: number) {
        this.setState(prevState => ({
            telefones: prevState.telefones.filter((telefone, i) => i !== index)
        }));
    }

    async submeterFormulario(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const { id, nome, sobrenome, email, endereco, telefones } = this.state;
        try {
            const response = await fetch('http://localhost:32832/cliente/atualizar', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id, nome, sobrenome, email, endereco, telefones })
            });

            if (response.ok) {
                M.toast({ html: 'Dados do cliente atualizados com sucesso!' });
                this.setState({ id: '', nome: '', sobrenome: '', email: '', endereco: { id: '', estado: '', cidade: '', rua: '', numero: '' }, telefones: [{ id: '', ddd: '', numero: '' }] });
            } else {
                throw new Error('Erro ao atualizar dados do cliente!');
            }
        } catch (error) {
            M.toast({ html: error.message });
            console.error("Failed to update client data:", error);
        }
    }

    componentDidMount() {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }

    render() {
        let estilo = `collection-item active ${this.props.tema}`;

        return (
            <>
              
                <div className="container center-align">
                    <h5 className="text">Atualizar Cliente</h5>

                    <div className="row">
                        <form className="col s12" onSubmit={this.submeterFormulario}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={this.capturarId} value={this.state.id} id="id" type="text" className="validate" />
                                    <label htmlFor="id" className={this.state.id ? "active" : ""}>ID do Cliente</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input onChange={this.capturarCampo} value={this.state.nome} id="nome" type="text" className="validate" />
                                    <label htmlFor="nome" className={this.state.nome ? "active" : ""}>Nome</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarCampo} value={this.state.sobrenome} id="sobrenome" type="text" className="validate" />
                                    <label htmlFor="sobrenome" className={this.state.sobrenome ? "active" : ""}>Nome Social</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarCampo} value={this.state.email} id="email" type="email" className="validate" />
                                    <label htmlFor="email" className={this.state.email ? "active" : ""}>Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarEndereco} value={this.state.endereco.estado} id="estado" type="text" className="validate" />
                                    <label htmlFor="estado" className={this.state.endereco.estado ? "active" : ""}>Estado</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarEndereco} value={this.state.endereco.cidade} id="cidade" type="text" className="validate" />
                                    <label htmlFor="cidade" className={this.state.endereco.cidade ? "active" : ""}>Cidade</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarEndereco} value={this.state.endereco.rua} id="rua" type="text" className="validate" />
                                    <label htmlFor="rua" className={this.state.endereco.rua ? "active" : ""}>Rua</label>
                                </div>
                                <div className="input-field col s12">
                                    <input onChange={this.capturarEndereco} value={this.state.endereco.numero} id="numero" type="text" className="validate" />
                                    <label htmlFor="numero" className={this.state.endereco.numero ? "active" : ""}>Número</label>
                                </div>
                                {this.state.telefones.map((telefone, index) => (
                                    <><div key={index} className="input-field col s12">
                                        <input onChange={(e) => this.capturarTelefone(e, index)} value={telefone.ddd} id={`ddd-${index}`} type="text" className="validate" />
                                        <label htmlFor={`ddd-${index}`} className={telefone.ddd ? "active" : ""}>DDD</label>
                                    </div>
                                    <div key={index} className="input-field col s12">
                                            <input onChange={(e) => this.capturarTelefone(e, index)} value={telefone.numero} id={`numero-${index}`} type="text" className="validate" />
                                            <label htmlFor={`numero-${index}`} className={telefone.numero ? "active" : ""}>Número</label>
                                        <button className="btn " type="button" onClick={this.adicionarTelefone}>Adicionar Telefone</button> <br></br> <br></br>
                                        <button className="btn " type="button" onClick={() => this.removerTelefone(index)}>Remover</button>

                                        </div>
                                        </> 
                                ))}
                            </div>
                            
                            <div className="row">
                                <div className="col s12">
                                    <button className="btn " type="submit" name="action">Enviar
                                      
                                    </button> <br></br>
                                    <br></br>
                                    <a onClick={(e) => this.props.seletorView('FormularioCadastroCliente', e)} className="btn ">Voltar</a>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}
