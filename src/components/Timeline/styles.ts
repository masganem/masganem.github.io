import { css } from "@emotion/css";
import { colors } from "../../styling/colors";

export const timeline = css`
  width: 100vw;
  position: absolute;
  right: 0;
  display: flex;
  flex-flow: column;
  gap: 32px;
  margin-top: 12px;
  padding-bottom: 2em;
  overflow: hidden;
`

export const indexes = css`
  display: flex;
`

export const index = (isActive: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  height: 16px;
  width: 16px;
  border: solid 1px ${isActive ? colors.vanilla : colors.lightgray};
  border-radius: 50%;
  background-color: ${isActive ? colors.vanilla : colors.darkgray};
  cursor: pointer;
  transition: all 300ms;

  transform: translateY(50%);

  &:hover {
    border-color: ${colors.vanilla};
  }
`

export const indexConnection = (index: number, length: number) => {
  if (index === 0) {
    return css`
      &:after {
        z-index: -1;
        content: "";
        width:50%;
        height:100%;
        border-bottom: solid 1px white;
        position: absolute;
        right:0;
        top:-1px;
      }
    `;
  } else if (index === length-1) {
    return css`
      &:after {
        z-index: -1;
        content: "";
        width:400%;
        height:100%;
        border-bottom: solid 1px white;
        position: absolute;
        left:0;
        top:-1px;
      }
    `;
  } else return css`
    border-bottom: solid 1px ${colors.vanilla};
  `;
}


export const shiftItem = (index: number, currentIndex: number, length: number) => {
  const center = Math.floor(length/2);

  return css`
    transition: all 300ms;
    width: 100%;
    transform: translate(${(center-currentIndex)*100}%);
  `;
};

export const mobileCardShift = (currentIndex: number) => css`
  @media (max-width: 768px) {
    width: 100vw;
    transform: translate(${(-currentIndex)*100}%);
  }
`;


export const horizontalCarousel = css`
  display: flex;
  flex-flow: row;
  width: fit-content;
`;


export const horizontalCarouselItem = (isActive: boolean) => css`
  padding: 12px;
  flex: 1;
  cursor: pointer;
  > * {
    border-color: ${isActive ? colors.vanilla : colors.lightgray};
    box-shadow: ${isActive ? "white 5px 5px 0px" : "none"};
  }
`;