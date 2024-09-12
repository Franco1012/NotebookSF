import React from 'react'
import styled from 'styled-components';
// Definir el estilo para el contenedor y el título usando styled-components
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #f5f5f5;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;
const Contacto = () => {
  return (
    <Container><Title>Contacto</Title></Container>
  )
}
export default Contacto
