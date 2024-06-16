import { Button } from "react-bootstrap";
import BarraNav from "../../../NavBar";

function CadastrarServico() {
  return (
    <section>
      <header>
        <BarraNav />
      </header>
      <main>
      <h1>Cadastrar Serviço</h1>
                <div className="forms">
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text"/>
                        </div>
                        <Button className="submit" variant="btn btn-success" type='submit'>Cadastrar</Button>{' '}
                    </form>
                </div>
      </main>
    </section>
  );
}

export default CadastrarServico;
