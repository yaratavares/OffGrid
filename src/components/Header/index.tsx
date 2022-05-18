import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ContentHeader } from "./style";

interface Props {
  userType: string;
}

export default function Header({ userType }: Props) {
  return (
    <ContentHeader colorType={userType}>
      <p>Login {userType}</p>
      <MoreVertIcon />
    </ContentHeader>
  );
}
