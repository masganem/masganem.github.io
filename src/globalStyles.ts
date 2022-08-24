import { css } from "@emotion/react";
import { colors } from "./styling/colors";

export const globalStyles = css`
  body {
    background-color: ${colors.darkgray};
    color: ${colors.vanilla};
  }

  a {
    color: inherit;
    cursor: pointer;
  }
`;