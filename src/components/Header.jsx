import React, { Fragment } from 'react';
import {Navbar, Container, Nav, NavDropdown, Row, Col, Image} from 'react-bootstrap';
import Formulario from "./Formulario";
import Socio from "./Socio";
import "../estilos/Header.css";

const Header = ({agregarSocio, borrarSocio, asociados, tituloPrincipal, titulo, titulo2}) => {
    return ( 
        <Fragment>
            <Navbar className='justify-content-end' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home" className='negrita'>
                        <Image src='https://www.cariverplate.com.ar/images/logo-river.png?cache=a57'/>
                        {tituloPrincipal}
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="https://www.somosriver.com/">SOMOS RIVER</Nav.Link>
                        <Nav.Link href="https://www.tiendariver.com/?utm_source=me-ar_sitio_river_header&utm_medium=link">TIENDA RIVER</Nav.Link>
                        <Nav.Link href="#fundacionRiver">FUNDACIÓN RIVER</Nav.Link>
                        <Nav.Link href="#patrocinadores">PATROCINADORES</Nav.Link>
                        <Nav.Link href='https://www.adidas.com.ar/river_plate'><Image src='https://www.cariverplate.com.ar/imagenes/banners/2019-08/30-adidas-sponsor-home.png' ></Image></Nav.Link>
                        <Nav.Link href='https://m.caba.codere.bet.ar/deportes/#/RiverPlatePage'><Image src='https://www.cariverplate.com.ar/imagenes/banners/2021-08/195-codere-adaptado-ok-main.png'></Image></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className='negrita'>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <NavDropdown title="Productos">
                            <NavDropdown.Item href="https://www.tiendariver.com/riverplate/indumentaria/Camisetas/Musculosas/entrenamiento?PS=50&map=c,c,specificationFilter_23,specificationFilter_23,specificationFilter_35&O=OrderByReleaseDateDESC">Camisetas</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.cariverplate.com.ar/ingresos-al-monumental">Entradas</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.tiendariver.com/riverplate/indumentaria/abrigos/entrenamiento?PS=50&map=c,c,c,specificationFilter_35&O=OrderByReleaseDateDESC">Camperas</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='https://www.cariverplate.com.ar/escuelas-river-plate'>Escuela</Nav.Link>
                        <Nav.Link href="https://www.cariverplate.com.ar/historia">Historia</Nav.Link>
                        <Nav.Link href="https://www.cariverplate.com.ar/autoridades2">Autoridades</Nav.Link>
                        <Nav.Link href="https://www.cariverplate.com.ar/defensoria-del-socio">Defensoría de Socios - Contacto</Nav.Link>
                        
                    </Nav>
                    <Nav>
                        <Nav className='negrita letraBlanca'>EL MAS GRANDE, LEJOS</Nav>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
                <br/>
                <Row>
                    <Col><h2>{titulo}</h2></Col>
                    <Col className='text-center'>
                        <h2>{titulo2}</h2>
                        {
                            asociados.length === 0 ?
                                <p></p>
                            :
                            <p>Socios totales: {asociados.length}</p>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Formulario agregarSocio={agregarSocio}/>
                    </Col>
                    <Col className='text-center'>
                        {
                        asociados.map ( socio => 
                            <Socio
                                socio={socio}
                                key={socio.id}
                                borrarSocio={borrarSocio}
                            />
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </Fragment>
     );
}
 
export default Header;