import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Paginas/Home";
import Clientes from "../components/Paginas/Listagem/clientes";
import Produtos from "../components/Paginas/Listagem/produtos";
import Servicos from "../components/Paginas/Listagem/servicos";
import CadastrarClientes from "../components/Paginas/Cadastro/clientes";
import CadastrarProdutos from "../components/Paginas/Cadastro/produtos";
import CadastrarServico from "../components/Paginas/Cadastro/servicos";
import ComprarProdutos from "../components/Paginas/Comprar/produtos";
import ComprarServicos from "../components/Paginas/Comprar/servicos";
import ListarProdutos from "../components/Paginas/Listar/produtos";
import ListarServicos from "../components/Paginas/Listar/servicos";
import EditarCliente from "../components/Paginas/Editar/clientes";
import EditarProduto from "../components/Paginas/Editar/produtos";
import EditarServico from "../components/Paginas/Editar/servicos";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/cadastrar_cliente" element={<CadastrarClientes />} />
        <Route path="/cadastrar_produto" element={<CadastrarProdutos />} />
        <Route path="/cadastrar_servico" element={<CadastrarServico />} />
        <Route path="/comprar_produtos" element={<ComprarProdutos />} />
        <Route path="/comprar_servicos" element={<ComprarServicos />} />
        <Route path="/listar_produtos" element={<ListarProdutos />} />
        <Route path="/listar_servicos" element={<ListarServicos />} />
        <Route path="/editar_cliente/1" element={<EditarCliente />} />
        <Route path="/editar_produto/1" element={<EditarProduto />} />
        <Route path="/editar_servico/1" element={<EditarServico />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
