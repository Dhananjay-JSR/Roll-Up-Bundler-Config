import { keyframes } from "@emotion/react";
import React, { MouseEventHandler } from "react";
import styled from "@emotion/styled";
import { defaultConfig } from "../DefaultModule";

type ButtonProps =
  | {
    rightIcon?:never;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onHover?:MouseEventHandler<HTMLButtonElement>;
    children: string;
    bordered?: boolean;
    disabled?: boolean;
    loading?: never;
    loadingText?: never;
    loaderIcon?: never;
    textOnly?: never;
  }
  | {
    rightIcon?:boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onHover?:MouseEventHandler<HTMLButtonElement>;
    children: string;
    bordered?: boolean;
    disabled?: boolean;
    loading: boolean;
    loadingText?: string;
    loaderIcon?: string;
    textOnly?: never;
  }
  | {
    rightIcon?:boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    onHover?:MouseEventHandler<HTMLButtonElement>;
    children: string;
    bordered?: never;
    disabled?: boolean;
    loading?: boolean;
    loadingText?: string;
    loaderIcon?: string;
    textOnly?: boolean;
  };

function ButtonRaw(props: ButtonProps) {
  const Spinner = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;
  const ButtonStyle = styled.button`
    border-style: ${props.textOnly ? `none` : `solid`};
    border-radius: ${defaultConfig.R10};
    background-color: ${props.disabled? (props.bordered || props.textOnly? `white`: defaultConfig.N90): props.bordered || props.textOnly? `white`: defaultConfig.P100};
    color: ${props.disabled
      ? defaultConfig.N50
      : props.bordered || props.textOnly
        ? defaultConfig.P100
        : `white`};
    border-color: ${props.bordered
      ? props.disabled
        ? defaultConfig.N80
        : defaultConfig.P100
      : `transparent`};
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    display: ${props.loading ? `flex` : `block`};

    flex-direction: ${props.rightIcon?`row-reverse`:`row`};
    ${props.loading
      ? `justify-content:center;
align-items:center;`
      : ``}
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    ${props.disabled || props.loading
      ? ``
      : `
&:hover{
  background-color:${props.bordered || props.textOnly ? `${defaultConfig.N100}05` : defaultConfig.P100};
  box-shadow: 0px 4px 4px ${defaultConfig.N100}25;
  cursor:pointer;
}
`}
    ${props.disabled || props.loading
      ? ``
      : `&:active{
  background-color:${props.bordered || props.textOnly ? `${defaultConfig.P100}10` : defaultConfig.P120
      };
      
}`}
border-style: ${props.bordered ? `` : `none`};
    @media (min-width: ${defaultConfig.mobileBR}) {
      font-size: ${defaultConfig.textStyle["H5-mobile"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H5-mobile"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H5-mobile"].fontweight ==
      "regular"
      ? "400"
      : ""};
    }
    @media (min-width: ${defaultConfig.laptopBR}) {
      font-size: ${defaultConfig.textStyle["H5-laptop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H5-laptop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H5-laptop"].fontweight ==
      "regular"
      ? "400"
      : ""};
    }
    @media (min-width: ${defaultConfig.desktopBR}) {
      font-size: ${defaultConfig.textStyle["H5-desktop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H5-desktop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H5-desktop"].fontweight ==
      "regular"
      ? "400"
      : ""};
    }
  `;
  const IconHolder = styled.div`
    height: auto;
    width: "30%";
  `;
  const Icon = styled.div`
    height: 34px;
    width: 34px;
    animation: ${Spinner} 1s linear infinite;
    mask: url(${props.loaderIcon
      ? props.loaderIcon
      : `https://strapi.dev.web3p.in/uploads/loading_43_3f4b496221.svg`})
      no-repeat center;
    background-color: ${props.bordered || props.textOnly
      ? defaultConfig.P100
      : `white`};
  `;
  const LoadingText = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    width: fit-content;
    font-size: ${defaultConfig.textStyle["H5-mobile"].fontsize}px;
    @media (min-width: ${defaultConfig.desktopBR}) {
      font-size: ${defaultConfig.textStyle["H5-desktop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H5-desktop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H5-desktop"].fontweight ==
      "regular"
      ? "400"
      : ""};
    }
  `;
  return (
    <ButtonStyle
    onMouseOver={props.onHover}
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
    >
      {props.loading ? (
        props.disabled ? (
          <>Disabled</>
        ) : (
          <>
            <IconHolder>
              <Icon />
            </IconHolder>
            <LoadingText>
              {props.loadingText ? props.loadingText : "Loading"}
            </LoadingText>
          </>
        )
      ) : (
        <>{props.children}</>
      )}
    </ButtonStyle>
  );
}

/**
 *
 * @param onCLick : Defines The OnClick Event
 * @param bordered : Set Bordered Variant Of Button
 * @param disabled : Set Button to Disabled State
 * @param loading : Set Button to Loading State with a Spinner , The Laoding Set can be Customised
 *                   with custom text with loadingText prop and with loaderIcon
 * @param loadingText : Sets Loading Text
 * @param loaderIcon : Sets Loading Icon
 * @param textOnly : Switch Button to TextOnly Variant
 * @param rightIcon
 *
 */
export const Button = React.memo(ButtonRaw);