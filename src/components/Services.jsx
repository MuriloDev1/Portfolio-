import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <ServicesContainer>
      <Title>Serviço prestado aos meus clientes. </Title>
    </ServicesContainer>
  );
};

const ServicesContainer = styled.section`
  text-align: start;
  height: 85dvh;
  margin: 0 6rem;
  background-color: var(--secondary-background);
`;

const Title = styled.h1`
  margin: 0 auto;
  font-size: 3.5vw;
`;

export default Services;
