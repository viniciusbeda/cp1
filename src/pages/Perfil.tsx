import React from 'react';
import styled from 'styled-components';

const Perfil = () => {
  return (
    <Container>
      <Title>Perfil</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #007aff;
  font-size: 24px;
`;

export default Perfil;
