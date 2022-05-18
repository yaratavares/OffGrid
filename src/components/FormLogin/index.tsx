import Box from "@mui/material/Box";
import { useState } from "react";

import { StyledPropWithTypeUser } from "../../pages/PageLogin";
import { FormData, Input, inputInfos } from "../../utils/inputInfo";
import FormButton from "../FormButton";
import FormInput from "../FormInput";

export default function FormLogin({ userType }: StyledPropWithTypeUser) {
  const inputs = inputInfos.inputsLogin;
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  return (
    <Box
      sx={{
        "& .MuiTextField-root": {
          m: 1,
          width: "100%",
        },
      }}
    >
      {inputs.map((input: Input) => (
        <FormInput
          inputInformations={input}
          formData={formData}
          setFormData={setFormData}
        />
      ))}
      <FormButton name="ENTRAR" typeButton="submit" userType={userType} />
    </Box>
  );
}
