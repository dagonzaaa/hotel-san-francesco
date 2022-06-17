import React from "react"; // Importamos react
import {Link} from 'react-router-dom'; // Importamos Link para las rutas

// Creamos la función

function Cart (data){

    var final_cart=[];
	var preciototal = 0;
	var p = 0;

	for (let producto of data.carrito) {
		let indice = p;
		final_cart.push(
            <div id="div-products">
                <a>
                    <img src={producto.img} class="cart-thumb" alt="image" />
                </a>
                <div>
                    <p>{producto.cantidad} x {producto.nombre} <br></br> <span class="price">{producto.precio} €</span></p>
                </div>
                <div id="cart-delete">
                    <button onClick={()=>{
                        if (producto.cantidad == 1) {
                            data.borrar(indice);
                            localStorage.setItem('carrito', JSON.stringify(data.carrito));
                        }else{
                            data.disminuir(indice);
                            localStorage.setItem('carrito', JSON.stringify(data.carrito));
                        }
                    }}>Delete</button>
                </div>
            </div>
		);
		preciototal += producto.cantidad * producto.precio;
		p++;
	}

        // Lo que devuelve la función

        return (
            <div id="container-cart">
                <div id="container-cart-2">
                    <div id="logo-cart">
                        <img src="assets/img/header/logo.jpg" alt="logo"/>
                    </div>
                    <div id="titulo-cart">
                        <h3>Your shopping cart</h3>
                    </div>
                    <div id="container-cart-3">
                        <div id="cart-products">
                            {final_cart}
                        </div>
                        <div id="cart-options">
                            <p>Your products: {data.carrito.length}</p>
                            <p>Total: € {preciototal}</p>
                            <div id="cart-buttons">
                                <Link to='/payment'><button>Pay now</button></Link>
                                <Link to='/shop'><button>Back</button></Link>
                            </div>
                            <img src="assets/img/cart/payment.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
		
        );
}

// Hacemos la exportación de la función

export default Cart;