import React from "react"; // Importamos react

import {Link} from 'react-router-dom'; // Importamos Link para las rutas

// Creamos la función



function Booking (data){
    
    var final_booking=[];
    var final_booking2 = [];
	var preciototalroom = 0;
    var i = 0;

    if (localStorage.getItem('datos_busqueda')) {
        var busqueda = JSON.parse(localStorage.getItem('datos_busqueda'))
        if (busqueda.niños == '') {
            busqueda.niños = 0
        }
    }

	for (let room of data.rooms) {
		final_booking.push(
            <div id="div-booking-rooms">
                <div id="div-room">
                    <img src={room.img} class="cart-thumb" alt="image" />
                    <p>{room.nombre} <br></br> <span class="price"> € {room.precio}</span></p>
                    <button onClick={()=>{
							let comprobador = true
                            let indice = 0
							for(let ro of data.booking){
								if(ro.nombre == room.nombre){
									data.aumentarroom(indice)
									localStorage.setItem('booking', JSON.stringify(data.booking));
									comprobador = false
								}
								indice++
							}
							if(comprobador){
								data.anadirroom(room);
								localStorage.setItem('booking', JSON.stringify(data.booking));
							}
							}}>
							Book
					</button>
                </div>
            </div>
		);
	}

    for (let room of data.booking) {
        let indice1 = i;
        
		preciototalroom += room.cantidad * room.precio;
        final_booking2.push(
            <div>
                <ul>
                    <li><p>{room.cantidad} x {room.nombre} <br></br> <span class="price">{room.precio} €</span></p></li>
                    <button onClick={()=>{
                        if (room.cantidad == 1) {
                            data.borrarroom(indice1);
                            localStorage.setItem('booking', JSON.stringify(data.booking));
                        }else{
                            data.disminuirroom(indice1);
                            localStorage.setItem('booking', JSON.stringify(data.booking));
                        }
							}}>
							Quit
					</button>
                </ul>
            </div>
        );
        i++;
    }

    // Lo que devuelve la función 

        return (
            <div id="container-booking">
                <div id="booking">
                    <div id="logo-booking">
                        <img src="assets/img/header/logo.jpg" alt="logo"/>
                    </div>
                    <div id="title-booking">
                        <h3>Booking</h3>
                    </div>
                    <div id="booking-rooms">
                        <div id="available-rooms">
                            <h3>Available Rooms</h3>
                            <div id="rooms-column">
                                {final_booking}
                            </div>
                        </div>
                        <div id="booking-information">
                            <ul>
                                <li>
                                    <p>Check in: {busqueda.inicio}</p>
                                </li>
                                <li>
                                    <p>Check out: {busqueda.fin}</p>
                                </li>
                                <li>
                                    <p>Adults: {busqueda.adultos}</p>
                                </li>
                                <li>
                                    <p>Kids: {busqueda.niños}</p>
                                </li>
                                <li>
                                    <p>Rooms: </p>
                                    <p>{final_booking2}</p>
                                </li>
                            </ul>
                            <p>Total: € {preciototalroom} <br></br> per day</p>
                            <Link to='/payment-book'><button>Book now</button></Link>
                            <img src="assets/img/cart/payment.jpg"/>
                        </div>
                    </div>
                    <div id="back">
                        <button onClick={data.nobuscar}>Back</button>
                    </div>
                </div>

            </div>
		
        );
}

// Hacemos la exportación de la función

export default Booking;