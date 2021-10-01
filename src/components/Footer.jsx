import React from 'react'
import 'styles/footer.css'
import logo from 'assets/image/logo.png'

export const Footer= () => {
  
        return (
            <footer>
            <div className="footer">
                <div className="container__footer">
                    <div className="box__footer">
                        <div className="logo">
                            <img src={logo} alt=""></img>
                        </div>
                        <div className="terms">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit cum cumque velit libero officiis quam doloremque reprehenderit quae corporis! Delectus architecto officia praesentium atque laudantium, nam deleniti sapiente deserunt.</p>
                        </div>
                    </div>
                    <div className="box__footer">
                        <h2>SOLUCIONES</h2>

                        <a href="https://www.google.com" target="_blank" rel="noreferrer">App Desarrollo</a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">App Marketing</a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">IOS Desarrollo</a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">Android Desarrollo</a>
                    </div>

                    <div className="box__footer">
                        <h2>COMPAÑIA</h2>
                        <a href="https://www.udea.edu.co/" target="_blank" rel="noreferrer">Acerca de</a>
                        <a href="https://www.udea.edu.co/" target="_blank" rel="noreferrer">Trabajos</a>
                        <a href="https://www.udea.edu.co/" target="_blank" rel="noreferrer">Procesos</a>
                        <a href="https://www.udea.edu.co/" target="_blank" rel="noreferrer">Servicios</a>              
                    </div>

                    <div className="box__footer">
                        <h2>REDES SOCIALES</h2>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"> <i className="fab fa-facebook-square"></i> Facebook</a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter-square"></i> Twitter</a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> Linkedin</a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fab fa-instagram-square"></i> Instagram</a>
                    </div>

                </div>

                <div className="box__copyright">
                    <hr />
                    <p>Todos los derechos reservados © 2021 <b className="hr">desArrolladores</b></p>
                </div>
            </div>
            </footer>
        )
}
