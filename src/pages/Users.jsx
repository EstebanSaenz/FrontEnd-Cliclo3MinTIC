import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import React, { useState, useEffect,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/users.css';
import { Dialog } from '@mui/material';

 export const Users= () => {

    // ESTADOS
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
    const [iconButton, setIconButton] = useState("fa fa-user-plus");
    const [users, setUsers] = useState([]);

    // ESTADO PARA TRAER TODOS LOS USUARIOS BD
    const [runQuery, setRunQuery] = useState(true);

    //GET TRAER TODOS LOS VEHICULOS MEDIANTE ESTADOS
      useEffect(() => {
         if (runQuery) {
            setRunQuery(false)
         }
      }, [runQuery])

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
                        <h1 className="title py-1">GESTION USUARIOS</h1>
                    </div>
                    <div className="container">
                        <div className="row justify-content-md-end">
                            <div className="col-2 col-md-2 mb-3">
                                <button type="button" className="btn border border-primary rounded-circle buttonAddUser"
                                    onClick={()=> {
                                        setMostrarTabla(!mostrarTabla);
                                    }} >
                                    <i className={iconButton}></i>{textButton}
                                </button>
                            </div>
                        </div>   
                        <div className="row justify-content-md-start">
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
         </div>     
        )
    }

const TableUsers = ({listaUsuarios}) => {

    //FILTRO BUSQUEDA
    const [search, setSearch] = useState('');
    const [usersFilters, setUsersFilters] = useState(listaUsuarios);
  
    useEffect(() => {
        setUsersFilters(
            listaUsuarios.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(search.toLowerCase());
        })
      );
    }, [search, listaUsuarios]);

      // MAPEO PARA AGREGAR NUMERO A CADA USUARIO
      listaUsuarios.map( (users,index) => {
         return users.inc = index+1;
     });
    return(

 <>
    <div className="row justify-content-md-start">

        <div className="col-md-4 mb-4">
            {/* BARRA BUSQUEDA */}
            <div className="input-group">
                <input type="text" className="form-control"
                    placeholder="Buscar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/>
                    <span className="span input-group-prepend input-group-text">
                <i className="fa fa-search"></i></span>
            </div>
        </div>
        <div className="col-md-12 col-lg-12 tableResponsive">
            <table className="tabla">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Identificación</th>
                        <th>Rol</th>
                        <th>Estado</th>
                        <th colSpan="3">Acciones</th>
                    </tr>
                </thead>
                    <tbody>
                        {usersFilters.map(item => (
                        <TableRow key={nanoid()} user={item}/>
                        ))}
                    </tbody>
            </table>
        </div>
        {/* CARDS PARA PANTALLAS MOVILES */}
        <div className='divCardsTable'>
        {usersFilters.map((item) => {
          return (
            <div className="card">
                <div class="card-body">
                    <h4 class="card-title">{item.nombre} {item.apellido}</h4>
                    <p class="card-text"><b>Identificación:</b> {item.identificacion}</p>
                    <p class="card-text"><b>Rol:</b> {item.rol}</p>
                    <p class="card-text"><b>Estado:</b> {item.estado}</p>
                </div>
            </div>
          );
        })}
      </div>
     </div> 
</> 
    )
}

// FILAS PARA TLA TABLA, MANEJO DE ACCIONES
const TableRow = ({user}) => {
    //    ESTADOS
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoUser, setInfoUser] =useState({
        nombre:user.nombre,
        apellido:user.apellido,
        identificacion:user.identificacion,
        rol:user.rol,
        estado:user.estado,
    });

    //FUNCIONES

    // ACTUALIZAR USUARIO
    const updateUser = () => {
        console.log(infoUser);
        toast.success('USUARIO EDITADO CON ÉXITO')
        setEdit(false)
    }

    //ELIMINAR USUARIO
    const deleteUser = () => {
        setOpenDialog(false)
        console.log(infoUser)
    }
    return(
    <tr>
        {edit? (
            <>
                <td>{user.inc}</td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoUser.nombre}
                        onChange={(e) => setInfoUser({...infoUser, nombre: e.target.value})}/>
                </td>
                <td>
                    <input 
                    className="form-control" 
                    type='text' 
                    defaultValue={infoUser.apellido}
                    onChange={(e) => setInfoUser({...infoUser, apellido: e.target.value})}/>
                    </td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoUser.identificacion}
                        onChange={(e) => setInfoUser({...infoUser, identificacion: e.target.value})}/>
                    </td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoUser.rol}
                        onChange={(e) => setInfoUser({...infoUser, rol: e.target.value})}/>
                    </td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoUser.estado}
                        onChange={(e) => setInfoUser({...infoUser, estado: e.target.value})}/>
                </td>
            </>
        ):(
        <>
            <td>{user.inc}</td>
            <td >{user.nombre}</td>
            <td>{user.apellido}</td>
            <td>{user.identificacion}</td>
            <td>{user.rol}</td>
            <td>{user.estado}</td>
        </>
        )}
        <td>
            <div className = 'd-flex justify-content-around w-100'> 

            {/* <i className="fa fa-eye iconEyePencil"></i> */}
                {edit? (
                <>
                    <Tooltip title='Confirmar Edición' arrow>
                        <i onClick={() => updateUser()} className="fas fa-check iconCheck"/>
                    </Tooltip>
                    <Tooltip title='Cancelar Edición' arrow>
                    <i onClick={() => setEdit(!edit)} className="fas fa-ban iconEyePencil"></i>
                    </Tooltip>
                </>
                ):(
                <>
                    <Tooltip title='Editar Usuario' arrow>
                        <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt iconEyePencil"></i>
                    </Tooltip>
                    <Tooltip title='Eliminar Usuario' arrow>
                        <i onClick={() => setOpenDialog(true)} className="fas fa-trash-alt iconTrash"></i>
                    </Tooltip>
                </>
                ) }
            </div>
            <Dialog open={openDialog}>
                <div className='d-flex flex-column divDialog '>
                    <h2>¿Está seguro de ELIMINAR el usuario?</h2>
                    <div className='divButtonDialog'>
                        <button onClick={ ()=> {deleteUser()}} className='btn btn-md buttonDialog'>Sí</button>
                        <button onClick={() => {setOpenDialog(false)}} className='btn btn-md buttonDialogNo'>No</button>
                    </div>
                </div>
            </Dialog>
        </td>
    </tr>
    )
}

// FORMULARIO CREACION NUEVO USUARIO
const FormUsers =({setShowTable, listaUsuarios, setUsers}) => {

    //VALIDACIONES FORMULARIOS
    const form = useRef(null);
    const [validated, setValidated] = React.useState('');

    const handleSubmit = (event) => {
        // VALIDACIONES
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

