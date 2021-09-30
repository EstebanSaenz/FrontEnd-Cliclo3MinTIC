import React from 'react'
import {Form, Button, InputGroup} from 'react-bootstrap';

export const FormUsers =() => {

    //VALIDACIONES FORMULARIOS
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else {
            console.log('hola')
        }
        setValidated(true);
      };
    return (
        <div className="col-8 col-md-8 col-lg-8">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                    />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Introduzca un Nombre.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  className="mb-3" controlId="validationCustom02">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido"
                    />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Introduzca un Apellido.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustomUsername">
                    <Form.Label>Identificación</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                        type="number"
                        placeholder="Identificación"
                        required
                        />
                        <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                        Introduzca una Identificación.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group  className="mb-3"controlId="validationCustom03">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control type="text" placeholder="Rol" required />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                        Introduzca un Rol.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group  className="mb-3" controlId="validationCustom04">
                    <Form.Label>Estado</Form.Label>
                    <Form.Control type="text" placeholder="Estado" required />
                    <Form.Control.Feedback>Correcto!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                            Introduzca un Estado para el Usuario.
                    </Form.Control.Feedback>
                    </Form.Group>
                <Button type="submit">Guardar</Button>
            </Form>
        </div>
    )
}


