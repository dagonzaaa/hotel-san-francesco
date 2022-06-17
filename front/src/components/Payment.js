import React, { Component } from "react"; // Importamos react y component para la clase 
import {Link} from 'react-router-dom'; // Importamos Link para las rutas 
import axios from "axios";
import swal from 'sweetalert';

// Definimos la clase y la exportamos 

export default class Payment extends Component {

    constructor(props) {
        super(props)

        if (localStorage.getItem('carrito')) {
            let carrito = JSON.parse(localStorage.getItem('carrito'))
            if (carrito.length == 0) {
                swal({
                    title: 'No products selected',
                    position: 'top-end', 
                    icon: 'error', 
                    type: "error"}).then(function(){
                        window.location.href = 'https://preeminent-bienenstitch-640ed9.netlify.app/';
                }); 
            }else{
                this.carrito = JSON.parse(localStorage.getItem('carrito'))
            }
        }else{
            swal({
                title: 'No products selected',
                position: 'top-end', 
                icon: 'error', 
                type: "error"}).then(function(){
                    window.location.href = 'https://preeminent-bienenstitch-640ed9.netlify.app/';
            }); 
        }
        
        this.user = JSON.parse(localStorage.getItem('user'))

        var ids_productos = ''
        var precio = 0

        this.carrito.forEach(prod => {

            if (prod == this.carrito[0]) {
                ids_productos += prod.id
            }else{
                ids_productos += ','+prod.id
            }

            

            precio += prod.cantidad*prod.precio   
            
        });



        this.state = this.state = {
            carrito: {
                id_user: this.user.id,  
                ids_productos: ids_productos,
                precio: precio,
                numero_cuenta: '',
            },
            datos_banco: {
                full_name:'',
                numero_cuenta:'',
                CVV:'',
                exdate:''
            },
            errores:{
                full_nameerr:'',
                numererr:'',
                CVVerr:'',
                exdateerr:''
            },
        }
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
    comprar = (e)=>{
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
          }else{
              
                var f = new FormData()

                f.append("id_user", this.state.carrito.id_user)
                f.append("precio", this.state.carrito.precio)
                f.append("numero_cuenta", numero_cuenta)
                f.append("ids_productos", this.state.carrito.ids_productos)


                axios.post('https://splendorous-mission.000webhostapp.com/carrito/', f)
                .then((res)=>{
                    console.log(res.data);
                })
                .catch((error)=>{
                    console.log(error);
                });
               
                swal({
                    title: 'Successful purchase',
                    position: 'top-end', 
                    icon: 'success', 
                    type: "success"}).then(function(){
                        window.location.href = 'https://preeminent-bienenstitch-640ed9.netlify.app/';
                });  

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

        // Lo que devuelve

        return(
            <div id="container-payment">
                <div id="payment">
                    <div id="logo-payment">
                        <img src="assets/img/header/logo.jpg" alt="logo"/>
                    </div>
                    <div id="title-payment">
                        <h3>Pay Now</h3>
                    </div>
                    <div id="payment-form">
                        <form action="" method="post" onSubmit={this.comprar}>
                            <div id="container-payment-form">
                                <label for="fullname">Full Name</label>
                                <input type="text" placeholder="Enter full name" name="full_name" value={full_name} onChange={this.handleChange_res}/>
                                <div id="err">{full_nameerr}</div>
                                <label for="cardnumber">Card Number</label>
                                <input type="number" placeholder="Enter Card Number" name="numero_cuenta" min='0' value={numero_cuenta} onChange={this.handleChange_res}/>
                                <div id="err">{numererr}</div>
                                <label for="cvv">CVV</label>
                                <input type="number" placeholder="Enter CVV" name="CVV"  min='0' value={CVV} onChange={this.handleChange_res}/>
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
                    <button id="pay-now-payment" onClick={this.comprar}>Pay Now</button>
                        <Link to='/cart'><button id="back-payment">Back</button></Link>
                    </div>
                </div>

            </div>
                
        )
    }
}