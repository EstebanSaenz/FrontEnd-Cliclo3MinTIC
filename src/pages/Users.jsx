
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormUsers } from 'components/FormUsers';
import React, { useState, useEffect } from 'react';
import 'styles/users.css';

 export const Users= () => {

    const usuarios = [{id: 1,Nombre:'Daniel',Apellido: 'Zemanate', Identificación: 19028753, Rol:"Administrador", Estado:"Autorizado"},
    {id:2,Nombre:'Valery',Apellido: 'Rivera', Identificación: 12674890, Rol:"Vendedor", Estado:"Pendiente"},
    {id:3,Nombre:'Candy',Apellido: 'Rivera', Identificación: 172093865, Rol:"Vendedor", Estado:"Rechazado"},
    {id:4,Nombre:'Anderson',Apellido: 'Trujillo', Identificación: 1098276538, Rol:"Vendedor", Estado:"Autorizado"},
    {id:5,Nombre:'Juliana',Apellido: 'Lopez', Identificación: 152793087, Rol:"Administrador", Estado:"Rechazado"},
    {id:6,Nombre:'Daniel',Apellido: 'Zemanate', Identificación: 1061892620, Rol:"Vendedor", Estado:"Pendiente"},
    {id:7,Nombre:'Valery',Apellido: 'Rivera', Identificación: 107628290, Rol:"Vendedor", Estado:"Rechazado"},
    {id:8,Nombre:'Candy',Apellido: 'Rivera', Identificación: 102826382, Rol:"Vendedor", Estado:"Pendiente"},
    {id:9,Nombre:'Anderson',Apellido: 'Trujillo', Identificación: 1092835749, Rol:"Administrador", Estado:"Autorizado"},
    {id:10,Nombre:'Juliana',Apellido: 'Lopez', Identificación: 1061920273, Rol:"Vendedor", Estado:"Pendiente"}, ];

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Nuevo Usuario");
    const [iconButton, setIconButton] = useState("fa fa-user-plus")
    const [users, setUsers] = useState([])

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
                        <div className="px-5 col-3 col-md-3">
                            <button type="button" className="btn btn-primary btn-block"
                            onClick={()=> {
                                setMostrarTabla(!mostrarTabla);
                            }} >
                                <i className={iconButton}></i>{textButton}
                            </button>
                        </div>
                        {mostrarTabla ? <TableUsers listaUsuarios={users}/> : <FormUsers/>}
                    </div>
             </div>         
         </div>
            
        )
}

const TableUsers = ({listaUsuarios}) => {
    // useEffect(() => {
    //     console.log(listaUsuarios)
    // }, [listaUsuarios])

     // FILTRO BUSQUEDA EN TABLA
     const [searchValue, setSearchValue] = React.useState("");

     const handleChange = event => {
        setSearchValue(event.target.value);
      };
 
     //  FILTRAR POR NOMBRE
     const filterNames = ({Nombre}) => {
         return Nombre.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
       };
 
      // MAPEO PARA AGREGAR NUMERO A CADA USUARIO
      listaUsuarios.map( (users,index) => {
         return users.inc = index+1;
     });
    return(

        <>
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
                        <td>{users.Apellido}</td>
                        <td>{users.Identificación}</td>
                    </tr>
                       ))
                    }
                </tbody> */}
                <tbody>
                {listaUsuarios.filter(filterNames).map(item => (
                    <tr key={item.id}>
                        <th scope="row">{item.inc}</th>
                        <td >{item.Nombre}</td>
                        <td>{item.Apellido}</td>
                        <td>{item.Identificación}</td>
                        <td>{item.Rol}</td>
                        <td>{item.Estado}</td>
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
