import React, { Component } from "react"; // Importamos react y component para la clase
import Nav from "./nav";

// Definimos funciones para poder adelantar y retroceder en las galerías de imágenes 

var numero = 1;

function adelantar_kitchen(){
    numero++;
    if(numero>5)
        numero=1;
        var foto = document.getElementById("foto-kitchen");
        foto.src = "assets/img/kitchen/kitchen" + numero + ".jpg";
}

function retroceder_kitchen(){
    numero--;
    if(numero<1)
        numero=5;
        var foto = document.getElementById("foto-kitchen");
        foto.src = "assets/img/kitchen/kitchen" + numero + ".jpg";
}

function adelantar_plates1(){
    numero++;
    if(numero>4)
        numero=3;
        var foto = document.getElementById("foto-plates1");
        foto.src = "assets/img/kitchen/kitchen" + numero + ".jpg";
}

function retroceder_plates1(){
    numero--;
    if(numero<3)
        numero=4;
        var foto = document.getElementById("foto-plates1");
        foto.src = "assets/img/kitchen/kitchen" + numero + ".jpg";
}

function adelantar_plates2(){
    numero++;
    if(numero>4)
        numero=3;
        var foto = document.getElementById("foto-plates2");
        foto.src = "assets/img/kitchen/kitchen" + numero + ".jpg";
}

function retroceder_plates2(){
    numero--;
    if(numero<3)
        numero=4;
        var foto = document.getElementById("foto-plates2");
        foto.src = "assets/img/kitchen/kitchen" + numero + ".jpg";
}

// Definimos la clase y la exportamos 

export default class Kitchen extends Component {

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

                <div id="kitchen">
                    <div id="kitchen-area">
                        <div id="titulo-kitchen">
                            <h2>FROM THE GARDEN <br></br> TO THE DISH</h2>
                        </div>
                        <div id="container-kitchen">
                            <div id="texto-kitchen">
                                <p>The company philosophy is to offer the customer natural foods without chemical additives. 
                                    For this reason we have started the direct cultivation in Costa, of a plot of land of about 10,000 square meters. And with the products from our garden: courgettes, tomatoes, aubergines, peppers, etc. 
                                    The chef prepares dishes capable of enhancing those flavors that were a privilege of our grandparents.</p>
                            </div>
                            <div id="gallery-kitchen">
                                <img src="assets/img/kitchen/kitchen1.jpg" id="foto-kitchen"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_kitchen}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_kitchen}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="kitchen1">
                    <div id="kitchen-area1">
                        <div id="titulo-kitchen">
                            <h2>FROM THE GARDEN <br></br> TO THE DISH</h2>
                        </div>
                        <div id="container-kitchen1">
                            <table id="plates">
                                <tr>
                                    <td>
                                        <h3>ANTIPASTI</h3>
                                        <ul>
                                            <li><p>REVISITED CAPRESE SALAD.</p></li>
                                            <li><p>THE MILLEFOGLIE.</p></li>
                                            <li><p>SHRIMP SANDWICH.</p></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <h3>SECONDS</h3>
                                        <ul>
                                            <li><p>FILLET OF SEA BASS</p></li>
                                            <li><p>FALSE CANNELLONE DI CERNIA.</p></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h3>FIRST</h3>
                                        <ul>
                                            <li><p>PACCHERI DI GRAGNANO.</p></li>
                                            <li><p>SPAGHETTI WITH TWO TOMATOES.</p></li>
                                        </ul>
                                    </td>
                                    <td>
                                        <h3>SWEETS</h3>
                                        <ul>
                                            <li><p>PEAR PIE WITH STRAWBERRIES.</p></li>
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div id="gallery-kitchen1">
                                            <img src="assets/img/kitchen/kitchen3.jpg" id="foto-plates1"/>
                                            <div id="buttons">
                                                <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_plates1}></i>
                                                <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_plates1}></i>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div id="gallery-kitchen2">
                                            <img src="assets/img/kitchen/kitchen4.jpg" id="foto-plates2"/>
                                            <div id="buttons">
                                                <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_plates2}></i>
                                                <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_plates2}></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
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