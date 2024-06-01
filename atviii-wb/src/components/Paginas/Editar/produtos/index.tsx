import { Button } from 'react-bootstrap';
import BarraNav from '../../../NavBar';

function EditarProduto(){
        return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
            <h1>Editar Produto</h1>
                <Button  variant="outline-dark" href='/Produtos'>Voltar</Button>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" defaultValue="Shampoo CR7"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="50"/>
                        </div>
                        <Button className="submit" variant="outline-dark" href='/Produtos' type='submit'>Concluir</Button>{' '}
                    </form>
                </div>
            </main>
        </section>
    )
};

export default EditarProduto;