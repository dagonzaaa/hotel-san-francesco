import React, { Component } from "react"; // Importamos react y component para la clase 
import {Link} from 'react-router-dom'; // Importamos Link para las rutas

// Definimos la clase y la exportamos 

export default class Nav extends Component {

    render() {

        if (localStorage.getItem('user')) {
            return(
                <div id="menu">
                    <ul>
                        <li id="hotel"><Link to='/'>HOME</Link></li>
                        <li><Link to='/rooms'>ROOMS</Link></li>
                        <li><Link to='/welfare'>WELFARE</Link></li>
                        <li><Link to='/kitchen'>KITCHEN km 0</Link></li>
                        <li><Link to='/where'>WHERE WE ARE</Link></li>
                        <li><Link to='/rates'>RATES</Link></li>
                        <li><Link to='/shop'>SHOP</Link></li>
                    </ul>
                </div>
            )
          }else{
            return(
                <div id="menu">
                    <ul>
                        <li id="hotel"><Link to='/'>HOME</Link></li>
                        <li><Link to='/rooms'>ROOMS</Link></li>
                        <li><Link to='/welfare'>WELFARE</Link></li>
                        <li><Link to='/kitchen'>KITCHEN km 0</Link></li>
                        <li><Link to='/where'>WHERE WE ARE</Link></li>
                        <li><Link to='/rates'>RATES</Link></li>
                    </ul>
                </div>
            )
          }
    }
}