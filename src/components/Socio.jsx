import React, { Fragment } from 'react';
import { Badge, Button, Image } from 'react-bootstrap';
import '../estilos/Socio.css';

const Socio = ({socio, borrarSocio}) => { //acá recibe como property la funcion que se crea en App.js
    return (  
        <Fragment>
            <br/>
            <Badge bg='dark'>
                <Image roundedCircle className='carta' src='https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png'></Image>
                <p>Socio: {socio.id}</p>
                <p>Nombre: {socio.nombre}</p>
                <p>DNI: {socio.dni}</p>
                <Button variant='danger' onClick={() => borrarSocio(socio.id)}>Borrar
                </Button>
            </Badge><br/>
        </Fragment>
    );
}
 
export default Socio;