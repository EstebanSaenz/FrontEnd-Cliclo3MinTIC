import 'bootstrap/dist/css/bootstrap.min.css';
import { FormProducts } from 'components/FormProducts';
import React, { useState, useEffect } from 'react';
import 'styles/products.css';

 export const Products= () => {

    const Productos = [
                        {id: 1,Producto:'Joger AlxKing', Categoria:'Prendas inferiores', Medida:'Unidad', Precio: 35000, Impuesto:19, Estado:"Activo"},
                        {id: 2,Producto:'Pat Boxer AlxKing x 3', Categoria:'Prendas intimas', Medida:'Paquete', Precio: 32800, Impuesto:19, Estado:"Activo"},
                        {id: 3,Producto:'Falda Matilda Quart', Categoria:'Prendas inferiores', Medida:'Unidad', Precio: 32800, Impuesto:19, Estado:"Activo"},  
                        {id: 4,Producto:'Jean Albert', Categoria:'Prendas inferiores', Medida:'Unidad', Precio: 56000, Impuesto:19, Estado:"Activo"},  
                        {id: 5,Producto:'Brasier Invi', Categoria:'Prendas intimas', Medida:'Unidad', Precio: 14000, Impuesto:19, Estado:"Activo"}, 
                        {id: 6,Producto:'Panty tentación', Categoria:'Prendas inferiores', Medida:'Unidad', Precio: 14500, Impuesto:19, Estado:"Activo"},
];

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Producto");
    const [iconButton, setIconButton] = useState("fa fa-user-plus")
    const [users, setProducts] = useState([])

    //LISTADO PRODUCTOS REGISTRADOS
    useEffect(() => {
        setProducts(Productos)
    }, [])

    useEffect(() => {
       if (mostrarTabla) {
           setTextButton("Crear Producto");
           setIconButton("fa fa-user-plus px-1")
       } else {
        setTextButton("Listar Productos");
        setIconButton("fa fa-list px-2")
       }
    }, [mostrarTabla])

        return (
            <div>
                <div className="containerProducts">
                    <div className="text-center">
                        <h1 className="title py-3">GESTION PRODUCTOS</h1>
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
                        {mostrarTabla ? <TableUsers listaProductos={users}/> : <FormProducts/>}
                    </div>
             </div>         
         </div>
            
        )
}

const TableUsers = ({listaProductos}) => {
    // useEffect(() => {
    //     console.log(listaProductos)
    // }, [listaProductos])

     // FILTRO BUSQUEDA EN TABLA
     const [searchValue, setSearchValue] = React.useState("");

     const handleChange = event => {
        setSearchValue(event.target.value);
      };
 
     //  FILTRAR POR Producto
     const filterNames = ({Producto}) => {
         return Producto.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
       };
 
      // MAPEO PARA AGREGAR NUMERO A CADA Producto
      listaProductos.map( (users,index) => {
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
                    <th className="thTable">Producto</th>
                    <th className="thTable">Categoría</th>
                    <th className="thTable">Medida</th>
                    <th className="thTable">Precio</th>
                    <th className="thTable">Impuesto</th>
                    <th className="thTable">Estado</th>
                    <th className= "thTableAcciones" colSpan="3">Acciones</th>
                </tr>
            </thead>
                {/* <tbody>
                    {
                    Productos.map((users,index) => (
                    <tr>
                        <th scope="row">{users.inc}</th>
                        <td >{users.Producto}</td>
                        <td>{users.Apellido}</td>
                        <td>{users.Identificación}</td>
                    </tr>
                       ))
                    }
                </tbody> */}
                <tbody>
                {listaProductos.filter(filterNames).map(item => (
                    <tr key={item.id}>
                        <th scope="row">{item.inc}</th>
                        <td >{item.Producto}</td>
                        <td>{item.Categoria}</td>
                        <td>{item.Medida}</td>
                        <td>{item.Precio}</td>
                        <td>{item.Impuesto}%</td>
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