import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo1.png";
import {
  BoxButtons,
  BoxButtonsAndImg,
  ButtonClient,
  ButtonCompany,
  PageContainer,
} from "./style";

export default function PageInit() {
  const navigate = useNavigate();

  return (
    <PageContainer>
      <BoxButtonsAndImg>
        <img src={logo} alt="logo offgrid" />
        <BoxButtons>
          <ButtonClient onClick={() => navigate("/login")}>
            CLIENTE
          </ButtonClient>
          <ButtonCompany>MECÂNICO</ButtonCompany>
        </BoxButtons>
      </BoxButtonsAndImg>
    </PageContainer>
  );
}
