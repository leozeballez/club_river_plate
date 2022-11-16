import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import '../estilos/Carta.css';

const Carta = ({url}) => {
    return ( 
        <Fragment>
            <Image title={url.strPlayer} src={url.strRender}></Image><br/><br/>
            <p className='negrita'>{url.strPlayer}</p>
            <p>{url.strDescriptionEN}</p>
        </Fragment>
     );
}
 
export default Carta;