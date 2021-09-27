import {ModalUsers} from 'components/ModalUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
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

    const [isOpen, setIsOpen] = React.useState(false);

    // const showModal = () => {
    //     setIsOpen(true);      
    //   };
    // const showModal = false;

    const click = () => {
        setIsOpen(true)
        // console.log(isOpen)
    }
    // const {showModal} = this.props;

    // FILTRO BUSQUEDA EN TABLA
    const [searchValue, setSearchValue] = React.useState("");

    const handleChange = event => {
       setSearchValue(event.target.value);
     };


    const filterNames = ({Nombre}) => {
        return Nombre.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
      };
     //   MAPEO PARA AGREGAR NUMERO A CADA USUARIO
    usuarios.map( (users,index) => {
        // console.log(index);
        return users.inc = index+1;
    });

        return (
            <div>
                <div className="containerUser">
                    <div className="row">
                        <div className="col-9 col-md-9 col-sm-2">
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
                        <div className="col-3 col-md-3 col-sm-2">
                        {/* <button type="button" className="btn btn-primary btn-block" onClick={showModal} >
                <i className="fa fa-user-plus"></i>ADD USER
            </button> */}
                            <ModalUsers showModal={isOpen}></ModalUsers>
                        </div>
                        
                </div>
             </div>
             {/* TABLA RESPONSIVE PARA USUARIOS REGISTRADOS Y BOTENES EDITAR ELIMINAR */}
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
                        {usuarios.filter(filterNames).map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.inc}</th>
                                <td >{item.Nombre}</td>
                                <td>{item.Apellido}</td>
                                <td>{item.Identificación}</td>
                                <td>{item.Rol}</td>
                                <td>{item.Estado}</td>
                                <td>
                                    <button type="button" className="btn buttonTable" onClick={click}>
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
         </div>
            
        )
}
