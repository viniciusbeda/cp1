import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiHome, FiList, FiUser } from 'react-icons/fi'; // Importar ícones

const Navbar = () => {
  return (
    <Nav>
      <NavItem>
        <StyledLink to="/">
          <FiHome size={24} />
          Home
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/nova-lista">
          <FiList size={24} />
          Nova Lista
        </StyledLink>
      </NavItem>
      <NavItem>
        <StyledLink to="/perfil">
          <FiUser size={24} />
          Perfil
        </StyledLink>
      </NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: white;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

const NavItem = styled.div`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007aff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14px;

  &:hover {
    color: #005bb5;
  }
`;

export default Navbar;
