import React, { Component } from "react"; // Importamos react y component para la clase 
import {Link} from 'react-router-dom'; // Importamos Link para las rutas
import axios from "axios";
import swal from 'sweetalert';
// Definimos la clase y la exportamos

export default class Paymentbook extends Component {

    constructor(props) {
        super(props)

        this.datos_habitacion = JSON.parse(localStorage.getItem('booking'))
        this.datos_busqueda = JSON.parse(localStorage.getItem('datos_busqueda'))
        this.user = JSON.parse(localStorage.getItem('user'))


        if (this.datos_busqueda.niños == '') {
            this.datos_busqueda.niños = '0'
        }

        var precio = 0

        this.datos_habitacion.forEach(hab => {
            precio += hab.cantidad*hab.precio
        });


        

        this.state = this.state = {
            errores:{
                full_nameerr:'',
                numererr:'',
                CVVerr:'',
                exdateerr:''
            },
            datos_banco: {
                full_name:'',
                numero_cuenta:'',
                CVV:'',
                exdate:''
            },
            reserva: {
                id_user: this.user.id,
                id_habitacion: this.datos_busqueda.id_habitacion,
                inicio: this.datos_busqueda.inicio,
                fin: this.datos_busqueda.fin,
                precio: precio,
                numero_cuenta: '',//ya
                adultos: this.datos_busqueda.adultos,
                niños: this.datos_busqueda.niños
            },
            habitaciones:[],
            reservas:[]
        }
        this.getHabitaciones()
        this.getReservas()

        
    }

    handleChange_res = (e) => {
        const { name, value } = e.target
        this.setState({
            datos_banco: {
            ...this.state.datos_banco,
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

    reservar = (e)=>{
        e.preventDefault()

        this.setState({
            errores:{ 
                habitacioneserr:'', 
                full_nameerr:'', 
                numererr:'', 
                CVVerr:'', 
                exdateerr:''}
         })

        

        const { full_name, numero_cuenta, CVV, exdate } = this.state.datos_banco
        const errores = {full_nameerr:'', numererr:'', CVVerr:'', exdateerr:''}
        let isvalid = true

        if (!full_name) {
            errores.full_nameerr = 'Full name is required'
            isvalid = false
        }
        if (!numero_cuenta) {
            errores.numererr = 'Number acount is required'
            isvalid = false
        }
        if (!CVV) {
            errores.CVVerr = 'CVV is required'
            isvalid = false
        }
        if (!exdate) {
            errores.exdateerr = 'Expiration Date is required'
            isvalid = false
        }


       
        if (!isvalid) {
            this.setState({ errores })

            console.log(JSON.stringify(errores))
          }else{
              
                var f = new FormData()

                console.log(this.state.reserva.id_habitacion);

                f.append("id_user", this.state.reserva.id_user)
                f.append("id_habitacion", this.state.reserva.id_habitacion)
                f.append("inicio", this.state.reserva.inicio)
                f.append("fin", this.state.reserva.fin)
                f.append("precio", this.state.reserva.precio)
                f.append("numero_cuenta", numero_cuenta)
                f.append("adultos", this.state.reserva.adultos)
                f.append("niños", this.state.reserva.niños)


                axios.post('https://splendorous-mission.000webhostapp.com/reservas/', f)
                .then((res)=>{
                    console.log(res.data);
                })
                .catch((error)=>{
                    console.log(error);
                });

               
                console.log('Redirigir');

                // swal({
                //     title: 'Successful booking',
                //     position: 'top-end', 
                //     icon: 'success', 
                //     type: "success"}).then(function(){
                //         window.location.href = 'https://preeminent-bienenstitch-640ed9.netlify.app/';
                // });  
                
                this.setState({
                    datos_banco:{
                        full_name:'',
                        numero_cuenta:'',
                        CVV:'',
                        exdate:''
                    }
                })
                
              
          }
    }

    render() {
        const { full_name, numero_cuenta, CVV, exdate } = this.state.datos_banco
        const { full_nameerr, numererr, CVVerr, exdateerr } =  this.state.errores

        return(
            <div id="container-payment">
                <div id="payment">
                    <div id="logo-payment">
                        <img src="assets/img/header/logo.jpg" alt="logo"/>
                    </div>
                    <div id="title-payment">
                        <h3>Book Now</h3>
                    </div>
                    <div id="payment-form">
                        <form action="" method="post" onSubmit={this.reservar}>
                            <div id="container-payment-form">
                                <label for="fullname">Full Name</label>
                                <input type="text" placeholder="Enter full name" name="full_name" value={full_name} onChange={this.handleChange_res}/>
                                <div id="err">{full_nameerr}</div>
                                <label for="cardnumber">Card Number</label>
                                <input type="number" placeholder="Enter Card Number" name="numero_cuenta" min='0' value={numero_cuenta} onChange={this.handleChange_res}/>
                                <div id="err">{numererr}</div>
                                <label for="cvv">CVV</label>
                                <input type="number" placeholder="Enter CVV" name="CVV" min='0' value={CVV} onChange={this.handleChange_res}/>
                                <div id="err">{CVVerr}</div>
                                <label for="exdate">Expiration Date</label>
                                <input type="month" placeholder="Enter expiration date" name="exdate" value={exdate} onChange={this.handleChange_res}/>
                                <div id="err">{exdateerr}</div>
                            </div>
                            <br></br>
                        </form>
                        <div id="information-payment">
                            <i class="fa fa-lock"></i>
                            <h3>Safe Area 100%</h3>
                            <p>Your data will be 100% protected.</p>
                            <p>The selected offer includes a direct debit,
                                for more information see "Cancellation
                                Policy and Privacy".
                            </p>
                            <br></br>
                            <img src="assets/img/cart/payment.jpg"/>
                        </div>
                    </div>
                    <div id="back-payment">
                        <button id="pay-now-payment" onClick={this.reservar}>Pay Now</button>
                        <Link to='/' ><button id="back-payment" >Back</button></Link>
                    </div>
                </div>

            </div>
                
        )
    }
}