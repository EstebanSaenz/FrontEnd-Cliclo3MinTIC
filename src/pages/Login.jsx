import React, { Component } from 'react'
import '../styles/login.css'

export class Login extends Component {

    // FUNCION PARA LOGUEARSE
    login = () => {
        // console.log('Se hizo click');
        window.location.href= "./admin"
      }
      
    render() {
        return (
            <div>
                <h1>ESTE ES EL LOGIN</h1>
                <button className="botonGenerico mainButton" onClick={this.login}>LOGIN</button>
            </div>
        )
    }
}
export default Login;


