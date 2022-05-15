import styled from "styled-components";

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
`;

const BoxButtonsAndImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 80px;
    margin-bottom: 50px;
  }
`;

const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  button {
    border: none;
    font-weight: 800;
    font-size: 18px;

    :hover {
      cursor: pointer;
    }
  }
`;

const ButtonClient = styled.button`
  width: 80%;
  height: 50px;
  background-color: #986218;
`;
const ButtonCompany = styled.button`
  width: 80%;
  height: 50px;
  background-color: white;
`;

export {
  PageContainer,
  BoxButtonsAndImg,
  BoxButtons,
  ButtonClient,
  ButtonCompany,
};
