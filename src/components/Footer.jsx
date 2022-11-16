import React, { Fragment } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import '../estilos/Footer.css';

const Footer = () => {
    return ( 
        <Fragment>
            <Container fluid className='footer fondo_footer'>
                <Row>
                    <Col>
                        <Image src='https://www.cariverplate.com.ar/images/logo-river-foot.png?cache=a57'></Image>
                    </Col>
                    <Col className='text-start'><br/>
                        © Leonel Zeballez
                    </Col>
                    <Col className='text-end'><br/>
                        <a href='https://www.facebook.com/riverplateoficial/'><Image roundedCircle className='imagenChica' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png'></Image></a>&nbsp;
                        <a href='https://twitter.com/RiverPlate?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><Image roundedCircle className='imagenChica' src='https://static.vecteezy.com/system/resources/previews/002/534/045/original/social-media-twitter-logo-blue-isolated-free-vector.jpg'></Image></a>&nbsp;
                        <a href='https://www.linkedin.com/company/club-atl-tico-river-plate/'><Image roundedCircle className='imagenChica' src='https://img1.freepng.es/20171221/lww/linkedin-png-picture-5a3c18567d0457.7108240415138878305121.jpg'></Image></a>&nbsp;
                        <a href='https://www.instagram.com/riverplate/'><Image roundedCircle className='imagenChica' src='https://eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png'></Image></a>&nbsp;
                        <a href='https://www.youtube.com/user/cariverplatetv'><Image roundedCircle className='imagenChica' src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/2048px-YouTube_social_white_squircle.svg.png'></Image></a>&nbsp;
                    </Col>
                </Row>
            </Container>
        </Fragment>
     );
}
 
export default Footer;