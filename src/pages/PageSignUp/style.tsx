import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxPage = styled.div`
  margin: 65px 15px 0 15px;
  width: 95%;
`;

export { PageContainer, BoxPage };
