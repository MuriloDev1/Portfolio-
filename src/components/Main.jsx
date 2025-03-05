import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  margin: 0 auto;
  padding: 0 6rem;
`;

const Main = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default Main;
