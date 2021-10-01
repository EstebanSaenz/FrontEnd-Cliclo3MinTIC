import React from 'react';
import Google from '../assets/image/google_logo.png';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
  return (
    <div className= 'divPadre'>
      <div className='contlog'>
        <h3 className='logo'>
          LOGO
        </h3>
        <form className='formulario'>
          <input type='hidden' name='remember' defaultValue='true' />
          <div className='secdiv'>
            <div>
              <input
                name='email'
                type='email'
                autoComplete='email'
                required
                className='campo correo'
                placeholder='Correo Electrónico'
              />
            </div>
            <div>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                required
                className='campo contra'
                placeholder='Contraseña'
              />
            </div>
          </div>
          <div>
            <button
              type='submit'
              className= 'boton' >
              <Link to='/Home'>Iniciar sesión</Link>
            </button>
          </div>

          <div className='regdiv'>
            <span>¿No tienes cuenta?</span>
            <Link to='/'>
              <span className='regbtn'>Regístrate</span>
            </Link>
          </div>
        </form>
      </div>
      <div className='interdiv'>
        <span className='interspan'>--------------</span>
        <h4 className='interH'> O </h4>
        <span className='interspan'>--------------</span>
      </div>
      <div className='googlediv'>
        <div>
          <button
            type='submit'
            className='googlebtn'
          >
            <div className='gglindiv'>
              <img src={Google} alt='Logo Google' className='googleimg' />
              <span className='gglspan'>Inicia con Google</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
