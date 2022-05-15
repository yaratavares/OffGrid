import { ButtonCustomizer } from "./style";

interface Props {
  name: string;
  typeButton: "button" | "submit";
}

export default function FormButton({ name, typeButton }: Props) {
  return (
    <ButtonCustomizer variant="contained" type={typeButton}>
      {name}
    </ButtonCustomizer>
  );
}
