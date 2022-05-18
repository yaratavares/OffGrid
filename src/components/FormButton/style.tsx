import styled from "@emotion/styled";
import Button from "@mui/material/Button";

import { StyledPropWithTypeUser } from "../../pages/PageLogin";

const ButtonCustomizer = styled(Button)`
  margin-top: 25px;
  width: 100%;
  background-color: ${({ userType }: StyledPropWithTypeUser) =>
    userType === "company" ? "white" : "#986218"} !important;
  color: ${({ userType }: StyledPropWithTypeUser) =>
    userType === "company" ? "black" : "white"} !important;
`;

export { ButtonCustomizer };
