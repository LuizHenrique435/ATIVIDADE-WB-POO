import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function BarraNav(){
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">WB</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Listagem" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/clientes">Clientes</NavDropdown.Item>
                  <NavDropdown.Item href="/produtos">Produtos</NavDropdown.Item>
                  <NavDropdown.Item href="/servicos">Serviços</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cadastrar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/cadastrar_cliente">
                    Cliente
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/cadastrar_produto">
                    Produto
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/cadastrar_servico">
                    Serviço
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Comprar" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/comprar_produtos">Produtos</NavDropdown.Item>
                    <NavDropdown.Item href="/comprar_servicos">Serviços</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Listar" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/listar_produtos">Pedidos de produtos</NavDropdown.Item>
                    <NavDropdown.Item href="/listar_servicos">Pedidos de serviços</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
}

export default BarraNav;