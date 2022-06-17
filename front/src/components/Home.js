import React, { Component } from "react"; // Importamos react y component para la clase
import Login from "./Login"; // Importamos el componente Login
import Nav from "./nav";
import Register from "./Register"; // Importamos el componente Register

// Definimos la clase y la exportamos 

export default class Home extends Component {

    render() {

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
                <div id="home">
                    <Login />
                    <Register />
                </div>
                <div id="home2">
                    <div id="text">
                        <h1>WELCOME</h1>
                        <br></br>
                        <h3>A little bit about Hotel San Francesco</h3>
                    </div>
                    <div id="contenedor-divs">
                        <div>
                            <p>The San Francesco hotel, immersed in the colors of the Mediterranean vegetation, is located in one of the most beautiful streets of Forio, a long avenue lined with centuries-old trees, a stone's throw from the beach and the town center; it is the ideal destination for a holiday dedicated to the enjoyment of well-being and away from stress.</p>
                        </div>
                        <div>
                            <p>The large outdoor swimming pool equipped with sun loungers and deck chairs with snack service, the large solarium, the health and beauty center, the indoor pool with hot water, the outdoor breakfast in the morning, the professionalism of our staff, the opportunity to practice thermal treatments at Terme Belliazzi transform a holiday of sun and sea into a dip in wellness and beauty. The offer is completed by the cuisine with typical dishes and delicacies of the Italian and international culinary culture.</p>
                        </div>
                        <div>
                            <p>The sobriety of the interiors, the large restaurant and the welcoming bar room, the rooms with Mediterranean furnishings, the large internal garden with tall trees and arboreal essences, make the San Francesco hotel the perfect solution for those who wish a special stay in a quiet and refined atmosphere.</p>
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
            </div>
        )
    }
}