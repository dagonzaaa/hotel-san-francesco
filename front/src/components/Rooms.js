import React, { Component } from "react"; // Importamos react y component para la clase
import Nav from "./nav";

// Definimos funciones para poder adelantar y retroceder en las galerías de imágenes 

var numero = 1;

function adelantar_deluxe(){
    numero++;
    if(numero>2)
        numero=1;
        var foto = document.getElementById("foto");
        foto.src = "assets/img/rooms/deluxe" + numero + ".jpg";
}

function retroceder_deluxe(){
    numero--;
    if(numero<1)
        numero=2;
        var foto = document.getElementById("foto");
        foto.src = "assets/img/rooms/deluxe" + numero + ".jpg";
}

function adelantar_classic(){
    numero++;
    if(numero>2)
        numero=1;
        var foto = document.getElementById("foto2");
        foto.src = "assets/img/rooms/classic" + numero + ".jpg";
}

function retroceder_classic(){
    numero--;
    if(numero<1)
        numero=2;
        var foto = document.getElementById("foto2");
        foto.src = "assets/img/rooms/classic" + numero + ".jpg";
}

function adelantar_family(){
    numero++;
    if(numero>2)
        numero=1;
        var foto = document.getElementById("foto3");
        foto.src = "assets/img/rooms/family" + numero + ".jpg";
}

function retroceder_family(){
    numero--;
    if(numero<1)
        numero=2;
        var foto = document.getElementById("foto3");
        foto.src = "assets/img/rooms/family" + numero + ".jpg";
}

function adelantar_standard(){
    numero++;
    if(numero>2)
        numero=1;
        var foto = document.getElementById("foto4");
        foto.src = "assets/img/rooms/standard" + numero + ".jpg";
}

function retroceder_standard(){
    numero--;
    if(numero<1)
        numero=2;
        var foto = document.getElementById("foto4");
        foto.src = "assets/img/rooms/standard" + numero + ".jpg";
}

// Definimos la clase y la exportamos

export default class Rooms extends Component {

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
                <div id="rooms">
                    <div id="our-rooms">
                        <div id="titulo-rooms">
                            <h3>Our Rooms</h3>
                        </div>
                        <div id="container-gallery">
                            <div id="gallery">
                                <img src="assets/img/rooms/deluxe1.jpg" id="foto"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_deluxe}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_deluxe}></i>
                                </div>
                            </div>
                            <div id="texto-gallery">
                                <h3>Deluxe</h3>
                                <p>Designed and structured with particular attention to detail, these rooms offer a unique blend of intimacy and comfort. 
                                    Spacious and very bright, our deluxe rooms are enriched with a welcoming and elegant linving area.</p>
                            </div>
                        </div>
                        <div id="container-gallery">
                            <div id="texto-gallery">
                                <h3>Classic</h3>
                                <p>Featuring a typical Mediterranean-style décor. Simple and functional, they offer refreshment and tranquility after a day at the 
                                    beach or after a day spent admiring the countless beauties of Ischia. 
                                    The private terrace allows you to spend pleasant moments in absolute relaxation.</p>
                            </div>
                            <div id="gallery">
                                <img src="assets/img/rooms/classic1.jpg" id="foto2"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_classic}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_classic}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="rooms2">
                    <div id="our-rooms">
                        <div id="titulo-rooms">
                            <h3>Our Rooms</h3>
                        </div>
                        <div id="container-gallery">
                            <div id="gallery">
                                <img src="assets/img/rooms/family1.jpg" id="foto3"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_family}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_family}></i>
                                </div>
                            </div>
                            <div id="texto-gallery">
                                <h3>Family</h3>
                                <p>Available for 3 and 4 people: located in the annexe adjacent to the central body of the hotel, 
                                    the Family rooms represent the best solution in terms of space and comfort for families of 3 or 4 people.</p>
                            </div>
                        </div>
                        <div id="container-gallery">
                            <div id="texto-gallery">
                                <h3>Standard</h3>
                                <p>Our types of rooms are of two different types: a first located near the indoor swimming pool, 
                                    a second in an annex located in a structure adjacent to the central body. 
                                    A smaller space at a significantly reduced price characterize these charming rooms that offer the perfect 
                                    combination between the advantage of low prices and a pleasant stay near the sea.</p>
                            </div>
                            <div id="gallery">
                                <img src="assets/img/rooms/standard1.jpg" id="foto4"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_standard}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_standard}></i>
                                </div>
                            </div>
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