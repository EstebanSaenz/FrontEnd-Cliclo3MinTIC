
import React, { useState, useEffect,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog } from '@mui/material';
import { nanoid } from 'nanoid';
import {getProducts} from 'utils/api'
import axios from 'axios';
import Tooltip from '@mui/material/Tooltip';
import 'styles/products.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Products= () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [textButton, setTextButton] = useState("Crear Nuevo Producto");
    const [iconButton, setIconButton] = useState("fa fa-plus-circle px-1");
    const [products, setProducts] = useState([]);

    // ESTADO PARA TRAER TODOS LOS PRODUCTOS BD
    const [runQuery, setRunQuery] = useState(true);

    //GET TRAER TODOS LOS PRODUCTOS MEDIANTE ESTADOS
      useEffect(() => {
         if (runQuery) {
            getProducts(setProducts, setRunQuery)
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
           setTextButton("Crear Nuevo Producto");
           setIconButton("fa fa-plus-circle px-1")
       } else {
        setTextButton("Listar Productos");
        setIconButton("fa fa-list px-2")
       }
    }, [mostrarTabla])

        return (
            <div>
                <div className="containerUser">
                    <div className="text-center">
                        <h1 className="title py-1">GESTION PRODUCTOS</h1>
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
                                {mostrarTabla ? (<TableProducts listProducts={products} setRunQuery={setRunQuery} /> 
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

const TableProducts = ({listProducts, setRunQuery}) => {

    //FILTRO BUSQUEDA
    const [search, setSearch] = useState('');
    const [productsFilters, setProductsFilters] = useState(listProducts);
  
    useEffect(() => {
        setProductsFilters(
            listProducts.filter((elemento) => {
          return JSON.stringify(elemento).toLowerCase().includes(search.toLowerCase());
        })
      );
    }, [search, listProducts]);

      // MAPEO PARA AGREGAR NUMERO A CADA USUARIO
      listProducts.map( (products,index) => {
         return products.inc = index+1;
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
                        <th>Producto</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th colSpan="2">Acciones</th>
                    </tr>
                </thead>
                    <tbody>
                        {productsFilters.map(item => {
                            return (
                        <TableRow key={nanoid()} product={item} setRunQuery={setRunQuery}/>
                            );
                        })}
                    </tbody>
            </table>
        </div>
        {/* CARDS PARA PANTALLAS MOVILES */}
        <div className='divCardsTable'>
        {productsFilters.map((item) => {
          return (
            <div className="card" key={nanoid()}>
                <div className="card-body">
                    <h4 className="card-title">{item.product}</h4>
                    <p className="card-text"><b>Categoria:</b> {item.category}</p>
                    <p className="card-text"><b>Precio:</b> {item.price}</p>
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
const TableRow = ({product, setRunQuery}) => {
    //    ESTADOS
    const [edit, setEdit] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [infoProduct, setInfoProduct] =useState({
        // _id: user._id,
        product:product.product,
        category:product.category,
        price:product.price,
        state:product.state,
    });

    //FUNCIONES

    // ACTUALIZAR USUARIO
    const updateProduct = async () => {
        //enviar la info al backend
    const options = {
        method: 'PATCH',
        // url: `http://localhost:5000/users${user._id}/`,
        url: `http://localhost:5000/products/${product._id}`,
        headers: { 'Content-Type': 'application/json' },
        data: { ...infoProduct },
      };
  
      await axios
        .request(options)
        .then(function (response) {
        //   console.log(response.data);
          toast.success('PRODUCTO EDITADO CON ÉXITO')
          setEdit(false);
          setRunQuery(true)
        })
        .catch(function (error) {
          toast.error('Error modificando el Producto');
          console.error(error);
        });
        
    }

    //ELIMINAR USUARIO
    const deleteProduct = async() => {
        const options = {
            method: 'DELETE',
            url: `http://localhost:5000/products/${product._id}`,
            headers: { 'Content-Type': 'application/json' },
            data: { id: product._id },
          };
      
          await axios
            .request(options)
            .then(function (response) {
            //   console.log(response.data);
              toast.success('Producto eliminado con éxito');
              setRunQuery(true)
              setOpenDialog(false)
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error eliminando el producto');
            });
        
    }
    return(
    <tr>
        {edit? (
            <>
                <td>{product.inc}</td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoProduct.product}
                        onChange={(e) => setInfoProduct({...infoProduct, product: e.target.value})}/>
                </td>
                <td>
                    <select className="form-control" name="category" defaultValue={infoProduct.category}
                    onChange={(e) => setInfoProduct({...infoProduct, category: e.target.value})} required>
                        <option selected disabled value="">Seleccione una opción</option>
                        <option >Sin categoría</option>
                        <option >Computers</option>
                        <option >Printers</option>
                        <option >Screens</option>
                        <option >Phone</option>
                    </select>
                    {/* <input 
                    className="form-control" 
                    type='text' 
                    defaultValue={infoProduct.category}
                    onChange={(e) => setInfoProduct({...infoProduct, category: e.target.value})}/> */}
                    </td>
                <td>
                    <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoProduct.price}
                        onChange={(e) => setInfoProduct({...infoProduct, price: e.target.value})}/>
                </td>
                <td>
                    <select className="form-control form-select" name="state" defaultValue={infoProduct.state}
                        onChange={(e) => setInfoProduct({...infoProduct, state: e.target.value})} required  >
                        <option selected disabled value="">Seleccione una opción</option>
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    {/* <input 
                        className="form-control" 
                        type='text' 
                        defaultValue={infoProduct.state}
                        onChange={(e) => setInfoProduct({...infoProduct, state: e.target.value})}/> */}
                </td>
            </>
        ):(
        <>
            <td>{product.inc}</td>
            <td >{product.product}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.state}</td>
        </>
        )}
        <td>
            <div className = 'd-flex justify-content-around w-100'> 

            {/* <i className="fa fa-eye iconEyePencil"></i> */}
                {edit? (
                <>
                    <Tooltip title='Confirmar Edición' arrow>
                        <i onClick={() => updateProduct()} className="fas fa-check iconCheck"/>
                    </Tooltip>
                    <Tooltip title='Cancelar Edición' arrow>
                    <i onClick={() => setEdit(!edit)} className="fas fa-ban iconEyePencil"></i>
                    </Tooltip>
                </>
                ):(
                <>
                    <Tooltip title='Editar Producto' arrow>
                        <i onClick={() => setEdit(!edit)} className="fas fa-pencil-alt iconEyePencil"></i>
                    </Tooltip>
                    <Tooltip title='Eliminar Producto' arrow>
                        <i onClick={() => setOpenDialog(true)} className="fas fa-trash-alt iconTrash"></i>
                    </Tooltip>
                </>
                ) }
            </div>
            <Dialog open={openDialog}>
                <div className='d-flex flex-column divDialog '>
                    <h2>¿Está seguro de ELIMINAR el producto?</h2>
                    <div className='divButtonDialog'>
                        <button onClick={ ()=> {deleteProduct()}} className='btn btn-md buttonDialog'>Sí</button>
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
        const newProduct={};

        // OBTENER DATOS DE FORMULARIO
        const fd = new FormData(form.current)

        //RECOREER CADA UNO DE LOS VALORES y AGREGAR AL NUEVOUSUARIO QUE CREAMOS newUser={}
        fd.forEach((value,key) => {
            newProduct[key]= value; 
        })

        //ENVIAR AL BACKEND
        const options = {
            method: 'POST',
            url: 'http://localhost:5000/products',
            headers: { 'Content-Type': 'application/json' },
            data: { product: newProduct.product, category: newProduct.category, price:newProduct.price, state:newProduct.state },
          };
      
          await axios
            .request(options)
            .then(function (response) {
            //   console.log(response.data);
              toast.success('Producto agregado con éxito');
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error creando el producto');
            });

        // console.log(newUser)
        setShowTable(true);
        // setUsers([...listaUsuarios, newUser])
        }
        setValidated("was-validated");
      };

      return (
        <div className="col-12 col-md-12 col-lg-12">
            <form ref={form} className={`${validated} row g-3 needs-validation`} onSubmit={handleSubmit} noValidate>
                <div className="col-md-5">
                    <label htmlFor="product" className="form-label">Nombre del producto</label>
                    <input type="text" className="form-control" name='product' placeholder="Nombre del producto" required />
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Introduzca un nombre para el producto.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="category" className="form-label">Categoría</label>
                    <select className="form-control" name="category" required>
                        <option selected disabled value="">Seleccione una opción</option>
                        <option >Sin categoría</option>
                        <option >Computers</option>
                        <option >Printers</option>
                        <option >Screens</option>
                        <option >Phone</option>
                    </select>
                    <div className="valid-feedback">
                        Correcto!
                    </div>
                    <div className="invalid-feedback">
                        Seleccione una opción de la lista.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="price" className="form-label">Precio unitario</label>
                    <input type="number" className="form-control" name="price" min="0" required />
                    <div className="invalid-feedback">
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        Introduzca un precio de venta para el Producto.
                    </div>
                </div>
                <div className="col-md-5">
                    <label htmlFor="state" className="form-label">Estado</label>
                    <select className="form-control form-select" name="state" required >
                        <option selected disabled value="">Seleccione una opción</option>
                        <option>Disponible</option>
                        <option>No Disponible</option>
                    </select>
                    <div className="invalid-feedback">
                        <div className="valid-feedback">
                            Correcto!
                        </div>
                        Seleccione si el producto esta o no disponible.
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    )
}



 