import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect} from 'react';
import 'styles/sales.css';
import { FormSales } from 'components/FormSales';

 export const Sales= () => {

    const ventas = [{id:1,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 2,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 3,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 4,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 5,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 6,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    ];
    const [sales, setSales] = React.useState([]);

    const [mostrarTabla, setMostrarTabla] = React.useState(true);
    const [textButton, setTextButton] = React.useState("Crear Nuevo Usuario");
    const [iconButton, setIconButton] = React.useState("fa fa-user-plus")

    //LISTADO VENTAS REGISTRADAS
    useEffect(() => {
        setSales(ventas)
    }, [])

    // CAMBIO DE TEXTO E ICONOS EN TBALA Y FORM VENTAS
    useEffect(() => {
        if (mostrarTabla) {
            setTextButton("Crear Nueva Venta");
            setIconButton("fas fa-cart-arrow-down px-1")
        } else {
         setTextButton("Listar Ventas");
         setIconButton("fa fa-list px-2")
        }
     }, [mostrarTabla])

     //  MAPEO PARA AGREGAR NUMERO A CADA VENTA
    ventas.map( (sales,index) => {
        return sales.inc = index+1;
    });

        return (
            <div>
                <div className="container-fluid">
                <div className="text-center">
                    <h1 className="title py-3">GESTION VENTAS</h1>
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
                        {mostrarTabla ? <TableSales listaVentas={sales}/> : <FormSales/>}
                    </div>
             </div>
         </div>
            
        )
}

const TableSales = ({listaVentas}) => {
    
    // FILTRO BUSQUEDA EN TABLA
    const [searchValue, setSearchValue] = React.useState("");
    const handleChange = event => {
       setSearchValue(event.target.value);
     }; 
    return (
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
                            <th className="thTableIdSales">#</th>
                            <th className="thTableSales">Valor</th>
                            <th className="thTableSales">Producto Id</th>
                            <th className="thTableSales">Cantidad</th>
                            <th className="thTableSales">Precio Unitario</th>
                            <th className="thTableSales">Date</th>
                            <th className="thTableSales">Cliente</th>
                            <th className="thTableSales">Cliente Id</th>
                            <th className="thTableSales">Vendedor</th>
                            <th className= "thTableAccionesSales" colSpan="3">Acciones</th>
                        </tr>
                    </thead>
                        {/* <tbody>
                            {
                            ventas.map((sales,index) => (
                            <tr>
                                <th scope="row">{sales.inc}</th>
                                <td >{sales.Id}</td>
                                <td>{sales.Cliente}</td>
                                <td>{sales.Id-Cliente}</td>
                            </tr>
                               ))
                            }
                        </tbody> */}
                        <tbody>
                        {listaVentas.map(item => (
                            <tr key={item.id}>
                                <th scope="row">{item.inc}</th>
                                <td >{item.Valor}</td>
                                <td>{item.ProductoId}</td>
                                <td>{item.Cantidad}</td>
                                <td>{item.PrecioUnitario}</td>
                                <td>{item.Date}</td>
                                <td>{item.Cliente}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.Vendedor}</td>
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

