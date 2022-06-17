import React, { Component } from "react"; // Importamos react y component para la clase 
import Nav from "./nav";

// Definimos la clase y la exportamos 

export default class Rates extends Component {

    render() {

        // Lo que devuelve

        return(
            <div>
                <div id="header">
                    <div id="telefono">
                        <i class="fa fa-phone">&nbsp;+39 081 98 73 97</i>
                    </div>
                    <img src="assets/img/header/logo.jpg" alt="logo"/>
                    <div id="social">
                        <a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
                        <a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
                    </div>
                </div>
                <Nav />

                <div id="container-rates">
                    <div id="rates">
                        <div id="rates1">
                            <h2>RATES</h2>
                            <p>The prices indicated below are intended per <br></br> night, per person (tourist tax excluded).</p>
                            <h3>Type of Room</h3>
                            <div id="type-rooms">
                                <div id="standard-room">
                                    <h3>Standard Room</h3>
                                    <p>MIN € 40.00</p>
                                    <p>MAX € 110.00</p>
                                </div>
                                <div id="comfort-room">
                                    <h3>Comfort Room</h3>
                                    <p>MIN € 50.00</p>
                                    <p>MAX € 120.00</p>
                                </div>
                                <div id="junior-suite">
                                    <h3>Junior Suite</h3>
                                    <p>MIN € 80.00</p>
                                    <p>MAX € 150.00</p>
                                </div>
                            </div>
                            <h3>Reductions</h3>
                            <h3>3rd bed for adults.</h3>
                            <p>- 20%</p>
                            <h3>Third bed for children up to 12 years.</h3>
                            <p>- 30%</p>
                        </div>

                        <div id="rates2">
                            <h3>Supplements (prices per day per person)</h3>
                            <h3>single room</h3>
                            <p>€ 25.00</p>
                            <h3>Half board</h3>
                            <p>€ 18.00</p>
                            <h3>Extra meal</h3>
                            <p>€ 25.00</p>
                            <h3>Celiac menu</h3>
                            <p>€ 12.00</p>
                            <h3>Grand gala of August and New Year's Eve</h3>
                            <p>€ 80.00</p>
                            <h3>Baby cot</h3>
                            <p>€ 25.00</p>
                            <h3>Comfort room</h3>
                            <p>€ 15.00</p>
                        </div>
                    </div>
                </div>

                <footer>
                    <div id="pie">
                        <div id="info-pie">
                            <p>Hotel San Francesco Via Tommaso Cigliano, 37/39 80075 Forio - Ischia Island (NA)</p>
                        </div>
                        <div id="info-pie">
                            <p>Privacy - Cookie Policy E-mail: info@hotelsanfrancescoischia.it Tel. +39 081 98 73 97 Fax. +39 081 98 94 22 VAT number 07553631214</p>
                        </div>
                        <div id="info-pie">
                            <p>© 2022 Hotel San Francesco All rights reserved IES Ayala</p>
                        </div>
                        <div id="img-pie">
                            <img src="assets/img/footer/tripadvisor.png" alt="tripadvisor"/>
                        </div>
                        <div id="pie-social">
                            <a href="https://www.facebook.com/"><i class="fa fa-facebook-f"></i></a>
                            <a href="https://twitter.com/"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
                        </div> 
                    </div>
                </footer>
            </div>
        )
    }
}