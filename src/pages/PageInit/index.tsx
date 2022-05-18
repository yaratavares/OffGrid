import React from "react";
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

  function sendClientPage() {
    navigate("/login?type=client");
  }

  function sendCompanyPage() {
    navigate("/login?type=company");
  }

  return (
    <PageContainer>
      <BoxButtonsAndImg>
        <img src={logo} alt="logo offgrid" />
        <BoxButtons>
          <ButtonClient onClick={() => sendClientPage()}>CLIENTE</ButtonClient>
          <ButtonCompany onClick={() => sendCompanyPage()}>
            MECÂNICO
          </ButtonCompany>
        </BoxButtons>
      </BoxButtonsAndImg>
    </PageContainer>
  );
}
