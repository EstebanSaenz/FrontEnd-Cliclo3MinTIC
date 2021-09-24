import React, { Component } from 'react'
import 'styles/header.css'
import logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom';

export class Header extends Component {
    handleLogout = () => {
        window.location.href= "./"
    }

    // onScroll = function(){

    //     const scroll = document.documentElement.scrollTop;
    
    //     // const header = document.getElementById("header");
    //     this.header = React.createRef()
    //     if (scroll > 20){
    //         this.header.classList.add('nav_mod');
    //     }else if(scroll < 20){
    //         this.header.classList.remove('nav_mod');
    //     }
    
    // }


    render() {
        return (
            <header className="header" ref={this.header}>
                <div className="container__header">
                    <div className="logo">
                        <img src={logo} alt=""></img>
                    </div>
                    <div className="container__nav">
                        <nav id="nav">
                            <ul>
                                <Link to="/home" className="select"><li>HOME</li></Link>
                                <Link to="/users" className="link"><li>USERS</li></Link>
                                <Link to="/" className="link"><li>LOGIN</li></Link>
                                <li>
                                <button className="btn btn-outline-danger button"onClick= { this.handleLogout }>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span> LOGOUT</span>
                                </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            // <div>
            //     <ul className="navbar">
            //         <li>
            //             <Link to="/home">
            //                 <img src={logo} alt="imagen" className="logo" />
            //             </Link>
            //         </li>
            //         <li>
            //             <button className="botonGenerico mainButton">Nuevo post</button>
            //         </li>
            //         <li>
            //             <div className="buscar">
            //                 <input placeholder="Buscar una raza" />
            //                 <i className="fas fa-search botonGenerico iconoBusqueda"></i>
            //             </div>
            //         </li>
            //          <li>
            //              <Link to="/users">
            //              <button className="botonGenerico secondaryButton" >Usuarios</button>
            //              </Link>
            //         </li>
            //         <li>
            //         <button 
            //             className="btn btn-outline-danger button"
            //             onClick= { this.handleLogout }
            //         >
            //             <i className="fas fa-sign-out-alt"></i>
            //             <span> Salir</span>
            //         </button>
            //         </li>
            //     </ul>
            // </div>
        )
    }
}
export default Header;