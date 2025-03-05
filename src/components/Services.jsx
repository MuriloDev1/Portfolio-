import React from "react";
import styled from "styled-components";

const Services = () => {
  return(
  <ServicesContainer>
    <Title>Serviço prestado aos meus clientes. </Title>
  </ServicesContainer>
  );
};

const ServicesContainer = styled.div`
  display: flex;
  height: 85dvh;
  background-color: var(--secondary-background);
`;

const Title = styled.h1`
  margin: 0 auto;
  font-size: 1.5rem;
`;

export default Services;
