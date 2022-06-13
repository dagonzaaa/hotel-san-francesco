import React, { useState } from 'react'; // Importamos react y useState para rastrear el estado en un componente de la función.
import {Routes, Route} from 'react-router-dom'; // Importammos para las rutas
import { BrowserRouter } from 'react-router-dom'; // Lo importamos también para las rutas

// Importamos todos nuestros componentes  

import Home from './components/Home';
import Homebook from './components/Home-book';
import Rooms from './components/Rooms';
import Welfare from './components/Welfare';
import Kitchen from './components/Kitchen';
import Where from './components/Where';
import Rates from './components/Rates';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Booking from './components/Booking';
import Payment from './components/Payment';
import Paymentbook from './components/Payment-book';
import More from './components/More';
import Bookpage from './components/Book-page';

// Definimos la función App

function App() {

  // Definimos el array de objetos para los productos de la tienda

  const productos = [
    {id: 1, nombre: "CLEANSER", tipo: "For the face", cantidad: 1, precio: 18.00, img: '../assets/img/shop/product.png'},
    {id: 2, nombre: "MOISTURIZING CREAM", tipo: "For the face", cantidad: 1, precio: 24.00, img: '../assets/img/shop/product1.png'},
    {id: 3, nombre: "TONIC", tipo: "For the face", cantidad: 1, precio: 20.00, img: '../assets/img/shop/product.png'},
    {id: 4, nombre: "ANTI-AGING CREAM", tipo: "For the face", cantidad: 1, precio: 27.00, img: '../assets/img/shop/product1.png'},
    {id: 5, nombre: "MOISTURIZING MASK", tipo: "For the face", cantidad: 1, precio: 28.00, img: '../assets/img/shop/product.png'},
    {id: 6, nombre: "ANTIAGE MASK", tipo: "For the face", cantidad: 1, precio: 30.00, img: '../assets/img/shop/product1.png'},
    {id: 7, nombre: "THERMAL MUD MASK", tipo: "For the face", cantidad: 1, precio: 28.00, img: '../assets/img/shop/product.png'},
    {id: 8, nombre: "SWEET ALMOND CREAM", tipo: "For the body", cantidad: 1, precio: 22.00, img: '../assets/img/shop/product1.png'},
    {id: 9, nombre: "ANTI-CELLULITE MUD", tipo: "For the body", cantidad: 1, precio: 35.00, img: '../assets/img/shop/product.png'}
  ];

  // LocalStorage del carrito

  if(localStorage.getItem('carrito')){
    var carrito = JSON.parse(localStorage.getItem('carrito'))
  }else{
    var carrito = [];
  }

  // LocalStorage del usuario

  if (localStorage.getItem('user')) {
    var url_book = '/'
    var url_log = '/NON'
  }else{
    var url_book = '/NON'
    var url_log = '/'
  }

  // Hacemos uso del useState

  const [datos, setDatos] = useState({productos:productos,carrito:carrito});

  // Función arrow para añadir un producto

  const anadir = (producto)=>{
    datos.carrito.push(producto)
    console.log(producto)
    setDatos({
      productos:productos,
      carrito:[...datos.carrito],
    })
  }

  // Función arrow para borrar un producto

  const borrar = (indice)=>{
    datos.carrito.splice(indice,1)
    setDatos({
      productos:productos,
      carrito:[...datos.carrito],
    })
  }

  // Función arrow para incrementar el índice

  const sumar = (indice)=>{
    datos.carrito[indice].cantidad++
    setDatos({
      productos:productos,
      carrito:[...datos.carrito]
    })
  }

  // Función arrow para decrementar el índice

  const restar = (indice)=>{
    datos.carrito[indice].cantidad--
    setDatos({
      productos:productos,
      carrito:[...datos.carrito]
    })
  }

  // Definimos el array de objetos para las habitaciones

  const rooms = [
    {id: 1, nombre: "Deluxe", cantidad: 1, precio: 150.00, img: '../assets/img/rooms/deluxe1.jpg'},
    {id: 2, nombre: "Classic", cantidad: 1, precio: 120.00, img: '../assets/img/rooms/classic1.jpg'},
    {id: 3, nombre: "Family", cantidad: 1, precio: 130.00, img: '../assets/img/rooms/family1.jpg'},
    {id: 4, nombre: "Standard", cantidad: 1, precio: 110.00, img: '../assets/img/rooms/standard1.jpg'}
  ];

  // LocalStorage de la reserva 

  if(localStorage.getItem('booking')){
    var booking = JSON.parse(localStorage.getItem('booking'))
  }else{
    var booking = [];
  }

  // Hacemos uso del useState

  const [datos1, setDatos1] = useState({rooms:rooms,booking:booking});

  // Función arrow para añadir una habitación 

  const anadirroom = (room)=>{
    datos1.booking.push(room)
    console.log(room)
    setDatos1({
      rooms:rooms,
      booking:[...datos1.booking],
    })
  }

  // Función arrow para borrar una habitación

  const borrarroom = (indice1)=>{
    datos1.booking.splice(indice1,1)
    setDatos1({
      rooms:rooms,
      booking:[...datos1.booking],
    })
  }

  // Función arrow para incrementar el índice

  const sumarroom = (indice1)=>{
    datos1.booking[indice1].cantidad++
    setDatos1({
      rooms:rooms,
      booking:[...datos1.booking]
    })
  }

  // Función arrow para decrementar el índice

  const restarroom = (indice1)=>{
    datos1.booking[indice1].cantidad--
    setDatos1({
      rooms:rooms,
      booking:[...datos1.booking]
    })
  }

  // Lo que devuelve la función 

    return (

      // Hacemos uso de las rutas para los componentes 

      <BrowserRouter>
        <Routes>
          <Route>
            <Route path ={url_log} element = {<Home />}/>
            <Route path ={url_book} element = {<Bookpage rooms = {datos1.rooms} booking = {datos1.booking} anadirroom={anadirroom} aumentarroom={sumarroom} borrarroom={borrarroom} disminuirroom={restarroom}/>}/>
            <Route path ='/rooms' element = {<Rooms />}/>
            <Route path ='/welfare' element = {<Welfare />}/>
            <Route path ='/kitchen' element = {<Kitchen />}/>
            <Route path ='/where' element = {<Where />}/>

            {/* Le pasamos los datos y las funciones a los componentes que lo necesiten */}

            <Route path ='/cart' element = {<Cart carrito = {datos.carrito} borrar={borrar} aumentar={sumar} disminuir={restar}/>}/>
            <Route path ='/rates' element = {<Rates />}/>
            <Route path ='/shop' element = {<Shop productos = {datos.productos} carrito = {datos.carrito} anadir={anadir} aumentar={sumar}/>}/>
            <Route path ='/more' element = {<More />}/>
            <Route path ='/payment' element = {<Payment />}/>
            <Route path ='/payment-book' element = {<Paymentbook />}/>
          </Route>
        </Routes> 
      </BrowserRouter>
    );
}

// Exportamos la función  

export default App;
