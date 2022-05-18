import { FormData, Input } from "../../utils/inputInfo";
import { CustomizedInput } from "./style";

interface Props {
  inputInformations: Input;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export default function FormInput({
  inputInformations,
  formData,
  setFormData,
}: Props) {
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  }

  return (
    <CustomizedInput
      id={`standard-${inputInformations.type}`}
      label={inputInformations.label}
      type={inputInformations.type}
      variant="standard"
      onChange={(e) => handleInputChange(e)}
      value={formData[inputInformations.type]}
    />
  );
}
