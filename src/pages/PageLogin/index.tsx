import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Divider from "../../components/Divider";
import FormButton from "../../components/FormButton";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/Header";
import useQuery from "../../hooks/useQuery";
import api from "../../services/api";
import { BoxPage, PageContainer } from "./style";

export interface StyledPropWithTypeUser {
  userType: string | null;
}

export default function PageLogin() {
  const query = useQuery();
  const navigate = useNavigate();
  const [params, setParams] = useState(query.get("type"));

  useEffect(() => {
    if (params !== "client" && params !== "company") {
      navigate("/");
    }
  }, [params]);

  function loginClient(e: React.FormEvent) {
    e.preventDefault();

    console.log("OK! Processo de login cliente");
    // await api.signIn()
  }

  function loginCompany(e: React.FormEvent) {
    e.preventDefault();

    console.log("OK! Processo de login empresa");
  }

  return (
    <PageContainer>
      <Header userType={params === "client" ? "cliente" : "mecânico"} />
      <BoxPage>
        <form
          onSubmit={(e) =>
            params === "client" ? loginClient(e) : loginCompany(e)
          }
        >
          <FormLogin userType={params} />
        </form>
        <Divider />
        <FormButton name="CRIAR CONTA" typeButton="button" userType={params} />
      </BoxPage>
    </PageContainer>
  );
}
