import React, { Component } from 'react'
import '../styles/home.css'
import computer from 'assets/image/undraw_Code_thinking_re_gka2.svg'

export class Home extends Component {
    render() {
        return (
            <div className="container__all" id="container_all">
                <div className="cover">

                    <div className="container__cover">

                        <div className="container__info">
                            <h1>BUILD YOUR</h1>
                            <h2>BUSINESS</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias cumque at, impedit eum corrupti libero ipsam placeat, nulla, maiores totam qui ea distinctio. Velit, distinctio. Iste iusto deserunt esse?</p>
                            <input type="button" value="Get Started"></input>
                        </div>
                        <div className="container__vector">
                            <img src={computer} alt=""></img>
                        </div>
                    </div>
                 </div>
            </div>
        )
    }
}
export default Home;

