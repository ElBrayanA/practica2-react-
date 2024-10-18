import React from 'react'

const register = () => {
  return (
    <div>
    <h1>Login Page</h1>
    <form className='col-2'>
        <h5>Nombre</h5>
        <input type="email" />
        <h5>Correo</h5>
        <input type="password" />
        <h5>Role</h5>
        <input type="password" />
        <h5>Contraseña</h5>
        <input type="password" />
        <button>Register</button>
    </form>
    </div>
  )
}

export default register
