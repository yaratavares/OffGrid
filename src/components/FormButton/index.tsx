import { ButtonCustomizer } from "./style";

interface Props {
  name: string;
  typeButton: "button" | "submit";
  userType: string | null;
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export default function FormButton({
  name,
  typeButton,
  userType,
  handleClick,
}: Props) {
  return (
    <ButtonCustomizer
      variant="contained"
      type={typeButton}
      userType={userType}
      onClick={handleClick}
    >
      {name}
    </ButtonCustomizer>
  );
}
