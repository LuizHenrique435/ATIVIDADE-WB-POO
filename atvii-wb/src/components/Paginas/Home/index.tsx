import { Button, Table } from "react-bootstrap";
import { Eye } from "phosphor-react";
import { Component } from "react";
import BarraNav from "../../NavBar";
import "./styles.css";

export class Home extends Component {
  render() {
    return (
      <section>
        <header>
          <BarraNav />
        </header>
        <main>
          <h1>Gerenciamento de listas</h1>
          <div className="tables">
            <Table striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>Listas Disponiveis</th>
                  <th>Gerar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Os 10 clientes que mais consumiram em quantidade</td>
                  <td>
                    <div className="icons">
                      <a href="##">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-info" href="##">
                        Gerar
                      </Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Todos os clientes por gênero</td>
                  <td>
                    <div className="icons">
                      <a href="##">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-info" href="##">
                        Gerar
                      </Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Todos os produtos e serviços mais consumidos</td>
                  <td>
                    <div className="icons">
                      <a href="##">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-info" href="##">
                        Gerar
                      </Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Os serviços ou produtos mais consumidos por gênero.</td>
                  <td>
                    <div className="icons">
                      <a href="##">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-info" href="##">
                        Gerar
                      </Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Os 10 clientes que menos consumiram produtos ou serviços</td>
                  <td>
                    <div className="icons">
                      <a href="##">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-info" href="##">
                        Gerar
                      </Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Os 5 clientes que mais consumiram em valor</td>
                  <td>
                    <div className="icons">
                      <a href="##">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-info" href="##">
                        Gerar
                      </Button>{" "}
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </main>
      </section>
    );
  }
}
