import React, { Component, useEffect } from "react"; // import react
import axios from "axios"; // import axios
import swal from 'sweetalert'; // Importamos swal para las alertas personalizadas


export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = this.state = {
            logueo: {
                username: '',
                password: ''
            },
            errores: {
                usernameerr: '',
                passworderr: '',
            },
            personas: []
        }
        this.getPersonas()
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({
            logueo: {
            ...this.state.logueo,
            [name]: value,
          },
        })
    }

    getPersonas = ()=>{
        axios.get('https://splendorous-mission.000webhostapp.com/personas/')
        .then(response=>{
            this.setState({
                personas: [response.data]
            })
        })
    }

    loguear = async (e) =>{
        e.preventDefault()

        this.setState({
            errores: {
                usernameerr: '',
                passworderr: '',
            },
        })

        const { username, password } = this.state.logueo
        const errores = { usernameerr: '',  passworderr: ''}
        let isValid = true


        if (!username) {
            errores.usernameerr = 'Username is required'
            isValid = false
          }else{
              let personaesta = false
                for (let persona of this.state.personas[0]) {
                    if (persona.username == username) {
                        personaesta = true
                    }          
                }
                if (!personaesta){
                    errores.usernameerr = 'Username not found'
                    isValid = false
                } 
            }

      
          if (!password) {
            errores.passworderr = 'Password is required'
            isValid = false
          }else{
                for (let persona of this.state.personas[0]) {
                    if (persona.username == username) {
                        if (persona.password != password) {
                            errores.passworderr = 'Invalid password'
                            isValid = false
                        }
                    }
                }
          }
      
          if (!isValid) {
            this.setState({ errores })

            console.log(JSON.stringify(errores))
          }else{
            const user = {username: username, password: password}
            console.log(JSON.stringify(user))

            for (let  persona of this.state.personas[0]) {
                if (persona.username == user.username) {
                    var usuario_es = persona;
                }
            }

            localStorage.setItem('user', JSON.stringify(usuario_es))
    

            swal({
            title: `Welcome ${user.username}`,
            position: 'top-end', 
            icon: 'success', 
            type: "success"}).then(function(){
                window.location.reload();
            });         

            this.setState({
                logueo: {
                    username: '',
                    password: ''
                },
              })
            } 
            
      }

    render(){
        const { username, password } = this.state.logueo
        const { usernameerr, passworderr } = this.state.errores
        return(
            <div id="login">
                <div>
                    <h1 id="titulo">Hotel San Francesco</h1>
                    <form action="" method="post" onSubmit={this.loguear}>
                        <div id="container">
                            <label for="username"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange}/>
                            <div id="err">{usernameerr}</div>
                            <label for="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange}/>
                            <div id="err">{passworderr}</div>
                            <input type="submit" value="Login"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}