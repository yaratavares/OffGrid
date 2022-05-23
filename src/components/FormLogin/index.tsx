import Box from "@mui/material/Box";
import React from "react";

import { FormData, Input, inputInfos } from "../../utils/inputInfo";
import FormButton from "../FormButton";
import FormInput from "../FormInput";

interface Props {
  userType: string | null;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function FormLogin({ userType, formData, setFormData }: Props) {
  const inputs = inputInfos.inputsLogin;

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
      <FormButton
        name="ENTRAR"
        typeButton="submit"
        userType={userType}
        handleClick={undefined}
      />
    </Box>
  );
}
