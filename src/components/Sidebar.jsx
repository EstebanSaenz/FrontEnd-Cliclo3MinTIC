import React from 'react'
import { NavLink } from 'react-router-dom'
import 'styles/sidebar.css'

export const Sidebar = () => {

    //AGREGAR RUTAS NUEVAS, SU NOMBRE E ICONO PARA EL SIDEBAR
    const routeSidebar = [
    {ruta:"/admin/users", nombre:"Usuarios", icon:"fas fa-users"},
    {ruta:"/admin/sales", nombre:"Ventas", icon:"fas fa-shopping-cart"},
    {ruta:"/admin/products", nombre:"Productos", icon:"fas fa-list"},
    ]
    return (
        <div className='sidebar bg-light'>
            <ul>
                {/* SE RENDERIZA CADA UNO DE LOS COMPONENTES DEL SIDEBAR */}
                {routeSidebar.map((item,index) => (
                    <SidebarRoute key={index} ruta={item.ruta} nombre={item.nombre} icon={item.icon}></SidebarRoute>
                    )
                )}
            </ul>
        </div>      
    )
}

// COMPONENTE NAVLINK PARA CADA COMPONENTE DEL SIDEBAR
const SidebarRoute = ({ruta,nombre,icon}) => {
    return(
        <li>
        <NavLink exact className='link text-dark w-100 py-2 px-3 rounded d-inline-block' activeClassName="active" to={ruta}><i class={`${icon} me-2`}></i>{nombre}</NavLink>
    </li> 
    )
}
