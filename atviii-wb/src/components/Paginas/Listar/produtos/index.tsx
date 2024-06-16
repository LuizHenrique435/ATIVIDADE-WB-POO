import { PencilSimple, Eraser, Eye } from "phosphor-react";
import { Button, Table } from "react-bootstrap";
import BarraNav from "../../../NavBar";
import "./styles.css";

function ListarProdutos() {
  return (
    <section>
      <header>
        <BarraNav />
      </header>
      <main>
      <h1>Lista de todos os pedidos de produtos por cliente</h1>
          <div className="tables">
            <Table striped bordered hover variant="table table-dark table-hover">
              <thead>
                <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Nome Social</th>
                <th>CPF</th>
                <th>Genero</th>
                <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>1</td>
                <td>Luiz Henrique</td>
                <td>Lz 160</td>
                <td>418.706.718-30</td>
                <td>Masculino</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_cliente/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-light">Visualizar produtos</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                <td>2</td>
                <td>Erik Zanetii</td>
                <td>Tadala</td>
                <td>784.523.920-00</td>
                <td>Masculino</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                      <Button variant="outline-light">Visualizar produtos</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                <td>3</td>
                <td>Felipe Silva</td>
                <td>Pelé</td>
                <td>000.521.321-30</td>
                <td>Masculino</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                        <Button variant="outline-light">Visualizar produtos</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                <td>4</td>
                <td>Paula Tejano</td>
                <td>Paulinha</td>
                <td>100.320.520-00</td>
                <td>Feminino</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                        <Button variant="outline-light">Visualizar produtos</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                <td>5</td>
                <td>Neymar Junior</td>
                <td>Juninho</td>
                <td>545.653.321-87</td>
                <td>Masculino</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                        <Button variant="outline-light">Visualizar produtos</Button>{" "}
                    </div>
                  </td>
                </tr>
                <tr>
                <td>6</td>
                <td>Alisha Leemann</td>
                <td>Alishinha</td>
                <td>789.654.123-00</td>
                <td>Feminino</td>
                  <td>
                    <div className="icons">
                      <a href="/editar_servico/1">
                        <PencilSimple size={35} color="#198754" />
                      </a>
                      <a href="/clientes/1">
                        <Eye size={35} color="#0DCAF0" />
                      </a>
                      <a href="##">
                        <Eraser size={35} color="#DC3545" />
                      </a>
                    </div>
                    <div className="Column">
                        <Button variant="outline-light">Visualizar produtos</Button>{" "}
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

export default ListarProdutos;
