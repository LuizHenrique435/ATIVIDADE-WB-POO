/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import BarraNav from '../../../NavBar';

export class EditarCliente extends Component {
    render(){

        return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
                <h1>Editar Cliente</h1>
                <Button  variant="outline-dark" href='/clientes'>Voltar</Button>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome" >Nome:</label>
                            <input type="text" defaultValue="Luiz "/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text" defaultValue="Henrique"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text" defaultValue="Lz 160"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Genero">Gênero:</label>
                            <select name="genero" id="genero">
                                <option>"Selecione seu gênero"</option>
                                <option>Feminino</option>
                                <option>Masculino</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="cpf">CPF:</label>
                            <input type="text" defaultValue="418.706.718-30"/>
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text" defaultValue="53.619.184-0"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text" defaultValue="(11) 985591546"/>
                        </div>
                        <Button className="submit" variant="outline-dark" href='/clientes' type='submit'>Concluir</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}
}

