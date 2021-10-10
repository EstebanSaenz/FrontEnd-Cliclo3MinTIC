
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
                    <label htmlFor="id_product" className="form-label">Identificacion de Producto</label>
                    <div className="input-group has-validation">
                    <input type="text" className="form-control" id="id_product" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el id del producto.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="quantityProduct" className="form-label">Cantidad</label>
                    <input type="text" className="form-control" id="quantityProduct" required/>
                    <div className="invalid-feedback">
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                        Introduzca el numero de productos. 
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="priceProduct" className="form-label">Precio Unitario</label>
                    <input type="text" className="form-control" id="priceProduct" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el precio unitario del producto.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="saleValue" className="form-label">Valor Total Venta</label>
                    <input type="number" className="form-control" id="saleValue"  required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el valor total de la venta.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="date" className="form-label">Fecha</label>
                    <input type="date" className="form-control" id="date" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Seleccione la fecha.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="clientName" className="form-label">Nombre del Cliente</label>
                    <input type="text" className="form-control" id="clientName" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el nombre del cliente.
                    </div>
                </div> 
                <div className="col-md-6">
                    <label htmlFor="id_client" className="form-label">Identificacion del Cliente</label>
                    <input type="text" className="form-control" id="id_client" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca la identificación del cliente.
                    </div>
                </div> 
                <div className="col-md-6">
                    <label htmlFor="seller" className="form-label">Vendedor</label>
                    <input type="text" className="form-control" id="seller" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el nombre del vendedor.
                    </div>
                </div> 
                <div className="col-md-6">
                    <label htmlFor="state" className="form-label">Estado</label>
                    <select className="form-control form-select" name="state" required >
                        <option selected disabled value="">Seleccione una opción</option>
                        <option>En Proceso</option>
                        <option>Cancelada</option>
                        <option>Entregada</option>
                    </select>
                    <div className="invalid-feedback">
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        Seleccione el estado de la venta.
                    </div>
                </div>          
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}


