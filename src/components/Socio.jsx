import React, { Fragment } from 'react';
import { Badge, Button } from 'react-bootstrap';

const Socio = ({socio, borrarSocio}) => { //acá recibe como property la funcion que se crea en App.js
    return (  
        <Fragment>
            <br/>
            <Badge bg='secondary'>
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