import React from 'react'
import {Form, Button,} from 'react-bootstrap';

export const FormSales =() => {

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
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationSale01">
                    <Form.Label>Identificacion de Venta</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Identificacion de Venta"
                        defaultValue="001"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale02">
                    <Form.Label>Valor</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Valor total"
                        defaultValue="10500"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale03">
                    <Form.Label>Identificacion de Producto</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Identificacion de producto"
                        defaultValue="2001"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale04">
                    <Form.Label>Cantidad de unidades</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="unidades"
                        defaultValue="2"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale05">
                    <Form.Label>Precio Unitario</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Precio Unitario"
                        defaultValue="5250"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale06">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="dd/mm/aaaa"
                        defaultValue="01/10/2021"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale07">
                    <Form.Label>Cliente</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre Cliente"
                        defaultValue="Tomas Contreras"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale08">
                    <Form.Label>Identificacion del Cliente</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Identificacion de cliente"
                        defaultValue="1090448103"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationSale09">
                    <Form.Label>Vendedor</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre vendedor"
                        defaultValue="Manuel Sepulveda"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Button type="submit">Crear Nueva venta</Button>
            </Form>
        </div>
    )
}

