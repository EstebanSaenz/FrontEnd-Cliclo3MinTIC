import 'bootstrap/dist/css/bootstrap.min.css';
import { nanoid } from 'nanoid';
import React, { useState, useEffect,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Tooltip from '@mui/material/Tooltip';
import 'react-toastify/dist/ReactToastify.css';
import 'styles/users.css';
import { Dialog } from '@mui/material';
import {getUsers, createUser, updateUser, deleteUser} from 'utils/api/users'

 export const Users= () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Nuevo Usuario");
    const [iconButton, setIconButton] = useState("fa fa-user-plus");
    const [users, setUsers] = useState([]);

    // ESTADO PARA TRAER TODOS LOS USUARIOS BD
    const [runQuery, setRunQuery] = useState(true);

    //GET TRAER TODOS LOS VEHICULOS MEDIANTE ESTADOS
      useEffect(() => {
         if (runQuery) {
            getUsers(
                (response) => {
                //   console.log('la respuesta que se recibio fue', response);
                  setUsers(response.data);
                  setRunQuery(false)
                },
                (error) => {
                  console.error('Salio un error:', error);
                }
              );

         }
      }, [runQuery])

    //USE EFFECT MOSTRAR TABLA
    useEffect(() => {
        if(mostrarTabla) {
            setRunQuery(true);
        }   
    }, [mostrarTabla])

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
                                {mostrarTabla ? (<TableUsers listaUsuarios={users} setRunQuery={setRunQuery} /> 
                                ) : (
                                <FormUsers 
                                setShowTable={setMostrarTabla}/>
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

const TableUsers = ({listaUsuarios, setRunQuery}) => {

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
                        {usersFilters.map(item => {
                            return (
                        <TableRow key={nanoid()} user={item} setRunQuery={setRunQuery}/>
                            );
                        })}
                    </tbody>
            </table>
        </div>
        {/* CARDS PARA PANTALLAS MOVILES */}
        <div className='divCardsTable'>
        {usersFilters.map((item) => {
          return (
            <div className="card" key={nanoid()}>
                <div className="card-body">
                    <h4 className="card-title">{item.name} {item.lastname}</h4>
                    <p className="card-text"><b>Identificación:</b> {item.identification}</p>
                    <p className="card-text"><b>Rol:</b> {item.rol}</p>
                    <p className="card-text"><b>Estado:</b> {item.state}</p>
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
const TableRow = ({user, setRunQuery}) => {
    //    ESTADOS
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoUser, setInfoUser] =useState({
        // _id: user._id,
        name:user.name,
        lastname:user.lastname,
        identification:user.identification,
        rol:user.rol,
        state:user.state,
    });

    //FUNCIONES

    // ACTUALIZAR USUARIO
    const userUpdate = async () => {
     //enviar la info al backend
        await updateUser(
            user._id,
            infoUser,
            (response) => {
                // console.log(response.data)
                toast.success('USUARIO EDITADO CON ÉXITO')
                setEdit(false);
                setRunQuery(true)
            },
            (error) => {
                toast.error('Error modificando el usuario');
                console.error(error);
            }
        );
    }

    //ELIMINAR USUARIO BASE DE DATOS
    const userDelete = async() => {

        await deleteUser(
            user._id,
            (response) => {//   console.log(response.data);
                toast.success('Usuario eliminado con éxito');
                setRunQuery(true)
                setOpenDialog(false)
            },
            (error) => {   
                console.error(error);
                toast.error('Error eliminando el usuario');
            }
        );
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
                        defaultValue={infoUser.name}
                        onChange={(e) => setInfoUser({...infoUser, name: e.target.value})}/>
                </td>
                <td>
                    <input 
                    className="form-control" 
                    type='text' 
                    defaultValue={infoUser.lastname}
                    onChange={(e) => setInfoUser({...infoUser, lastname: e.target.value})}/>
                    </td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoUser.identification}
                        onChange={(e) => setInfoUser({...infoUser, identification: e.target.value})}/>
                    </td>
                <td>
                    <select className="form-control form-select" name="rol"  
                        defaultValue={infoUser.rol}
                        onChange={(e) => setInfoUser({...infoUser, rol: e.target.value})} required >
                        <option disabled value="">Seleccione una opción</option>
                        <option>VENDEDOR</option>
                        <option>ADMIN</option>
                    </select>
                    {/* <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoUser.rol}
                        onChange={(e) => setInfoUser({...infoUser, rol: e.target.value})}/> */}
                    </td>
                <td>
                    <select className="form-control form-select" 
                            name="state" 
                            defaultValue={infoUser.state}
                            onChange={(e) => setInfoUser({...infoUser, state: e.target.value})} required >
                        <option disabled value="">Seleccione una opción</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                    </select>
                </td>
            </>
        ):(
        <>
            <td>{user.inc}</td>
            <td >{user.name}</td>
            <td>{user.lastname}</td>
            <td>{user.identification}</td>
            <td>{user.rol}</td>
            <td>{user.state}</td>
        </>
        )}
        <td>
            <div className = 'd-flex justify-content-around w-100'> 

            {/* <i className="fa fa-eye iconEyePencil"></i> */}
                {edit? (
                <>
                    <Tooltip title='Confirmar Edición' arrow>
                        <i onClick={() => userUpdate()} className="fas fa-check iconCheck"/>
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
                        <button onClick={ ()=> {userDelete()}} className='btn btn-md buttonDialog'>Sí</button>
                        <button onClick={() => {setOpenDialog(false)}} className='btn btn-md buttonDialogNo'>No</button>
                    </div>
                </div>
            </Dialog>
        </td>
    </tr>
    )
}

// FORMULARIO CREACION NUEVO USUARIO
const FormUsers =({setShowTable}) => {

    //ESTADOS 
    const [validated, setValidated] = React.useState('');

    //obtener formulario mediante ref
    const form = useRef(null);

    const  handleSubmit = async (event) => {
        
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
            newUser[key]= value; 
        })

        //ENVIAR AL BACKEND
        await createUser(
             newUser
            ,
            (response) => {
              console.log(response.data);
              setShowTable(true);
              toast.success('Usuario agregado con éxito');
            },
            (error) => {
              console.error(error);
              toast.error('Error creando un usuario');
            }
          );
        // console.log(newUser)
        // setUsers([...listaUsuarios, newUser])
        }
        setValidated("was-validated");
      };

    return (
        <div className="col-12 col-md-12 col-lg-12">
            <form ref={form} className={`${validated} row g-3 needs-validation`} onSubmit={handleSubmit} noValidate>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name='name' placeholder="Pepito" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un Nombre.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label">Apellido</label>
                    <input type="text" name='lastname' className="form-control" placeholder="Perez"  required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un Apellido.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="identification" className="form-label">Identificación</label>
                    <div className="input-group has-validation">
                    <input type="text" name='identification' className="form-control" placeholder="12345678" required/>
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca una identificación.
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="rol" className="form-label">Rol</label>
                    {/* <input type="text" className="form-control" id="rol" required/> */}
                    <select className="form-control form-select" name="rol" defaultValue={''} required >
                        <option disabled value="">Seleccione una opción</option>
                        <option>VENDEDOR</option>
                        <option>ADMIN</option>
                    </select>
                    <div className="invalid-feedback">
                    <div className="valid-feedback">
                    Correcto!
                    </div>
                    Introduzca un Rol para el Usuario.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="state" className="form-label">Estado</label>
                    <select className="form-control form-select" name="state" defaultValue={''} required >
                        <option disabled value="">Seleccione una opción</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                    </select>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                     Seleccione un Estado para el Usuario.
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </div>
            </form>
        </div>
    )
}

