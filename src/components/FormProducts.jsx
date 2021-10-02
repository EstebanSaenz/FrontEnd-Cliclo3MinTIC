import React from 'react'

export const FormProducts = () => {

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
        } else {
            console.log('SE GUARDO CON ÉXITO')
        }
        //setValidated(true)
        setValidated("was-validated");
    };
    return (
        <div className="col-8 col-md-8 col-lg-8">
            <form className={`${validated} row g-3 needs-validation`} noValidate onSubmit={handleSubmit}>
                <div className="col-md-8">
                    <label htmlFor="producto" className="form-label">Nombre del producto</label>
                    <input type="text" className="form-control" id="producto" placeholder="Nombre del producto" required />
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un nombre para el producto.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="categoria" className="form-label">Categoría</label>
                    <select class="form-control" id="categoria" name="categoria" required>
                        <option value="">-- Seleccione una opción --</option>
                        <option value="1">Sin categoría</option>
                        <option value="2">Categoría 1</option>
                        <option value="3">Categoría 2</option>
                        <option value="4">Categoría 3</option>
                        <option value="5">Categoría n</option>
                    </select>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Seleccione una opción de la lista.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="unidadMedida" className="form-label">Unidad de Medida</label>
                    <div className="input-group has-validation">
                        <select class="form-control" id="unidadMedida" name="unidadMedida" required>
                            <option value="">-- Seleccione una opción --</option>
                            <option value="1">Unidad</option>
                            <option value="2">Paquete</option>
                            <option value="3">Unidad n</option>
                        </select>
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        <div className="invalid-feedback">
                            Seleccione una opción de la lista.
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <label htmlFor="precio" className="form-label">Precio unitario</label>
                    <input type="number" className="form-control" id="precio" min="0" required />
                    <div className="invalid-feedback">
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        Introduzca un precio de venta para el Producto.
                    </div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="categoria" className="form-label">Impuesto</label>
                    <select class="form-control" id="categoria" name="categoria" required>
                        <option value="">-- Seleccione una opción --</option>
                        <option value="0">Sin impuesto</option>
                        <option value="5">5%</option>
                        <option value="19">19%</option>
                    </select>
                    <div className="invalid-feedback">
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        Seleccione una opción de la lista.
                    </div>
                </div>
                {/* <div className="col-md-4"> */}
                {/* <label htmlFor="validationCustom05" className="form-label">Estado</label> */}
                {/* <input type="text" className="form-control" id="estado" required /> */}
                {/* <div className="valid-feedback"> */}
                {/* Correcto! */}
                {/* </div> */}
                {/* <div className="invalid-feedback"> */}
                {/* Introduzca un Estado para el Producto. */}
                {/* </div> */}
                {/* </div> */}
                <div className="col-12">
                    <label htmlFor="nota" className="form-label">Información adicional del producto</label>
                    <textarea class="form-control" rows="5" id="nota" name="nota"></textarea>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}
