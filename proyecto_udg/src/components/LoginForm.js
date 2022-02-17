import React from 'react'

const LoginForm = () => {
  return (
    <div>
        <form>
            <div class="row mb-3">
                <label for="username" class="col-sm-2 col-form-label">Username:</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" required/>
                </div>
            </div>
            <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">Contraseña</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword3" required/>
                </div>
            </div>
            <button className='btn' style={{width:"100%", background:"#1C658C", color:"#fff"}} type='Submit'>Ingresar</button>
            </form>
    </div>
  )
}

export default LoginForm