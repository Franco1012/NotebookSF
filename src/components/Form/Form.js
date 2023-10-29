import React from 'react';
import './Form.css';


const Form = ({ crearOrden, nombre, telefono, email, setNombre, setTelefono, setEmail, isDisabled, isValidNombre, isValidTelefono, isValidEmail }) => {


    return (
        <div className='form-container'>
            <div className='form'>
                <h2 className='form-title'>Completar Formulario</h2>

                <input className='input-field' placeholder='Nombre' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                {!isValidNombre && <p>El nombre es obligatorio</p>}

                <input className='input-field' placeholder='Teléfono' type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                {isValidTelefono ? null : <p>Ingrese un número de teléfono válido (sólo dígitos)</p>}

                <input className='input-field' placeholder='Mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {isValidEmail ? null : <p>Ingrese un correo electrónico válido (debe contener '@')</p>}

                <button className='submit-button .submit-button' disabled={isDisabled()} onClick={() => crearOrden()} type='submit'>Confirmar Compra</button>
            </div>
        </div>

    );
}

export default Form;
