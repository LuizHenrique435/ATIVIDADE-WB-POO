/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import BarraNav from '../../../NavBar';

export class EditarServico extends Component {
    render(){

        return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
                <h1>Editar Serviço</h1>
                <Button  variant="btn btn-secondary" href='/Servicos'>Voltar</Button>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" defaultValue="Corte Degradê Social"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="30"/>
                        </div>
                        <Button className="submit" variant="btn btn-success" type='submit'>Concluir</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    )
}
};