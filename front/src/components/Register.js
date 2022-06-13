import React, { Component, useEffect } from "react"; // import react
import axios from "axios"; // Importamos axios
import swal from 'sweetalert'; // Importamos swal para las alertas personalizadas

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = this.state = {
            registro: {
                name: '',
                lastname: '',
                username: '',
                email: '',
                password: '',
            },
            logueo: {
                username_l: '',
                password_l: ''
            },
            errores_reg: {
                nameerr: '',
                lastnameerr: '',
                usernameerr: '',
                emailerr: '',
                passworderr: '',
            },
            errores_log: {
                usernameerr_l: '',
                passworderr_l: '',
            },
            personas: []
        }
        this.getPersonas()
    }

    getPersonas = ()=>{
        axios.get('https://splendorous-mission.000webhostapp.com/personas/')
        .then(response=>{
            this.setState({
                personas: [response.data]
            })
        })
    }
    
    handleChange_reg = (e) => {
        const { name, value } = e.target
        this.setState({
            registro: {
            ...this.state.registro,
            [name]: value,
          },
        })
    }

    registrar = async (e) =>{
        e.preventDefault()
        this.setState({
            errores_reg: {
                nameerr: '',
                lastnameerr: '',
                usernameerr: '',
                emailerr: '',
                passworderr: '',
            },
          })
        
        const { name, lastname ,username ,email ,password} = this.state.registro
        const errores_reg =  { nameerr: '', lastnameerr: '', usernameerr: '', emailerr: '', passworderr: ''}
        let isvalid = true

        if (!name) {
            errores_reg.nameerr = 'Name is required'
            isvalid = false
        }
        if (!lastname) {
            errores_reg.lastnameerr = 'Lastname is required'
            isvalid = false
        }
        if (!username) {
            errores_reg.usernameerr = 'Username is required'
            isvalid = false
        } else{
                for (let persona of this.state.personas[0]) {
                    if (persona.username == username) {
                        errores_reg.usernameerr = 'Username is already in use'
                        isvalid = false
                    }
                }
        }
        if (!email) {
            errores_reg.emailerr = 'Email is required'
            isvalid = false
        }
        if (!password) {
            errores_reg.passworderr = 'Password is required'
            isvalid = false
        }

        if (!isvalid) {
            this.setState({ errores_reg })

            console.log(JSON.stringify(errores_reg))
          }else{
            const user = {name: name, lastname:lastname, username:username,email:email,password:password}  
            console.log(JSON.stringify(user));

            var f = new FormData()

            f.append("name", name)
            f.append("lastname", lastname)
            f.append("username", username)
            f.append("email", email)
            f.append("pass", password)

            axios.post('https://splendorous-mission.000webhostapp.com/personas/', f)
            .then((res)=>{
                console.log(res.data);
              })
              .catch((error)=>{
                console.log(error);
              });

              swal({
                title: 'Registered Successfully',
                position: 'top-end', 
                icon: 'success', 
                type: "success"}).then(function(){
                    window.location.reload();
                });  
    
            this.setState({
                registro: {
                    name: '',
                    lastname: '',
                    username: '',
                    email: '',
                    password: '',
                },
              })
            }
    }

    render(){
        const { name, lastname ,username ,email ,password} = this.state.registro
        const { nameerr, lastnameerr ,usernameerr ,emailerr ,passworderr} = this.state.errores_reg
        return(
            <div id="registro">
                        <h1 id="titulo">Register</h1>
                        <form action="" method="post" onSubmit={this.registrar}>
                            <div id="container">
                                <label for="name"><b>Name</b></label>
                                <input type="text" placeholder="Enter name" name="name" value={name} onChange={this.handleChange_reg}/>
                                <div id="err">{nameerr}</div>
                                <label for="lastname"><b>Lastname</b></label>
                                <input type="text" placeholder="Enter lastname" name="lastname" value={lastname} onChange={this.handleChange_reg}/>
                                <div id="err">{lastnameerr}</div>
                                <label for="username"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange_reg}/>
                                <div id="err">{usernameerr}</div>
                                <label for="email"><b>E-mail</b></label>
                                <input type="email" placeholder="Enter e-mail" name="email" value={email} onChange={this.handleChange_reg}/>
                                <div id="err">{emailerr}</div>
                                <label for="password"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={this.handleChange_reg}/>
                                <div id="err">{passworderr}</div>
                                <input type="submit" value="Register"/>
                            </div>
                        </form>
                    </div>
        )
    }
}