// import React from 'react'
// import {Form, Button,} from 'react-bootstrap';

// export const FormSales =() => {

//     //VALIDACIONES FORMULARIOS
//     const [validated, setValidated] = React.useState(false);

//     const handleSubmit = (event) => {
//         const form = event.currentTarget;
//         if (form.checkValidity() === false) {
//           event.preventDefault();
//           event.stopPropagation();
//         }else {
//             console.log('hola')
//         }
//         setValidated(true);
//       };
//     return (
//         <div>
//             <Form noValidate validated={validated} onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="validationSale01">
//                     <Form.Label>Identificacion de Venta</Form.Label>
//                     <Form.Control
//                         required
//                         type="number"
//                         placeholder="Identificacion de Venta"
//                         defaultValue="001"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale02">
//                     <Form.Label>Valor</Form.Label>
//                     <Form.Control
//                         required
//                         type="number"
//                         placeholder="Valor total"
//                         defaultValue="10500"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale03">
//                     <Form.Label>Identificacion de Producto</Form.Label>
//                     <Form.Control
//                         required
//                         type="number"
//                         placeholder="Identificacion de producto"
//                         defaultValue="2001"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale04">
//                     <Form.Label>Cantidad de unidades</Form.Label>
//                     <Form.Control
//                         required
//                         type="number"
//                         placeholder="unidades"
//                         defaultValue="2"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale05">
//                     <Form.Label>Precio Unitario</Form.Label>
//                     <Form.Control
//                         required
//                         type="number"
//                         placeholder="Precio Unitario"
//                         defaultValue="5250"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale06">
//                     <Form.Label>Fecha</Form.Label>
//                     <Form.Control
//                         required
//                         type="text"
//                         placeholder="dd/mm/aaaa"
//                         defaultValue="01/10/2021"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale07">
//                     <Form.Label>Cliente</Form.Label>
//                     <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nombre Cliente"
//                         defaultValue="Tomas Contreras"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale08">
//                     <Form.Label>Identificacion del Cliente</Form.Label>
//                     <Form.Control
//                         required
//                         type="number"
//                         placeholder="Identificacion de cliente"
//                         defaultValue="1090448103"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="validationSale09">
//                     <Form.Label>Vendedor</Form.Label>
//                     <Form.Control
//                         required
//                         type="text"
//                         placeholder="Nombre vendedor"
//                         defaultValue="Manuel Sepulveda"
//                     />
//                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                 </Form.Group>

//                 <Button type="submit">Crear Nueva venta</Button>
//             </Form>
//         </div>
//     )
// }



import React from 'react'

export const FormSales =() => {

    //VALIDACIONES FORMULARIOS
    const [validated, setValidated] = React.useState('');
    // const [select, selectState] = React.useState('coconut')

    //change select
    // const handleChange = (event) => {
    //     selectState({value: event.target.value});
    //     console.log(event.target.value)
    //   }

    const handleSubmit = (event) => {
        const form = event.target;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else {
            console.log('SE GUARDO CON ÉXITO')
        }
        //setValidated(true)
        setValidated("was-validated");
      };
    return (
        <div className="col-8 col-md-8 col-lg-8">
            <form className={`${validated} row g-3 needs-validation`} noValidate onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="id_venta" className="form-label">Identificacion de Venta</label>
                    <input type="text" className="form-control" id="id_venta" placeholder="1" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el id de la venta.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="valor" className="form-label">Valor</label>
                    <input type="text" className="form-control" id="valor"  required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el valor de la venta.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="id_producto" className="form-label">Identificacion de Producto</label>
                    <div className="input-group has-validation">
                    <input type="text" className="form-control" id="id_producto" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca la identificación de productos.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="unidades_productos" className="form-label">Cantidad de unidades</label>
                    <input type="text" className="form-control" id="unidades<_productos" required/>
                    <div className="invalid-feedback">
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    Introduzca la cantidad de unidades de productos.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="precio_unitario" className="form-label">Precio Unitario</label>
                    <input type="text" className="form-control" id="precio_unitario" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca el precio unitario del producto.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="fecha" className="form-label">Fecha</label>
                    <input type="text" className="form-control" id="fecha" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca la fecha.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="cliente" className="form-label">Cliente</label>
                    <input type="text" className="form-control" id="cliente" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca el nombre del cliente.
                    </div>
                </div> 
                <div className="col-md-6">
                    <label htmlFor="cliente_id" className="form-label">Identificacion del Cliente</label>
                    <input type="text" className="form-control" id="cliente_id" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca la identificación del cliente.
                    </div>
                </div> 
                <div className="col-md-6">
                    <label htmlFor="vendedor" className="form-label">Vendedor</label>
                    <input type="text" className="form-control" id="vendedor" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca el nombre del vendedor.
                    </div>
                </div>           
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}


