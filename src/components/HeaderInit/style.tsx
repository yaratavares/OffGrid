import styled from "styled-components";

interface PropStyled {
  colorType: string;
}

const ContentHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color: ${({ colorType }: PropStyled) =>
    colorType === "cliente" ? "#986218" : "white"};
  padding: 0 15px;

  color: ${({ colorType }: PropStyled) =>
    colorType === "cliente" ? "white" : "black"};
  font-weight: 800;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed;
  top: 0;
  left: 0;
`;

export { ContentHeader };
