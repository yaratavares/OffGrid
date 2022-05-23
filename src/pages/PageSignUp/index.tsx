import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Divider from "../../components/Divider";
import FormButton from "../../components/FormButton";
import FormLogin from "../../components/FormLogin";
import Header from "../../components/HeaderInit";
import useQuery from "../../hooks/useQuery";
import api from "../../services/api";
import { FormData } from "../../utils/inputInfo";
import { BoxPage, PageContainer } from "./style";

export interface StyledPropWithTypeUser {
  userType: string | null;
}

export default function PageSignUp() {
  const query = useQuery();
  const navigate = useNavigate();
  const [params, setParams] = useState(query.get("type"));
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (params !== "client" && params !== "company") {
      navigate("/");
    }
  }, [params]);

  function loginClient(e: React.FormEvent) {
    e.preventDefault();

    console.log("OK! Processo de cadastro cliente");
  }

  function loginCompany(e: React.FormEvent) {
    e.preventDefault();

    console.log("OK! Processo de cadastro empresa");
  }

  const handleClickButtonLoginAccount = () => {
    navigate(`/login?type=${params}`);
  };

  return (
    <PageContainer>
      <Header
        typePage="Cadastro"
        userType={params === "client" ? "cliente" : "mecânico"}
      />
      <BoxPage>
        <form
          onSubmit={(e) =>
            params === "client" ? loginClient(e) : loginCompany(e)
          }
        >
          <FormLogin
            userType={params}
            formData={formData}
            setFormData={setFormData}
          />
        </form>
        <Divider />
        <FormButton
          name="FAZER LOGIN"
          typeButton="button"
          userType={params}
          handleClick={handleClickButtonLoginAccount}
        />
      </BoxPage>
    </PageContainer>
  );
}
