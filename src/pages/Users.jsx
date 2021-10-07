
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/users.css';

 export const Users= () => {

    const usuarios = [{id: 1,nombre:'Daniel',apellido: 'Zemanate', identificacion: 19028753, rol:"Administrador", estado:"Autorizado"},
    {id:2,nombre:'Valery',apellido: 'Rivera', identificacion: 12674890, rol:"Vendedor", estado:"Pendiente"},
    {id:3,nombre:'Candy',apellido: 'Rivera', identificacion: 172093865, rol:"Vendedor", estado:"Rechazado"},
    {id:4,nombre:'Anderson',apellido: 'Trujillo', identificacion: 1098276538, rol:"Vendedor", estado:"Autorizado"},
    {id:5,nombre:'Juliana',apellido: 'Lopez', identificacion: 152793087, rol:"Administrador", estado:"Rechazado"},
    {id:6,nombre:'Daniel',apellido: 'Zemanate', identificacion: 1061892620, rol:"Vendedor", estado:"Pendiente"},
    {id:7,nombre:'Valery',apellido: 'Rivera', identificacion: 107628290, rol:"Vendedor", estado:"Rechazado"},
    {id:8,nombre:'Candy',apellido: 'Rivera', identificacion: 102826382, rol:"Vendedor", estado:"Pendiente"},
    {id:9,nombre:'Anderson',apellido: 'Trujillo', identificacion: 1092835749, rol:"Administrador", estado:"Autorizado"},
    {id:10,nombre:'Juliana',apellido: 'Lopez', identificacion: 1061920273, rol:"Vendedor", estado:"Pendiente"}, ];

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Nuevo Usuario");
    const [iconButton, setIconButton] = useState("fa fa-user-plus")
    const [users, setUsers] = useState([])

     // FILTRO BUSQUEDA EN TABLA
     const [searchValue, setSearchValue] = React.useState("");

     const handleChange = event => {
        setSearchValue(event.target.value);
      };
 
     //  FILTRAR POR NOMBRE
    //  const filterNames = ({Nombre}) => {
    //      return Nombre.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    //    };

    //LISTADO USUARIOS REGISTRADOS
    useEffect(() => {
        setUsers(usuarios)
    }, [])

    useEffect(() => {
       if (mostrarTabla) {
           setTextButton("Crear Nuevo Usuario");
           setIconButton("fa fa-user-plus px-1")
       } else {
        setTextButton("Listar Usuarios");
        setIconButton("fa fa-list px-2")
       }
    }, [mostrarTabla])

        return (
            <div>
                <div className="containerUser">
                    <div className="text-center">
                        <h1 className="title py-3">GESTION USUARIOS</h1>
                    </div>
                    <div className="row">
                        <div className="col-3 col-md-3 mb-3">
                            <button type="button" className="btn btn-primary btn-block"
                                onClick={()=> {
                                    setMostrarTabla(!mostrarTabla);
                                }} >
                                <i className={iconButton}></i>{textButton}
                            </button>
                        </div>
                         <div className="col-8 col-md-8">
                            <div className="input-group">
                            {/* BARRA BUSQUEDA */}
                                <input type="text" className="form-control"
                                    placeholder="Buscar"
                                    value={searchValue}
                                    onChange={handleChange}/>
                                <span className="span input-group-prepend input-group-text">
                                <i className="fa fa-search"></i></span>
                            </div>
                        </div>
                        <div className="col-12 col-md-12">
                            {mostrarTabla ? (<TableUsers listaUsuarios={users} /> 
                             ) : (
                            <FormUsers 
                            setShowTable={setMostrarTabla} 
                            setUsers={setUsers}
                            listaUsuarios={users}/>
                            )}
                        <ToastContainer
                        position="top-center"
                        autoClose={5000}/>
                        </div>
                    </div> 
             </div>         
         </div>     
        )
    }

