import {ModalSales as ModalSales} from 'components/ModalSales';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'styles/sales.css';

 export const Sales= () => {

    const ventas = [{id: 001,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: '25/10/2015', Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 001,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 001,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 001,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 001,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    {id: 001,Valor:10500,ProductoId: 2001, Cantidad: 2, PrecioUnitario:5250, Date: 25/10/2015, Cliente:'Tomas Contreras', ClienteId: 1090452106, Vendedor: 'Andres'},
    ];

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


    function filterid({id}) {
    return id.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };

    const filterCliente = ({Cliente}) => {
        return Cliente.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };

    const filterClienteId = ({ClienteId}) => {
        return ClienteId.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    };

     //   MAPEO PARA AGREGAR NUMERO A CADA VENTA
    ventas.map( (sales,index) => {
        // console.log(index);
        return sales.inc = index+1;
    });

        return (
            <div>
                <div className="container-fluid">
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
                <i className="fa fa-user-plus"></i>ADDICIONAR VENTA
            </button> */}
                            <ModalSales showModal={isOpen}></ModalSales>
                        </div>
                        
                </div>
             </div>
             {/* TABLA RESPONSIVE PARA VENTAS REGISTRADAS Y BOTENES EDITAR ELIMINAR */}
             <div className="table-responsive">
                <table data-toggle="table" className="table table-striped table-hover "
                 data-toolbar="#toolbar" 
                 data-filter-control="true" 
                 data-filter-control-container="#filter">
                    <thead className="tableStyle">
                        <tr>
                            <th className="thTableId">id</th>
                            <th className="thTable">Valor</th>
                            <th className="thTable">ProductoId</th>
                            <th className="thTable">Cantidad</th>
                            <th className="thTable">PrecioUnitario</th>
                            <th className="thTable">Date</th>
                            <th className="thTable">Cliente</th>
                            <th className="thTable">ClienteId</th>
                            <th className="thTable">Vendedor</th>
                            <th className= "thTableAcciones" colSpan="3">Acciones</th>
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
                        {Ventas.filter(filterid).map(item => (
                            <tr key={item.id, item.Cliente, item.ClienteId}>
                                <th scope="row">{item.inc}</th>
                                <td >{item.Valor}</td>
                                <td>{item.ProductId}</td>
                                <td>{item.Cantidad}</td>
                                <td>{item.PrecioUnitario}</td>
                                <td>{item.Date}</td>
                                <td>{item.Cliente}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.Vendedor}</td>
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
