import React, { useState } from 'react'
import 'styles/sidebar.css'
import { Link } from 'react-router-dom'
import useActiveRoute from 'hooks/useActiveRoute'

const SidebarResponsive = () => {
    const routeSidebar = [
        {ruta:"/admin/users", nombre:"Usuarios", icon:"fas fa-users"},
        {ruta:"/admin/sales", nombre:"Ventas", icon:"fas fa-shopping-cart"},
        {ruta:"/admin/products", nombre:"Productos", icon:"fas fa-list"},
        ]
    const [showNavigation, setShowNavigation] = useState(false)
    return (
        //  {/* SIDEBAR PARA PANTALLAS PEQUEÑAS-MOVILES */}
        <div  className="iconSidebar" onClick={() => {setShowNavigation(!showNavigation)}}>
            <i className={`fas fa-${showNavigation? 'times' : 'bars'} py-2 px-2`}/>
            {showNavigation &&
                <ul>
                     {/* SE RENDERIZA CADA UNO DE LOS COMPONENTES DEL SIDEBAR */}
                     {routeSidebar.map((item,index) => (
                        <ResponsiveRoute key={index} ruta={item.ruta} nombre={item.nombre} icon={item.icon}/>
                        )
                    )}
                </ul>
            }
        </div>
    )
}

const ResponsiveRoute = ({ruta,nombre,icon}) => {
    const isActive = useActiveRoute(ruta)
    return (
        <Link className={` ${isActive ? 'active' : 'link'} text-dark w-100 rounded d-flex justify-content-center`} to={ruta}>
            <li><i className={`${icon} me-2`}/>{nombre}</li>
        </Link>
    )
}

export default SidebarResponsive;
