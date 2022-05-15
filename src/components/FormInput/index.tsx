import { Input } from "../../utils/inputInfo";
import { CustomizedInput } from "./style";

interface Props {
  inputInformations: Input;
}

export default function FormInput({ inputInformations }: Props) {
  return (
    <CustomizedInput
      id={`standard-${inputInformations.type}`}
      label={inputInformations.label}
      type={inputInformations.type}
      variant="standard"
    />
  );
}
