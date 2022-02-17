import React from 'react'
import LoginForm from './LoginForm'


const Login = () => {
    
    let mensajeBienvenida = "Bienvenido a nuestra de control de inventario de activo fijo."
    let mensajeIngresoCredenciales = "Para acceder, ingresa tus credenciales de usuario y contraseña"
  return (
   <div className="container row">
       <div class="jumbotron col mt-5 ">
            <h1 class="display-4">Bienvenidos</h1>
            <p class="lead">{mensajeBienvenida}</p>
            <hr class="my-4"/>
            <p>{mensajeIngresoCredenciales}</p>
            <LoginForm></LoginForm>
       </div>
       <div className="col">
          <p>Logo</p>
       </div>
   </div>
  )
}

export default Login