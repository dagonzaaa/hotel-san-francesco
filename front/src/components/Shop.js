import React from "react"; // Importamos react
import {Link} from 'react-router-dom'; // Importamos Link para las rutas
import Nav from "./nav";

// Definimos la función 

function Shop (data){
	var final=[];
	for (let producto of data.productos) {
		final.push(
				<div>
					<div id="productos">
                        <h3>{producto.nombre}</h3>
						<img src={producto.img} alt=""/>
                        <p>{producto.tipo}</p>
                        <p id="price-product">Price: € {producto.precio}</p>
						<button onClick={()=>{
							let comprobador = true
							let indice = 0
							for(let prod of data.carrito){
								if(prod.nombre == producto.nombre){
									data.aumentar(indice)
									localStorage.setItem('carrito', JSON.stringify(data.carrito));
									comprobador = false
								}
								indice++
							}
							if(comprobador){
								data.anadir(producto);
								localStorage.setItem('carrito', JSON.stringify(data.carrito));
							}
							}}>
							Add to cart
						</button>
						<Link to='/more'><button>More</button></Link>
					</div>
				</div>
		)
	}

	var num_prod = 0
	data.carrito.forEach(prod => {
		num_prod += prod.cantidad
	});

		// Lo que devuelve

        return (
            
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
			<div id="shop-container">
				<h2>Our products</h2>
				<div id="cart-props">
					<span id="cart-length">{num_prod}</span>
					<Link to='/cart' id="cart-icon"><i class="fa fa-shopping-cart"></i></Link>
				</div>
                <div id="shop-products">
                    {final}
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
        );
}

// Exportamos la función

export default Shop;