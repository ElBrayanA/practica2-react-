import React from 'react'

const login = () => {

  return (
    <div>
    <h1>Login Page</h1>
    <form className='col-2'>
        <h5>Correo</h5>
        <input type="email" />
        <h5>Contraseña</h5>
        <input type="password" />
        <button>Login</button>
    </form>
    </div>
  )
}

export default login
