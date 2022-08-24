import { css } from "@emotion/css";
import { fonts } from "../../styling/fonts";

export const baseText = css`
  font-family: ${fonts.family.mono}, 'monospace';
  font-size: ${fonts.size.medium};
  font-weight: ${fonts.weight.regular};
`;

export const small = css`
  font-family: ${fonts.family.mono}, 'monospace';
  font-size: ${fonts.size.small};
  font-weight: ${fonts.weight.light};
`;

export const heading = css`
  font-family: ${fonts.family.mono}, 'monospace';
  font-size: ${fonts.size.largest};
  font-weight: ${fonts.weight.medium};
  margin-bottom: 16px;
`;