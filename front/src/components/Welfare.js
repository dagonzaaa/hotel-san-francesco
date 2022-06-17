import React, { Component } from "react"; // Importamos react y component para la clase 
import Nav from "./nav";

var numero = 1;

// Definimos funciones para poder adelantar y retroceder en las galerías de imágenes 

function adelantar_wellness(){
    numero++;
    if(numero>3)
        numero=1;
        var foto = document.getElementById("foto-wellness");
        foto.src = "assets/img/welfare/wellness" + numero + ".jpg";
}

function retroceder_wellness(){
    numero--;
    if(numero<1)
        numero=3;
        var foto = document.getElementById("foto-wellness");
        foto.src = "assets/img/welfare/wellness" + numero + ".jpg";
}

function adelantar_spa(){
    numero++;
    if(numero>3)
        numero=1;
        var foto = document.getElementById("foto-spa");
        foto.src = "assets/img/welfare/spa" + numero + ".jpg";
}

function retroceder_spa(){
    numero--;
    if(numero<1)
        numero=3;
        var foto = document.getElementById("foto-spa");
        foto.src = "assets/img/welfare/spa" + numero + ".jpg";
}

function adelantar_cosmetic(){
    numero++;
    if(numero>2)
        numero=1;
        var foto = document.getElementById("foto-cosmetic");
        foto.src = "assets/img/welfare/cosmetic" + numero + ".jpg";
}

function retroceder_cosmetic(){
    numero--;
    if(numero<1)
        numero=2;
        var foto = document.getElementById("foto-cosmetic");
        foto.src = "assets/img/welfare/cosmetic" + numero + ".jpg";
}

// Definimos la clase y la exportamos 

export default class Welfare extends Component {

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
                
                <div id="welfare">
                    <div id="wellness-area">
                        <div id="titulo-wellness">
                            <h2>WELLNESS AREA</h2>
                        </div>
                        <div id="container-wellness">
                            <div id="gallery-wellness">
                                <img src="assets/img/welfare/wellness1.jpg" id="foto-wellness"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_wellness}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_wellness}></i>
                                </div>
                            </div>
                            <div id="texto-wellness">
                                <p>In our department dedicated to wellness and beauty you will have the opportunity to appreciate the benefits of the interaction of the steam of 
                                    our Turkish bath with those of the water in our swimming pools and to note the beneficial effect both physically and mentally. 
                                    Furthermore, at our small but welcoming wellness center, it is possible to carry out the most varied types of treatments, 
                                    from different types of massages to rebalance body and mind to a rich variety of treatments for the well-being of the face and body.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="welfare2">
                    <div id="wellness-area2">
                        <div id="titulo-wellness">
                            <h2>WELLNESS AREA</h2>
                        </div>
                        <div id="texto-wellness2">
                            <div id="texto1">
                                <h3>JUNO</h3>
                                <p>The outdoor swimming pool of about 200 square meters, with an irregular shape, opens onto our internal garden. The solarium area equipped with sunbeds and umbrellas and surrounded by tall trees, arboreal essences and multicolored flowers complete an oasis of relaxation, where you can spend pleasant moments letting yourself be caressed by the sun's rays, perhaps sipping a cool drink.</p>
                            </div>
                            <div id="texto2">
                                <h3>PEGEA</h3>
                                <p>The indoor pool, rectangular in shape, has an average depth of 1.50 meters. Even in spring you can tone your body by taking advantage of the warmth of the water at a constant temperature of 32 ° C.</p>
                            </div>
                            <div id="texto3">
                                <h3>MAZE</h3>
                                <p>Located in the covered area of ​​the wellness department, our Turkish bath offers a real alternative to the sauna, allowing the body to regenerate and benefit from the steam and perfumed essences that have a positive effect on breathing and mood.</p>
                            </div>
                            <div id="texto4">
                                <h3>NISA</h3>
                                <p>Thanks to the scents, colors and the play of lights, our emotional shower gives beneficial effects by stimulating the sensory system, while the pressure of the water massages the body, freeing it from accumulated tensions.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="welfare3">
                    <div id="wellness-area3">
                        <div id="titulo-wellness">
                            <h2>THE SPA</h2>
                        </div>
                        <div id="container-wellness3">
                            <div id="texto-wellness3">
                                <p>The San Francesco offers the opportunity to use the ultra-modern thermal department of the Belliazzi Spa equipped with:</p>
                                <ul>
                                    <li>Thermal pool with hydromassage.</li>
                                    <li>Finnish sauna (Dry).</li>
                                    <li>Emotional shower.</li>
                                    <li>Relaxation room with Chromotherapy.</li>
                                    <li>Kneipp path.</li>
                                    <li>Massage room.</li>
                                    <li>Aesthetic room.</li>
                                    <li>Treatment department (muds, aerosols and inhalations).</li>
                                </ul>
                            </div>
                            <div id="gallery-wellness">
                                <img src="assets/img/welfare/spa1.jpg" id="foto-spa"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_spa}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_spa}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="welfare4">
                    <div id="wellness-area4">
                        <div id="titulo-wellness">
                            <h2>COSMETIC LINE</h2>
                        </div>
                        <div id="container-wellness4">
                            <div id="texto-wellness4">
                                <h3>Juno.</h3>
                                <p>Our line of Juno cosmetic products is born from the love for wellness and beauty, enriched with phytoextracts and thermal water from the island of Ischia. At our small but welcoming wellness center it is possible to carry out the most varied treatments: different types of massage to rebalance body and mind, but also a rich variety of treatments for the well-being of the face and body. In the shop section you will find the complete line. Discover our products in the Shop area.</p>
                            </div>
                            <div id="gallery-cosmetic">
                                <img src="assets/img/welfare/cosmetic1.jpg" id="foto-cosmetic"/>
                                <div id="buttons">
                                    <i class="fa fa-angle-left" id="btnadelante" onClick={adelantar_cosmetic}></i>
                                    <i class="fa fa-angle-right" id="btnatras" onClick={retroceder_cosmetic}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="welfare5">
                    <div id="wellness-area5">
                        <div id="titulo-treatments">
                            <h2>TREATMENTS</h2>
                        </div>
                        <div id="container-wellness5">
                            <div id="treatment-1">
                                <h3>FACIAL CARE</h3>
                                <img src="assets/img/welfare/treatment2.jpg"/>
                            </div>
                            <div id="treatment-2">
                                <h3>BODY CARE</h3>
                                <img src="assets/img/welfare/treatment3.jpg"/>
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