import { ButtonCustomizer } from "./style";

interface Props {
  name: string;
  typeButton: "button" | "submit";
  userType: string | null;
}

export default function FormButton({ name, typeButton, userType }: Props) {
  return (
    <ButtonCustomizer variant="contained" type={typeButton} userType={userType}>
      {name}
    </ButtonCustomizer>
  );
}
