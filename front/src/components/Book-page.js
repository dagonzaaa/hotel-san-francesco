import React, { Component } from "react"; // Importamos react y component para la clase
import Booking from "./Booking";
import Homebook from "./Home-book";
// Definimos la clase y la exportamos 

export default class Bookpage extends Component {
    constructor(props) {
        super(props)
        this.state = this.state = {
            buscando: false
        }
    }

    buscar = (e)=>{
        this.setState({
            buscando: true
        })
    }

    nobuscar = (e)=>{
        this.setState({
            buscando: false
        })
    }

    render() {

        if (this.state.buscando) {
            return(
                <div>
                    <Booking rooms = {this.props.rooms} booking = {this.props.booking} anadirroom={this.props.anadirroom} aumentarroom={this.props.aumentarroom} borrarroom={this.props.borrarroom} disminuirroom={this.props.disminuirroom} nobuscar={this.nobuscar}/>
                </div>
            )
        }else{
            return(
                <div>
                    <Homebook buscando={this.state.buscando} buscar={this.buscar}/>
                </div>
            )
        }
        

        
    }
}