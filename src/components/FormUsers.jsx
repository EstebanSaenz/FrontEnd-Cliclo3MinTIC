import React from 'react'


export const FormUsers =() => {

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
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="nombre" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un Nombre.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" id="apellido"  required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un Apellido.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="identificación" className="form-label">Identificación</label>
                    <div className="input-group has-validation">
                    <input type="text" className="form-control" id="identificacion" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca una identificación.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Rol</label>
                    <input type="text" className="form-control" id="rol" required/>
                    <div className="invalid-feedback">
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    Introduzca un Rol para el Usuario.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Estado</label>
                    <input type="text" className="form-control" id="estado" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca un Estado para el Usuario.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}


