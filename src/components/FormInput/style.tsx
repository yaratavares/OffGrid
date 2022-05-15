import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const CustomizedInput = styled(TextField)`
  label {
    color: white;
  }

  input {
    color: white;
  }

  div {
    ::before {
      border-bottom: 1px solid rgba(255, 255, 255, 0.42);
    }

    :hover:not(.Mui-disabled):before {
      border-bottom: 1px solid rgba(255, 255, 255, 0.42);
    }
  }
`;

export { CustomizedInput };
