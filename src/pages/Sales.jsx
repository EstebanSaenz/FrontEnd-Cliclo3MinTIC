
import React, { useState, useEffect,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog } from '@mui/material';
import { nanoid } from 'nanoid';
import {getSales} from 'utils/api'
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import 'styles/sales.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Sales= () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Nueva Venta");
    const [iconButton, setIconButton] = useState("fas fa-cart-arrow-down px-1");
    const [sales, setSales] = useState([]);

    // ESTADO PARA TRAER TODOS LOS USUARIOS BD
    const [runQuery, setRunQuery] = useState(true);

    //GET TRAER TODOS LOS VEHICULOS MEDIANTE ESTADOS
      useEffect(() => {
         if (runQuery) {
            getSales(setSales, setRunQuery)
         }
      }, [runQuery])

    //USEEFFECT MOSTRAR TABLA
    useEffect(() => {
        if(mostrarTabla) {
            setRunQuery(true);
        }   
    }, [mostrarTabla])

    useEffect(() => {
       if (mostrarTabla) {
           setTextButton("Crear Nueva Venta");
           setIconButton("fas fa-cart-arrow-down px-1")
       } else {
        setTextButton("Listar Ventas");
        setIconButton("fa fa-list px-2")
       }
    }, [mostrarTabla])

        return (
            <div>
                <div className="containerUser">
                    <div className="text-center">
                        <h1 className="title py-1">GESTION VENTAS</h1>
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
                                {mostrarTabla ? (<TableSales listSales={sales} setRunQuery={setRunQuery} /> 
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

const TableSales= ({listSales, setRunQuery}) => {

    //FILTRO BUSQUEDA
    const [search, setSearch] = useState('');
    const [salesFilters, setSalesFilters] = useState(listSales);
  
    useEffect(() => {
        setSalesFilters(
            listSales.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(search.toLowerCase());
        })
      );
    }, [search, listSales]);

      // MAPEO PARA AGREGAR NUMERO A CADA USUARIO
      listSales.map( (sales,index) => {
         return sales.inc = index+1;
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
                        <th>Cliente</th>
                        <th>Id Cliente</th>
                        <th>Valor Venta</th>
                        <th>Vendedor</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th colSpan="2">Acciones</th>
                    </tr>
                </thead>
                    <tbody>
                        {salesFilters.map(item => {
                            return (
                        <TableRow key={nanoid()} sale={item} setRunQuery={setRunQuery}/>
                            );
                        })}
                    </tbody>
            </table>
        </div>
        {/* CARDS PARA PANTALLAS MOVILES */}
        <div className='divCardsTable'>
        {salesFilters.map((item) => {
          return (
            <div className="card" key={nanoid()}>
                <div className="card-body">
                    <h4 className="card-title">{item.clientName}</h4>
                    <p className="card-text"><b>Identificacion Cliente:</b> {item.id_client}</p>
                    <p className="card-text"><b>Valor Total Venta:</b> {item.saleValue}</p>
                    <p className="card-text"><b>Vendedor:</b> {item.seller}</p>
                    <p className="card-text"><b>Estado Venta:</b> {item.state}</p>
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
const TableRow = ({sale, setRunQuery}) => {
    //    ESTADOS
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoSale, setInfosale] =useState({
        // _id: user._id,
        id_product:sale.id_product,
        quantityProduct:sale.quantityProduct,
        priceProduct:sale.priceProduct,
        saleValue:sale.saleValue,
        date:sale.date,
        clientName:sale.clientName,
        id_client:sale.id_client,
        seller:sale.seller,
        state:sale.state,
    });

    //FUNCIONES

    // ACTUALIZAR USUARIO
    const updateSale = async () => {
        //enviar la info al backend
    const options = {
        method: 'PATCH',
        // url: `http://localhost:5000/users${user._id}/`,
        url: `http://localhost:5000/sales/${sale._id}`,
        headers: { 'Content-Type': 'application/json' },
        data: { ...infoSale },
      };
  
      await axios
        .request(options)
        .then(function (response) {
        //   console.log(response.data);
          toast.success('Venta editada con éxito!')
          setEdit(false);
          setRunQuery(true)
        })
        .catch(function (error) {
          toast.error('Error modificando la venta');
          console.error(error);
        });
        
    }

    //ELIMINAR USUARIO
    const deleteSale = async() => {
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/sales/${sale._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { id: sale._id },
          };
      
          await axios
            .request(options)
            .then(function (response) {
            //   console.log(response.data);
              toast.success('Venta eliminada con éxito');
              setRunQuery(true)
              setOpenDialog(false)
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error eliminando la venta');
            });
        
    }
    return(
    <tr>
        {edit? (
            <>
                <td>{sale.inc}</td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoSale.clientName}
                        onChange={(e) => setInfosale({...infoSale, clientName: e.target.value})}/>
                </td>
                <td>
                <input 
                        className="form-control" 
                        type='number' 
                        defaultValue={infoSale.id_client}
                        onChange={(e) => setInfosale({...infoSale, id_client: e.target.value})}/>
                    </td>
                <td>
                    <input 
                        className="form-control" 
                        type='number' 
                        defaultValue={infoSale.saleValue}
                        onChange={(e) => setInfosale({...infoSale, saleValue: e.target.value})}/>
                </td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoSale.seller}
                        onChange={(e) => setInfosale({...infoSale, seller: e.target.value})}/>
                </td>
                <td>
                    <input 
                        className="form-control" 
                        type='date' 
                        defaultValue={infoSale.date}
                        onChange={(e) => setInfosale({...infoSale, date: e.target.value})}/>
                </td>
                <td>
                    <select className="form-control form-select" name="state" defaultValue={infoSale.state}
                        onChange={(e) => setInfosale({...infoSale, state: e.target.value})} required >
                        <option selected disabled value="">Seleccione una opción</option>
                        <option>En Proceso</option>
                        <option>Cancelada</option>
                        <option>Entregada</option>
                    </select>
                </td>
            </>
        ):(
        <>
            <td>{sale.inc}</td>
            <td >{sale.clientName}</td>
            <td >{sale.id_client}</td>
            <td>{sale.saleValue}</td>
            <td>{sale.seller}</td>
            <td>{sale.date}</td>
            <td>{sale.state}</td>
        </>
        )}
        <td>
            <div className = 'd-flex justify-content-around w-100'> 

            {/* <i className="fa fa-eye iconEyePencil"></i> */}
                {edit? (
                <>
                    <Tooltip title='Confirmar Edición' arrow>
                        <i onClick={() => updateSale()} className="fas fa-check iconCheck"/>
                    </Tooltip>
                    <Tooltip title='Cancelar Edición' arrow>
                    <i onClick={() => setEdit(!edit)} className="fas fa-ban iconEyePencil"></i>
                    </Tooltip>
                </>
                ):(
                <>
                    <Tooltip title='Editar Venta' arrow>
                        <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt iconEyePencil"></i>
                    </Tooltip>
                    <Tooltip title='Eliminar venta' arrow>
                        <i onClick={() => setOpenDialog(true)} className="fas fa-trash-alt iconTrash"></i>
                    </Tooltip>
                </>
                ) }
            </div>
            <Dialog open={openDialog}>
                <div className='d-flex flex-column divDialog '>
                    <h2>¿Está seguro de ELIMINAR la Venta?</h2>
                    <div className='divButtonDialog'>
                        <button onClick={ ()=> {deleteSale()}} className='btn btn-md buttonDialog'>Sí</button>
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
        const newSale={};

        // OBTENER DATOS DE FORMULARIO
        const fd = new FormData(form.current)

        //RECOREER CADA UNO DE LOS VALORES y AGREGAR AL NUEVOUSUARIO QUE CREAMOS newUser={}
        fd.forEach((value,key) => {
            newSale[key]= value; 
        })

        //ENVIAR AL BACKEND
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/sales',
            headers: { 'Content-Type': 'application/json' },
            data: { id_product: newSale.id_product, quantityProduct: newSale.quantityProduct, priceProduct:newSale.priceProduct, saleValue:newSale.saleValue, date:newSale.date, clientName:newSale.clientName, id_client:newSale.id_client, seller:newSale.seller, state:newSale.state },
          };
      
          await axios
            .request(options)
            .then(function (response) {
            //   console.log(response.data);
              toast.success('Venta agregada con éxito');
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error creando la Venta');
            });

        // console.log(newUser)
        setShowTable(true);
        // setUsers([...listaUsuarios, newUser])
        }
        setValidated("was-validated");
      };
      return (
        <div className="col-12 col-md-12 col-lg-12">
            <form ref={form} className={`${validated} row g-3 needs-validation`} noValidate onSubmit={handleSubmit}>
                <div className="col-md-5">
                    <label htmlFor="id_product" className="form-label">Identificacion de Producto</label>
                    <div className="input-group has-validation">
                    <input type="text" className="form-control" name="id_product" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el id del producto.
                    </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="quantityProduct" className="form-label">Cantidad</label>
                    <input type="number" className="form-control" name="quantityProduct" required/>
                    <div className="invalid-feedback">
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                        Introduzca el numero de productos. 
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="priceProduct" className="form-label">Precio Unitario</label>
                    <input type="number" className="form-control" name="priceProduct" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el precio unitario del producto.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="saleValue" className="form-label">Valor Total Venta</label>
                    <input type="number" className="form-control" name="saleValue"  required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el valor total de la venta.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="date" className="form-label">Fecha</label>
                    <input type="date" className="form-control" name="date" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Seleccione la fecha.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="clientName" className="form-label">Nombre del Cliente</label>
                    <input type="text" className="form-control" name="clientName" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el nombre del cliente.
                    </div>
                </div> 
                <div className="col-md-5">
                    <label htmlFor="id_client" className="form-label">Identificacion del Cliente</label>
                    <input type="text" className="form-control" name="id_client" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca la identificación del cliente.
                    </div>
                </div> 
                <div className="col-md-5">
                    <label htmlFor="seller" className="form-label">Vendedor</label>
                    <input type="text" className="form-control" name="seller" required/>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca el nombre del vendedor.
                    </div>
                </div> 
                <div className="col-md-5">
                    <label htmlFor="state" className="form-label">Estado</label>
                    <select className="form-control form-select" name="state" required >
                        <option selected disabled value="">Seleccione una opción</option>
                        <option>En Proceso</option>
                        <option>Cancelada</option>
                        <option>Entregada</option>
                    </select>
                    <div className="invalid-feedback">
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        Seleccione el estado de la venta.
                    </div>
                </div>          
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}



 