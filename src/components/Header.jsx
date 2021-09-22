import React, { Component } from 'react'
import '../styles/home.css'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';

export class Header extends Component {
    handleLogout = () => {
        window.location.href= "./"
    }
    render() {
        return (
            <div>
                <ul className="navbar">
                    <li>
                        <Link to="/home">
                            <img src={logo} alt="imagen" className="logo" />
                        </Link>
                    </li>
                    <li>
                        <button className="botonGenerico mainButton">Nuevo post</button>
                    </li>
                    <li>
                        <div className="buscar">
                            <input placeholder="Buscar una raza" />
                            <i className="fas fa-search botonGenerico iconoBusqueda"></i>
                        </div>
                    </li>
                     <li>
                         <Link to="/users">
                         <button className="botonGenerico secondaryButton" >Usuarios</button>
                         </Link>
                    </li>
                    <li>
                    <button 
                        className="btn btn-outline-danger"
                        onClick= { this.handleLogout }
                    >
                        <i className="fas fa-sign-out-alt"></i>
                        <span> Salir</span>
                    </button>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Header;