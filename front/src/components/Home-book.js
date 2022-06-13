import React, { Component } from "react"; // Importamos react y component para la clase
import axios from "axios";
import Nav from "./nav";
import swal from 'sweetalert'; // Importamos swal para las alertas personalizadas

// Definimos la clase y la exportamos 

export default class Homebook extends Component {

    constructor(props) {
        super(props)
        if (localStorage.getItem('datos_busqueda')) {
            localStorage.removeItem('datos_busqueda')
        }
        this.state = this.state = {
            busqueda: {
                inicio: '',
                fin: '',
                adultos: '',
                niños: '',
            },
            errores: {
                inicioerr: '',
                finerr: '',
                adultoserr: '',
                niñoserr: '',
                habitacioneserr: ''
            },
            buscando: this.props.buscando,
            habitaciones:[],
            reservas:[]
        }
        this.getHabitaciones()
        this.getReservas()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            busqueda: {
            ...this.state.busqueda,
            [name]: value,
          },
        })
    }

    getHabitaciones = ()=>{
        axios.get('https://splendorous-mission.000webhostapp.com/habitaciones/')
        .then(response=>{
            this.setState({
                habitaciones: [response.data]
            })
        })
    }

    getReservas = ()=>{
        axios.get('https://splendorous-mission.000webhostapp.com/reservas/')
        .then(response=>{
            this.setState({
                reservas: [response.data]
            })
        })
    }

    book = (e)=>{
        e.preventDefault()
        this.setState({
            errores: {
                inicioerr: '',
                finerr: '',
                adultoserr: '',
                niñoserr: '',
            },
        })

        const { inicio, fin, adultos, niños } = this.state.busqueda
        const errores = {inicioerr: '', finerr: '', adultoserr: '', niñoserr: '', habitacioneserr:''}

        let isvalid = true

        if (!inicio) {
            errores.inicioerr = 'Check In is required'
            isvalid = false
        }
        if (!fin) {
            errores.finerr = 'Check Out is required'
            isvalid = false
        }
        if (!adultos) {
            errores.adultoserr = 'Adults is required'
            isvalid = false
        }

        let habitaciones = this.state.habitaciones[0]
        let reservas = this.state.reservas[0]

        let llena = true
        let i = 0

        let inicio_nueva = new Date(inicio)
        let fin_nueva = new Date(fin)

        console.log(inicio_nueva>fin_nueva);

        if (inicio_nueva>fin_nueva) {
            errores.habitacioneserr = 'Date of departure prior to date of entry'
        }else{
            if (!(inicio_nueva<fin_nueva)) {
                errores.habitacioneserr = 'Date of entry and exit the same'
            }
        }
        


        while (llena == true) {
            if (i == habitaciones.length) {
                
                llena = false

                errores.habitacioneserr = 'No rooms availables'
                isvalid = false

            }
            
            let coincide = reservas.filter((res)=>{
                if (res.id_habitacion == habitaciones[i].id) {
                    return true
                }
            })

            var id_habitacion = ''

            if (coincide.length == 0) {
                console.log('La habitacion '+ habitaciones[i].id + ' no esta llena');
                llena = false
                id_habitacion = habitaciones[i].id
            }else{
                console.log('Hay reservas');
                coincide.forEach(res => {
                    let inicio_nueva = new Date(inicio)
                    let fin_nueva = new Date(fin)

                    let fin_reserva = new Date(res.fin)
                    let inicio_reserva = new Date(res.inicio)
                    

                    if (fin_reserva < inicio_nueva) {
                        //el nuevo inicio es mayor que el fin de la reserva
                        llena = false
                        id_habitacion = habitaciones[i].id
                    }else if (fin_nueva < inicio_reserva) {
                        //el nuevo fin es menor que el inicio de la reserva
                        llena = false
                        id_habitacion = habitaciones[i].id
                    }else{
                        llena = true
                    }
                });
            }    
            i++       
        }

        if (!isvalid) {
            this.setState({ errores })

            console.log(JSON.stringify(errores))
        }else{
            console.log('Buscando')

            let busqueda = {...this.state.busqueda, id_habitacion}

            console.log(busqueda)

            localStorage.setItem('datos_busqueda', JSON.stringify(busqueda))

            this.props.buscar()

        }
        
    }

    logout = (e)=>{
        e.preventDefault()

        localStorage.clear()

        swal({
            title: 'successfully logged out',
            position: 'top-end', 
            icon: 'success', 
            type: "success"}).then(function(){
                window.location.reload();
        });

    }

    render() {

        const { inicio, fin, adultos, niños } = this.state.busqueda
        const {inicioerr, finerr, adultoserr, niñoserr, habitacioneserr} = this.state.errores

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
                <div id="home-book">
                    <div id="reserva">
                        <h1 id="titulo">Hotel Booking Form</h1>
                        <form action="" method="post" onSubmit={this.book}>
                            <div id="container">
                                <label for="checkin"><b>Check In</b></label>
                                <input type="date" placeholder="Choose date" name="inicio" value={inicio} onChange={this.handleChange}/>
                                <div id="err">{inicioerr}</div>
                                <label for="checkout"><b>Check Out</b></label>
                                <input type="date" placeholder="Choose date" name="fin" value={fin} onChange={this.handleChange}/>
                                <div id="err">{finerr}</div>
                                <div id="err">{habitacioneserr}</div>
                                <label for="adults"><b>Adults</b></label>
                                <input type="number" placeholder="Choose number" name="adultos" min="1" value={adultos} onChange={this.handleChange}/>
                                <div id="err">{adultoserr}</div>
                                <label for="kids"><b>Kids</b></label>
                                <input type="number" placeholder="Choose number" name="niños" min="0" value={niños} onChange={this.handleChange}/>
                                <br></br>
                                <input type="submit" value="Booking" onClick={this.book}/>
                                <input type="submit" value="Logout" onClick={this.logout}/>
                            </div>
                        </form>
                    </div>
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
