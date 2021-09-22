import React, { Component } from 'react'
import '../styles/home.css'
import borderCollie from '../assets/image/borderCollie.jpeg'
import rhodesian from '../assets/image/rhodesian.jpeg'

export class Home extends Component {
    render() {
        return (
            <div className = "Menu">
                <h1>Razas de Perros</h1>
                <ul className="breedCardContainer">
                    <li className="breedCard">
                        <div className="contenedorImagen">
                            <img src={borderCollie} alt="Border Collie" />
                        </div>
                        <span className="breedTitle">Border Collie</span>
                    </li>
                    <li className="breedCard">
                        <div className="contenedorImagen">
                            <img src={rhodesian} alt="Border Collie" />
                        </div>
                        <span className="breedTitle">Rhodesian</span>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Home;

