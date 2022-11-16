import React, { Fragment, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { v4 as uuid } from "uuid";

const Formulario = ({ agregarSocio }) => {

  //Creo un socio vacío y lo inicializo con un hook de estado

  const [socio, editarSocio] = useState({
    nombre: "",
    dni: "",
  });

  //State para manejo de errores en el formulario

  const [error, setError] = useState(false);

  //Extraer valores

  const { nombre, dni } = socio;

  //Agarramos lo que el usuario escribe en el formulario

  const handleChange = (e) => {
    editarSocio({
      ...socio,
      [e.target.name]: e.target.value,
    });
  };

  //Función para cuando el formulario se envía

  const submitForm = (e) => {
    e.preventDefault(); //para no enviar los datos por url
    console.log("Formulario enviado");

    //Validar la información del formulario
    //Manejo de errores

    if (nombre.trim() === "" || dni.trim() === "") {
      setError(true);
      return;
    }

    //Quitar el mensaje de error

    setError(false);

    //Generar el socio
    //Ponerle id único al socio

    socio.id = uuid();
    //console.log(socio); para ver el id que genera aleatorio
    agregarSocio(socio);

    //Chequear que no exista

    //Limpiar el formulario

    editarSocio({
      nombre: "",
      dni: "",
    });
  };

  return (
    <Fragment>
      <Form onSubmit={submitForm}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre completo"
            name="nombre"
            onChange={handleChange}
            value={nombre}
          />
        </Form.Group>
        <br />

        <Form.Group>
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sin puntos ni espacios"
            name="dni"
            onChange={handleChange}
            value={dni}
          />
        </Form.Group><br/>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
        <br />
        <br />
        {error
          ? (
            <Alert key="danger" variant="danger">
              Completá los campos
            </Alert>
            )
          : null
        }
      </Form>
    </Fragment>
  );
};

export default Formulario;
