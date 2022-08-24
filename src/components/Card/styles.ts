import { css } from "@emotion/css";
import { colors } from "../../styling/colors";

export const card = css`
  border-radius: 8px;
  border: solid 1px ${colors.lightgray};
  padding: 12px;
  transition: all 300ms;

  &:hover {
    border-color: ${colors.vanilla};
  }
`;