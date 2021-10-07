import React from 'react';
// import Google from '../assets/image/google_logo.png';
import { Link } from 'react-router-dom';
import '../styles/login.css'

const Login = () => {
  return (
    <div className="bg-color w-100">
      <Link to='/'><div className="mx-3 my-3"><li className="fas fa-home text-primary"></li></div></Link>
      <section className="container mt-5">
        <div className="row justify-content-md-center">
          <form className="col-md-6 col-sm-12 bg-white p-5 rounded shadow">
            <div className="col-12 text-center">
              <h3 className= "text-primary"><strong>INICIAR SESIÓN</strong></h3>
            </div>
            {/* EMAIL */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input type="email" className="form-control" id="email" />
            </div>
            {/* PASSWORD */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" />
            </div>
            {/* SUBMIT BUTTON */}
            <div className="text-center mt-3">
            <Link to='/admin/users'><button className="btn btn-primary btn-rounded w-75">INGRESAR</button></Link>
            </div>
            {/* OTHRE METHOD LOGIN */}
            <div className="text-center mt-3">
              o inicia sesión usando
            </div>
            {/* BUTTON GOOGLE AUTH */}
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-danger btn-rounded w-75">
                <i className="fab fa-google"></i>
                &nbsp;&nbsp;Google
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
    // <div className= 'divPadre'>
    //   <div className='divForm'>
    //     <h3 className='logo'>
    //       LOGO
    //     </h3>
    //     <form className='formulario'>
    //       <input type='hidden' name='remember' defaultValue='true' />
    //       <div className='divSec'>
    //         <div>
    //           <input
    //             name='email'
    //             type='email'
    //             autoComplete='email'
    //             required
    //             className='campo correo'
    //             placeholder='Correo Electrónico'
    //           />
    //         </div>
    //         <div>
    //           <input
    //             id='password'
    //             name='password'
    //             type='password'
    //             autoComplete='current-password'
    //             required
    //             className='campo contra'
    //             placeholder='Contraseña'
    //           />
    //         </div>
    //       </div>
    //       <div>
    //         <button type='submit' className= 'boton' >
    //           <Link to='/admin/users' className= 'btnlink'>Iniciar sesión</Link>
    //         </button>
    //       </div>
    //       <div className='divGoogle'>
    //     <div>
    //       <button
    //         type='submit'
    //         className='googlebtn'
    //       >
    //         <div className='gglindiv'>
    //           <img src={Google} alt='Logo Google' className='googleimg' />
    //           <span className='gglspan'>Iniciar con Google</span>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    //       <div className='regdiv'>
    //         <span className= 'regtext'>Si no tienes cuenta</span>
    //         <Link className= 'reglink' to='/'>
    //           <span>REGISTRATE</span>
    //         </Link>
    //       </div>
    //     </form>
    //   </div>     
    // </div>
  );
};

export default Login;
