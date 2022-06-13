import React, { Component } from "react"; // Importamos react y component para la clase
import GoogleMaps from "simple-react-google-maps"; // Importamos Google maps para utilizar el mapa con una API de Google
import Nav from "./nav";

// Definimos la clase y la exportamos 

export default class Where extends Component {

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

                <div id="container-where">
                    <div id="where">
                        <h3>ADDRESS AND MAP</h3>
                        <p>Via Tommaso Cigliano, <br></br>
                        37/39 - Forio (NA) Italy</p>

                        {/*map of google*/}
                        <div className="map">
                            <GoogleMaps
                            apiKey={"AIzaSyAeFkw9qjqzzzfY5-ed4b6Xadp4fQqn-Ks"} // API de Google
                            style={{ height: "320px", width: "640px" }}
                            zoom={17}
                            center={{
                                lat: 40.74759707885074,
                                lng: 13.870207
                            }}
                            markers={[
                                { lat: 40.74759707885074, lng: 13.870207 },
                            ]}/>
                        </div>
                    </div>
                </div>

                <div id="container-where-1">
                    <div id="where1">
                        <h2>HOW TO REACH US</h2>
                        <p>Useful information on how to reach the <br></br> island of Ischia By</p>
                        <div id="text-where">
                            <p><span>- Plane:</span> From the Naples Capodichino airport, you can reach the port of Naples using either a taxi or a bus. A shuttle bus directly connects the airport with the center of Naples and the ticket can be purchased on board.</p>
                            <p><span>- Train:</span> The central station is about 2 km from the port of Naples, which can be easily reached by bus, the ticket can be purchased inside the station. You can also reach the boarding points for Ischia by taxi, we recommend that you ask for the predetermined rate.</p>
                            <p><span>- Car:</span> From the highway after the Naples toll booth, continue for about 12 km and follow the road signs for Naples port area and then the signs for Molo Calata di Massa and then embark for Ischia. It is also possible to embark by car from the port of Pozzuoli; from the highway you have to take the Tangenziale towards Pozzuoli, go along the entire ring road and take the first exit after the “Via Campana” tollbooth, follow the signs for the port. The port from which the hydrofoils depart are: Molo Beverello or the port of Mergellina, both in Naples. The port from which the ferries leave is Calata di Massa in Naples or the port of Pozzuoli.</p>
                            <p><span>- Bus:</span> From all over Italy starting from € 45.00For those interested we offer a transport service by GT bus from all over Italy to our hotel. If you would like more information about it please contact us.</p>
                        </div>
                    </div>
                </div>

                <div id="container-where2">
                    <div id="where1">
                        <h2>FORIO</h2>
                        <p>Forio between sun, sea and fun.</p>
                        <div id="text-where">
                            <p>The San Francesco hotel is located in a quiet residential area of ​​the municipality of Forio d'Ischia, in via Tommaso Cigliano. A pleasant and quiet tree-lined avenue lined with boutiques, restaurants and small shops will be the perfect setting for the short path that leads to the beach of San Francesco, one of the most beautiful and sunniest bays on the whole island.</p>
                            <p>Furthermore, the hotel's location, very close to the historic center of Forio, the only one on the island to have been preserved intact, allows, walking through its alleys, churches and monuments, a real dive into the past.</p>
                            <p>A symbol of this wonderful glimpse of the island is the splendid church of Soccorso, overlooking the sea and the majestic Forio tower. In addition to having a rich and important historical heritage, Forio offers many points of naturalistic interest. At this point, the botanical gardens "La Mortella" and the gardens "Ravino" deserve to be mentioned.</p>
                            <p>There are also restaurants and other refreshment points where it will be possible, between a chat and the other, to taste the typical dishes and specialties of the place.</p>
                        </div>
                    </div>
                </div>

                <div id="container-where3">
                    <div id="where1">
                        <h2>THE ISLAND OF ISCHIA</h2>
                        <p>The green island and its beauties</p>
                        <div id="text-where">
                            <p>A pearl in the Mediterranean sea, this is how the large and very green island of Ischia, in the Gulf of Naples, is known all over the world. Ischia is so vast and varied that those who experience it can even forget they are on an island: it has six municipalities, each with a particular physiognomy, each with a naturalistic heritage of absolute value.</p>
                            <p>Among the largest municipalities of the island there is certainly the beautiful Forio, a land of sunsets and ancient history. The island of Ischia is famous for its thermal wealth, in fact there are more than one hundred active springs in this land of natural well-being. The cultural offer that the island offers its guests is also very large: beautiful historic centers, ancient churches, archaeological museums, the Aragonese Castle, but also many events in all seasons of the year that enliven the days and evenings spent. on the island of dreams.</p>
                            <p>The seaside life is also extremely sparkling: there are so many beaches and seaside places on the island of Ischia that it would take too long to list them all. But they certainly stand out among all the island's beaches: the large beach of Citara with the Poseidon hydrothermal park, the kilometer-long beach of the Maronti and the romantic and exclusive beach of San Francesco in Forio, a stone's throw from our hotel.</p>
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