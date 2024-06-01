/* eslint-disable react/jsx-pascal-case */
import { Button } from 'react-bootstrap';
import BarraNav from '../../../NavBar';
import './styles.css'

function CadastrarClientes(){
    return (
        <section>
            <header>
                <BarraNav/>
            </header>
            <main>
                <h1>Cadastrar Cliente</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Nome">Nome:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Sobrenome">Sobrenome:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Social">Nome social:</label>
                            <input type="text"/>
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
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="rg">RG:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Telefone">Telefone:</label>
                            <input type="text"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );
}

export default CadastrarClientes;
