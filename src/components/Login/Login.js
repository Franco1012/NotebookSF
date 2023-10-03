import React from 'react';
import './Login.css';

const Login = ({children}) => {
  return (
    <div className='login-container'>
      {children}
      <input type='text' placeholder='Usuario' />
      <input type='password' placeholder='Contraseña' />
      <button>Iniciar Sesión</button>
      <button>Registrarse</button>
    </div>
  );
};

export default Login;
