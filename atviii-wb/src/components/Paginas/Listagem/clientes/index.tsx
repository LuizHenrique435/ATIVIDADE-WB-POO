import { PencilSimple, Eraser, Eye } from 'phosphor-react';
import { Button, Table } from 'react-bootstrap';
import BarraNav from '../../../NavBar';
import './styles.css'

function Clientes(){
        return (
            <section>
            <header>
                <BarraNav/>
            </header>
            <main>
            <h1>Clientes</h1>
                <div className="tables">
                    <Table striped bordered hover variant="table table-dark table-hover">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Nome Social</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>Telefone</th>
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
                                <td>53.619.184-0</td>
                                <td>(11) 985591546</td>
                                <td>Masculino</td>                                
                                <td>
                                    <div className="icons">
                                        <a href="/editar_cliente/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>
                                                  
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success" href='/editar_cliente/1'>Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>                                                          
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Erik Zanetii</td>
                                <td>Tadala</td>
                                <td>784.523.920-00</td>
                                <td>53.300.100-0</td>
                                <td>(12) 925631452</td>
                                <td>Masculino</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>          
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success">Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Felipe Silva</td>
                                <td>Pelé</td>
                                <td>000.521.321-30</td>
                                <td>14.700.184-0</td>
                                <td>(12) 954788745</td>
                                <td>Masculino</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success">Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Paula Tejano</td>
                                <td>Paulinha</td>
                                <td>100.320.520-00</td>
                                <td>12.619.321-0</td>
                                <td>(88) 996366369</td>
                                <td>Feminino</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success">Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Neymar Junior</td>
                                <td>Juninho</td>
                                <td>545.653.321-87</td>
                                <td>53.619.100-0</td>
                                <td>(12) 919731379</td>
                                <td>Masculino</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success">Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Alisha Leemann</td>
                                <td>Alishinha</td>
                                <td>789.654.123-00</td>
                                <td>53.879.184-0</td>
                                <td>(12) 979463164</td>
                                <td>Feminino</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success">Editar</Button>{' '}
                                        <Button variant="outline-danger">Excluir</Button>{' '}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Cleyton Gerson</td>
                                <td>Cleytinho</td>
                                <td>564.852.021-21</td>
                                <td>51.639.184-0</td>
                                <td>(12) 985213654</td>
                                <td>Masculino</td>
                                <td>
                                    <div className="icons">
                                        <a href="/editar_servico/1"><PencilSimple size={35} color="#198754"/></a>
                                        <a href="/clientes/1"><Eye size={35} color="#0DCAF0"/></a>
                                        <a href="##"><Eraser size={35} color="#DC3545"/></a>           
                                    </div>
                                    <div className='Column'>
                                        <Button variant="outline-success">Editar</Button>{' '}
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

export default Clientes;