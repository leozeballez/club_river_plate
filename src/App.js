import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment, useState, useEffect } from "react";
import { Container, Image, Button, Row, Col } from "react-bootstrap";
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  //iniciamos el almacenamiento en el navegador
  //local storage
  let sociosIniciales = JSON.parse(localStorage.getItem("asociados"));
  if(!sociosIniciales) {
    sociosIniciales=[];
  }

  //useEffect sirve para ejecutar cosas cuando cambia el estado de un elemento

  useEffect(
    () => {
      if(sociosIniciales) {
        localStorage.setItem("asociados", JSON.stringify(asociados));
      } else {
        localStorage.setItem("asociados", JSON.stringify([]));
      }
    }, [sociosIniciales]
  );

  //hook vacio para la lista de socios
  const [asociados, editarAsociados] = useState(sociosIniciales);

  //Creamos función que recibe el socio nuevo y lo agrega a la lista de asociados.
  const agregarSocio = (socio) => {
    editarAsociados([...asociados, socio]);
  };

  //creamos función que filtra la lista de asociados a una lista sin el socio pasado por id, y actualiza la lista
  const borrarSocio = (id) => {
    const nuevosSocios = asociados.filter(socio => socio.id !== id);
    editarAsociados(nuevosSocios);
  };

  //Cambiamos el titulo si no hay socios
  let titulo2 = asociados.length === 0 ? "Aun no hay socios" : "Lista de socios";

  //Creamos un hook para guardar la url del nuevo jugador
  const [url, editar] = useState("");
  const [url2, editar2] = useState("");

  //funcion para consultar la siguiente API: https://www.thesportsdb.com/api.php
  const consultarAPI = async() => {
    try{
      const api = await fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck');
      const resultado = await api.json();
      editar(resultado.player[0].strRender);
      console.log(resultado.player[0].strRender);
    }catch(error){
      console.log(error);
    };

  };

  const consultarAPI2 = async() => {
    try{
      const api = await fetch('https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Cristiano%20Ronaldo');
      const resultado = await api.json();
      editar2(resultado.player[0].strRender);
      console.log(resultado.player[0].strRender);
    }catch(error){
      console.log(error);
    };

  };

  let titulo = "Ingresar socio";

  return (
    <Fragment>
    <Header
    agregarSocio = {agregarSocio}
    borrarSocio = {borrarSocio}
    asociados = {asociados}
    tituloPrincipal="Club Atletico River Plate"
    titulo = {titulo}
    titulo2 = {titulo2}
  /><br/>
  <Container>
    <Row>
      <Col className="text-center">
        <Button
          variant='success'
          onClick={consultarAPI}>
          Mostrar fichaje temporada 2022
        </Button><br></br><br></br>
        <Image title="Danny Welbeck" src={url}></Image><br/><br/>
      </Col>
      <Col className="text-center">
        <Button
          variant='success'
          onClick={consultarAPI2}>
          Mostrar próximo fichaje temporada 2023
        </Button><br></br><br></br>
        <Image title="Cristiano Ronaldo" src={url2}></Image><br/><br/>
      </Col>
    </Row>
  </Container>
  <Footer
  />
    </Fragment>
  );
}

export default App;
