import '../styles/login.css';

// FUNCION PARA LOGUEARSE
export function Login () {
    const login = () => {
        console.log('Se hizo click');
        window.location.href= "./Home"
      }
    return (
        <div className= "container">
            <form action="index.html" class="form-box animated fadeInUp">
                <h1 className= "titulo"> Login </h1>
                <input type="text" placeholder="Correo o Usuario" autofocus/>
                <input type="password" placeholder="Contraseña"/>
                <button onClick={login}> INICIAR SESION </button>
                <p>¿No tienes una cuenta?</p>
                {/*<a class="regbtn" href="./Registro/registro.html">
                ¡Registrate aqui!</a>*/}
            </form>
        </div>   
    );
}