import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="md" className="bg-body-tertiary">
      <Container className=''>
        <Navbar.Brand href="#home">ЗдесьЛого</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="" id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <NavDropdown className='' title="Услуги" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/1">Бухгалтерские</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Финансовые</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Налоговые</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='' href="#articles">Статьи</Nav.Link>
            <Nav.Link className='' href="#about">О нас</Nav.Link>
            <Nav.Link className='' href="#contacts">Контакты</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text><Button variant='success'>Личный кабинет</Button></Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header