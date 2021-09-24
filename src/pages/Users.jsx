import ModalUsers from 'components/ModalUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import 'styles/users.css'
 export const Users= () => {


    const usuarios = [{id: 1,Nombre:'Daniel',Apellido: 'Zemanate', Edad: 26},
    {id:2,Nombre:'Valery',Apellido: 'Rivera', Edad: 22},
    {id:3,Nombre:'Candy',Apellido: 'Rivera', Edad: 17},
    {id:4,Nombre:'Anderson',Apellido: 'Trujillo', Edad: 32},
    {id:5,Nombre:'Juliana',Apellido: 'Lopez', Edad: 67},
    {id:6,Nombre:'Daniel',Apellido: 'Zemanate', Edad: 26},
    {id:7,Nombre:'Valery',Apellido: 'Rivera', Edad: 22},
    {id:8,Nombre:'Candy',Apellido: 'Rivera', Edad: 17},
    {id:9,Nombre:'Anderson',Apellido: 'Trujillo', Edad: 32},
    {id:10,Nombre:'Juliana',Apellido: 'Lopez', Edad: 67}, ];

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
                <div className="container">
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
                         <ModalUsers></ModalUsers>
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
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Edad</th>
                            <th colSpan="3">Acciones </th>
                        </tr>
                    </thead>
                        {/* <tbody>
                            {
                            usuarios.map((users,index) => (
                            <tr>
                                <th scope="row">{users.inc}</th>
                                <td >{users.Nombre}</td>
                                <td>{users.Apellido}</td>
                                <td>{users.Edad}</td>
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
                                <td>{item.Edad}</td>
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
         </div>
            
        )
}
