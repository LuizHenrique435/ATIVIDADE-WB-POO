import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Table } from 'react-bootstrap';
import BarraNav from '../../../NavBar';

function Produtos(){
           return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
            <h1>Produtos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shampoo CR7</td>
                                <td>R$50</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_produto/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/produtos/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='/editar_produto/1'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Condicionador Paysandu </td>
                                <td>R$45</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Esmalte Vermelho</td>
                                <td>R$20</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr><tr>
                                <td>4</td>
                                <td>Esmalte Preto</td>
                                <td>R$20</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Descolorante de Cabelo</td>
                                <td>R$20</td>
                                <td>
                                    <div className="icons">
                                        <a href="##"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="##"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className="Column">
                                        <Button variant="outline-success" href='##'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
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

export default Produtos;
