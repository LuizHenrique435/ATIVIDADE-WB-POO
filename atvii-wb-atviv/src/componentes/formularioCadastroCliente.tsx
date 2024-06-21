import React, { Component, ChangeEvent, FormEvent } from "react";
import M from "materialize-css";
import { Link } from "react-router-dom";
import { cadastrarCliente } from "./enuns/uri";
import "./FormularioCadastroCliente.css"; // Importa o arquivo CSS

type Props = {
  tema: string;
  seletorView: Function;
};

type State = {
  nome: string;
  sobreNome: string;
  email: string;
  endereco: {
    id: string;
    estado: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    codigoPostal: string;
    informacoesAdicionais: string;
  };
  telefones: {
    id: string;
    ddd: string;
    numero: string;
  }[];
};

export default class FormularioCadastroCliente extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      nome: '',
      sobreNome: '',
      email: '',
      endereco: {
        id: '',
        estado: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        codigoPostal: '',
        informacoesAdicionais: '',
      },
      telefones: [
        {
          id: '',
          ddd: '',
          numero: '',
        }
      ]
    };

    this.capturarNome = this.capturarNome.bind(this);
    this.capturarSobreNome = this.capturarSobreNome.bind(this);
    this.capturarEmail = this.capturarEmail.bind(this);
    this.capturarEndereco = this.capturarEndereco.bind(this);
    this.capturarTelefone = this.capturarTelefone.bind(this);
    this.adicionarTelefone = this.adicionarTelefone.bind(this);
    this.removerTelefone = this.removerTelefone.bind(this);
    this.submeterFormulario = this.submeterFormulario.bind(this);
  }

  capturarNome(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ nome: event.target.value });
  }

  capturarSobreNome(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ sobreNome: event.target.value });
  }

  capturarEmail(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ email: event.target.value });
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
    const { nome, sobreNome, email, endereco, telefones } = this.state;

    if (!nome || !sobreNome || !email || !endereco || !telefones) {
      M.toast({ html: 'Por favor, preencha todos os campos!' });
      return;
    }

    let cliente = { nome, sobreNome, email, endereco, telefones };

    try {
      const response = await fetch('http://localhost:32832/cliente/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
      });

      if (response.ok) {
        M.toast({ html: `Cliente cadastrado com sucesso! ` });
        this.setState({ nome: '', sobreNome: '', email: '', endereco: { id: '', estado: '', cidade: '', bairro: '', rua: '', numero: '', codigoPostal: '', informacoesAdicionais: '' }, telefones: [{ id: '', ddd: '', numero: '' }] });
      } else {
        throw new Error('Erro ao cadastrar cliente!');
      }
    } catch (error) {
      M.toast({ html: error.message });
      console.error("Failed to register client:", error);
    }
  }

  componentDidMount() {
    const elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
  }

  render() {
    let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`;

    return (
      <>
        <div className="container center-align">
          <h5 className="">Cadastro Cliente</h5>

          <div className="row">
            <form className="col s12 formulario-cadastro-cliente" onSubmit={this.submeterFormulario}>
              <div className="row">
                <div className="input-field col s6">
                  <input onChange={this.capturarNome} value={this.state.nome} id="nome" type="text" className="validate" />
                  <label htmlFor="nome" className={this.state.nome ? "active" : ""}>Nome</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarSobreNome} value={this.state.sobreNome} id="sobreNome" type="text" className="validate" />
                  <label htmlFor="sobreNome" className={this.state.sobreNome ? "active" : ""}>Nome Social</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEmail} value={this.state.email} id="email" type="email" className="validate" />
                  <label htmlFor="email" className={this.state.email ? "active" : ""}>Email</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.estado} id="estado" type="text" className="validate" />
                  <label htmlFor="estado" className={this.state.endereco.estado ? "active" : ""}>Estado</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.cidade} id="cidade" type="text" className="validate" />
                  <label htmlFor="cidade" className={this.state.endereco.cidade ? "active" : ""}>Cidade</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.bairro} id="bairro" type="text" className="validate" />
                  <label htmlFor="bairro" className={this.state.endereco.bairro ? "active" : ""}>Bairro</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.rua} id="rua" type="text" className="validate" />
                  <label htmlFor="rua" className={this.state.endereco.rua ? "active" : ""}>Rua</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.numero} id="numero" type="text" className="validate" />
                  <label htmlFor="numero" className={this.state.endereco.numero ? "active" : ""}>Número</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.codigoPostal} id="codigoPostal" type="text" className="validate" />
                  <label htmlFor="codigoPostal" className={this.state.endereco.codigoPostal ? "active" : ""}>Código Postal</label>
                </div>
                <div className="input-field col s6">
                  <input onChange={this.capturarEndereco} value={this.state.endereco.informacoesAdicionais} id="informacoesAdicionais" type="text" className="validate" />
                  <label htmlFor="informacoesAdicionais" className={this.state.endereco.informacoesAdicionais ? "active" : ""}>Informações Adicionais</label>
                </div>
                {this.state.telefones.map((telefone, index) => (
                  <div key={index} className="row">
                    <div className="input-field col s4">
                      <input onChange={(e) => this.capturarTelefone(e, index)} value={telefone.ddd} id={`ddd-${index}`} type="text" className="validate" />
                      <label htmlFor={`ddd-${index}`} className={telefone.ddd ? "active" : ""}>DDD</label>
                    </div>
                    <div className="input-field col s4">
                      <input onChange={(e) => this.capturarTelefone(e, index)} value={telefone.numero} id={`numero-${index}`} type="text" className="validate" />
                      <label htmlFor={`numero-${index}`} className={telefone.numero ? "active" : ""}>Número</label>
                    </div>
                    <div className="col s4">
                      <button className="btn waves-effect waves-light red lighten-2" type="button" onClick={() => this.removerTelefone(index)}>Remover</button>
                    </div>
                  </div>
                ))}
                <div className="input-field col s12">
                  <button className="btn" type="button" onClick={this.adicionarTelefone}>Adicionar Telefone</button>
                </div>
              </div>

              <div className="row">
                <div className="col s12">
                  <button className={`btn`} type="submit" name="action">Enviar
                  </button>
                  <a onClick={(e) => this.props.seletorView('ExcluirCliente', e)} className={`btn`}>Excluir</a>  
                  <a onClick={(e) => this.props.seletorView('AtualizarCliente', e)} className={`btn`}>Atualizar</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
