import { Button } from 'react-bootstrap';
import BarraNav from '../../../NavBar';

function CadastrarProdutos(){
        return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
            <h1>Cadastrar Produto</h1>
            <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    );   
}

export default CadastrarProdutos;
