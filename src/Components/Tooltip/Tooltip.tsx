import React from "react";
import styled from "@emotion/styled";
import { defaultConfig } from "../DefaultModule";

interface ToolTipProps {
  children: JSX.Element;
  trigger: "hover" | "click";
  TipText: string;
  TextColor?: React.CSSProperties["color"];
  BackgroundColor?: React.CSSProperties["backgroundColor"];
  revealBottom?: boolean;
}
export function Tooltip(prop: ToolTipProps) {
  const StyledContainer = styled.div`
    cursor: default;
    position: relative;
    transform-origin: bottom left;
    width:fit-content;

    &:before {
      position: absolute;
      ${prop.revealBottom ? `top:140%;` : `bottom:140%;`}
      opacity:0%;
      left: 50%;
      font-size: 20px;
      font-family: ${defaultConfig.textStyle["H5-desktop"].fontfamily};
      width: max-content;
      max-width: 302px;
      min-width: 200px;
      text-align: center;
      box-shadow: 0px 2px 10px black;
      transform-origin: 50% 50%;
      transform: translate(-50%, 30%);
      content: "${prop.TipText}";
      padding-left: 10px;
      border-radius: 5px;
      padding-right: 10px;
      max-height: 50px;
      padding-top: 5px;
      padding-bottom: 5px;
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      color: ${prop.TextColor ? prop.TextColor : `white`};
      background-color: ${prop.BackgroundColor
        ? prop.BackgroundColor
        : defaultConfig.N55};
    }
    @media (min-width: ${defaultConfig.mobileBR}) {
      font-size: ${defaultConfig.textStyle["H7-mobile"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H7-mobile"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H7-mobile"].fontweight ==
      "regular"
        ? "400"
        : ""};
    }
    @media (min-width: ${defaultConfig.laptopBR}) {
      font-size: ${defaultConfig.textStyle["H7-laptop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H7-laptop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H7-laptop"].fontweight ==
      "regular"
        ? "400"
        : ""};
    }
    @media (min-width: ${defaultConfig.desktopBR}) {
      font-size: ${defaultConfig.textStyle["H7-desktop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H7-desktop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H7-desktop"].fontweight ==
      "regular"
        ? "400"
        : ""};
    }
    ${prop.trigger == "hover"
      ? `&:hover{
        &:before{
            opacity:100%;
            transform: translate(-50%, 0%);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
    }`
      : `
    &:active{
        &:before{
            opacity:100%;
            transform: translate(-50%, 0%);
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
    `}
  `;
  return (
    <>
      <StyledContainer>{prop.children}</StyledContainer>
    </>
  );
}

/**
 * @param children :- Can Consists of Any Valid React Node
 * @param trigger :- Consists of Type of Interaction which cause the tooltip to show
 * @param TipText :- Actual Tip to Show
 * @param TextColor :- [Optional] Change be used to Change Text Color
 * @param BackgroundColor :- [Optional] Change be used to Change Text Background
 * @param revealBottom :- Chnage the Reveal Postion to Bottom
 */