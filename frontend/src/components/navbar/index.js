import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './styles.css';


export default function Navbars() {
  return ( 

    <Navbar bg="primary" variant="dark" fixed="top" className='navbar'>
      
        <div className="menu">
        
          <div className="logo">
            <Navbar.Brand href="#home">Banco de Dados de Publicações de Brasileiros no Paraguai</Navbar.Brand>
          </div>
          
          <div className="menuContent">
          
            <Nav className="mr-auto">
                <Nav.Link href="/">Pagina Inicial</Nav.Link>
                <Nav.Link href="/search">Pesquisar</Nav.Link>
                <Nav.Link href="/logon">Entrar</Nav.Link>
                <Nav.Link href="/support">Suporte</Nav.Link>
            </Nav>

          </div>
        </div>
    </Navbar>

  );
}

