/* eslint-disable react/jsx-pascal-case */
import { Component } from "react";
import { Button } from "react-bootstrap";
import BarraNav from "../../../NavBar";

export class ComprarServicos extends Component {
  render() {
    return (
      <section>
        <header>
          <BarraNav />
        </header>
        <main>
          <h1>Comprar Servico</h1>
          <div className="forms">
            <form>
              <div className="field">
                <label htmlFor="Nome">CPF de quem irá realizar a compra:</label>
                <input type="text" />
              </div>
              <div className="field">
                <label htmlFor="Sobrenome">Número do servico desejado:</label>
                <input type="text" />
              </div>
              <div className="field">
                <label htmlFor="Genero">Quantidade:</label>
                <select name="genero" id="genero">
                  <option>- Selecione a quantidade -</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <Button className="submit" variant="btn btn-success" type="submit">
                Comprar
              </Button>{" "}
            </form>
          </div>
        </main>
      </section>
    );
  }
}
