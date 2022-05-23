import MoreVertIcon from "@mui/icons-material/MoreVert";

import { ContentHeader } from "./style";

interface Props {
  typePage: string;
  userType: string;
}

export default function HeaderInit({ typePage, userType }: Props) {
  return (
    <ContentHeader colorType={userType}>
      <p>
        {typePage} {userType}
      </p>
      <MoreVertIcon />
    </ContentHeader>
  );
}
