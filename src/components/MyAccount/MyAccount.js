import React, { useState } from 'react';
import Login from '../Login/Login';
import './MyAccount.css'

const MyAccount = () => {
  const [mostrarLogin, setMostrarLogin] = useState(false)
  const visibilidadLogin = () => {
    setMostrarLogin(!mostrarLogin)
  }
  return (
    <div>
      <input className='mi-cuenta-button mi-cuenta-button:hover' onClick={visibilidadLogin} type='button' value='Mi Cuenta' />
      {mostrarLogin ? <Login><h2>Login</h2></Login> : null}
    </div>


  )
}
export default MyAccount