const TableUsers = ({listaUsuarios}) => {
      // MAPEO PARA AGREGAR NUMERO A CADA USUARIO
      listaUsuarios.map( (users,index) => {
         return users.inc = index+1;
     });
    return(

 <>
      
    <div className="table-responsive">
        <table data-toggle="table" className="table table-striped table-hover "
         data-toolbar="#toolbar" 
         data-filter-control="true" 
         data-filter-control-container="#filter">
            <thead className="tableStyle">
                <tr>
                    <th className="thTableId">#</th>
                    <th className="thTable">Nombre</th>
                    <th className="thTable">Apellido</th>
                    <th className="thTable">Identificación</th>
                    <th className="thTable">Rol</th>
                    <th className="thTable">Estado</th>
                    <th className= "thTableAcciones" colSpan="3">Acciones</th>
                </tr>
            </thead>
                {/* <tbody>
                    {
                    usuarios.map((users,index) => (
                    <tr>
                        <th scope="row">{users.inc}</th>
                        <td >{users.Nombre}</td>
                        <td>{users.apellido}</td>
                        <td>{users.Identificación}</td>
                    </tr>
                       ))
                    }
                </tbody> */}
                <tbody>
                {listaUsuarios.map(item => (
                    <tr key={item.inc}>
                        <th scope="row">{item.inc}</th>
                        <td >{item.nombre}</td>
                        <td>{item.apellido}</td>
                        <td>{item.identificacion}</td>
                        <td>{item.rol}</td>
                        <td>{item.estado}</td>
                        <td>
                            <button type="button" className="btn buttonTable">
                            <i className="fa fa-eye"></i>
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn buttonTable">
                            <i className="fas fa-pencil-alt"></i>
                            </button>
                        </td>
                        <td>
                            <button type="button" className="btn buttonTableTrash">
                            <i className="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
        </table>
     </div> 
</> 
    )
}

// FORMULARIO CREACION NUEVO USUARIO
const FormUsers =({setShowTable, listaUsuarios, setUsers}) => {

    //VALIDACIONES FORMULARIOS
    const form = useRef(null);
    const [validated, setValidated] = React.useState('');

    
    const handleSubmit = (event) => {
        
        const formEvent = event.target;
        if (formEvent.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          toast.error('Ingrese Todos los campos')
        } else {
         // CONTROLAR EL FORM SUBMMIT
        event.preventDefault();
        const newUser={};
        // OBTENER DATOS DE FORMULARIO
        const fd = new FormData(form.current)
        //RECOREER CADA UNO DE LOS VALORES y AGREGAR AL NUEVOUSUARIO QUE CREAMOS newUser={}
        fd.forEach((value,key) => {
            // console.log(key,value)
            newUser[key]= value; 
        })
        // console.log(newUser)
        setShowTable(true);
        toast.success('USUARIO SE GUARDO CON ÉXITO');
        setUsers([...listaUsuarios, newUser])
        }
        setValidated("was-validated");
      };

    return (
        <div className="col-12 col-md-12 col-lg-12">
            <form ref={form} className={`${validated} row g-3 needs-validation`} onSubmit={handleSubmit} noValidate>
                <div className="col-md-6">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name='nombre' placeholder="Pepito" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un Nombre.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" name='apellido' className="form-control" placeholder="Perez"  required/>
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
                    <input type="text" name='identificacion' className="form-control" placeholder="12345678" required/>
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
                    {/* <input type="text" className="form-control" id="rol" required/> */}
                    <select className="form-control form-select" name="rol" defaultValue={0} required >
                        <option disabled value={0}>Seleccione una opción</option>
                        <option>Vendedor</option>
                        <option>Administrador</option>
                    </select>
                    <div className="invalid-feedback">
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    Introduzca un Rol para el Usuario.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">Estado</label>
                    <input type="text" name='estado' className="form-control" placeholder="Inactivo" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                    Introduzca un Estado para el Usuario.
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    )
}

