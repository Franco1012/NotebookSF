import { useState } from 'react';

const useFormValidation=()=> {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [email, setEmail] = useState('');
  const isValidNombre = nombre.trim() !== '';
  const isValidTelefono = /^[0-9]+$/.test(telefono);
  const isValidEmail = /@/.test(email);

  const isDisabled = () => {
    return !isValidNombre || !isValidTelefono || !isValidEmail;
  };

  return {
    nombre,
    setNombre,
    isValidNombre,
    telefono,
    setTelefono,
    isValidTelefono,
    email,
    setEmail,
    isValidEmail,
    isDisabled,
  };
}

export default useFormValidation;
