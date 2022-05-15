import { styled } from "@mui/material";
import Divider from "@mui/material/Divider";

const DividerCustomizer = styled(Divider)`
  margin-top: 25px;
  width: 100%;
  color: white;
  font-size: 12px;

  ::before,
  ::after {
    border-color: rgba(255, 255, 255, 0.75);
    top: 0;
  }
`;

export { DividerCustomizer };
