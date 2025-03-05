import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Portfólio</Logo>
      <Nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <ContactButton href="#contact">Contato</ContactButton>
          </li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: var(--header);
  padding: 3rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: decimal-leading-zero;
    font-weight: 500;
    padding: 0;
  }

  li::marker {
    color: var(--highlight-color);
    font-weight: bold;
  }

  li {
    transition: 0.3s;
    margin-left: 80px;
  }

  /* Remover o list-style e ajustar o espaçamento do último item */
  li:last-child {
    list-style: none;
    margin-left: 40px; /* Reduzir o espaço para alinhar corretamente */
  }

  li:hover {
    color: #ccccccf3;
  }
`;

const ContactButton = styled.a`
  border: 1px solid var(--highlight-color);
  border-radius: 4px;
  padding: 0.8rem;
  color: var(--highlight-color);
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background-color: var(--highlight-color);
    color: white;
  }
`;

const Logo = styled.div`
  color: var(--highlight-color);
  font-size: 24px;
  font-weight: bold;
`;

export default Header;
