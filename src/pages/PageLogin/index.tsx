import Box from "@mui/material/Box";

import Divider from "../../components/Divider";
import FormButton from "../../components/FormButton";
import FormInput from "../../components/FormInput";
import Header from "../../components/Header";
import { Input, inputInfos } from "../../utils/inputInfo";
import { BoxPage, PageContainer } from "./style";

export default function PageLogin() {
  return (
    <PageContainer>
      <Header />
      <BoxPage>
        <form>
          <Box
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "100%",
              },
            }}
          >
            {inputInfos.clientInput.map((input: Input) => (
              <FormInput inputInformations={input} />
            ))}
            <FormButton name="ENTRAR" typeButton="submit" />
          </Box>
        </form>
        <Divider />
        <FormButton name="CRIAR CONTA" typeButton="button" />
      </BoxPage>
    </PageContainer>
  );
}
