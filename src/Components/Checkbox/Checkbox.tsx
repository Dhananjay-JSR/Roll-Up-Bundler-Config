import React from "react";
import styled from "@emotion/styled";
import { defaultConfig } from "../DefaultModule";
type CheckboxProps =
  | {
      CheckType?: "tick" | "partial";
      checked?: never;
      disabled?: boolean;
      children?: string;
      onChanged?: never;
    }
  | {
      CheckType?: "tick" | "partial";
      checked: boolean;
      disabled?: boolean;
      children?: string;
      onChanged: React.ChangeEventHandler<HTMLInputElement>;
    };

function CheckBoxRaw(props: CheckboxProps) {
  const StyledContainer = styled.label`
    color: ${props.disabled ? defaultConfig.N70 : `black`};
    font-family: ${defaultConfig.textStyle["H5-desktop"].fontfamily};
    position: relative;
    display: block;
    cursor: ${props.disabled ? `cursor` : `pointer`};
    font-size: 15px;
    padding-left: 35px;
    user-select: none;
    max-width: 200px;
    @media (min-width: ${defaultConfig.laptopBR}) {
        max-width: 324px;
    }
    @media (min-width: ${defaultConfig.desktopBR}) {
        max-width: 278px;
    }
  `;
  const StyledInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  `;
  const StyledChecker = styled.span`
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    position: absolute;
    border-style: solid;
    border-radius: 2px;
    border-color: ${defaultConfig.N10};
    background-color: ${defaultConfig.N100};
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;

    @media (min-width: ${defaultConfig.laptopBR}) {
        height: 16px;
        width: 16px;
    }
    
    @media (min-width: ${defaultConfig.desktopBR}) {
    height: 20px;
    width: 20px;
    
    }
    background-color: #eee;

    ${StyledInput}:checked + &:before {
      position: absolute;
      color: white;
      content: "";
      mask: ${props.CheckType == undefined
        ? ` url("data:image/svg+xml,%3Csvg version='1.1' id='tick' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 37 37' style='enable-background:new 0 0 37 37;' xml:space='preserve'%3E%3Cpolyline class='tick path' style='fill:none;stroke:%23000;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;' points=' 11.6,20 15.9,24.2 26.4,13.8 '/%3E%3C/svg%3E")`
        : props.CheckType == "partial"
        ? `url("data:image/svg+xml,%3Csvg width='20' height='6' version='1.1' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' x2='20' y1='0' y2='0' stroke='black' stroke-width='10'/%3E%3C/svg%3E")`
        : ` url("data:image/svg+xml,%3Csvg version='1.1' id='tick' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 37 37' style='enable-background:new 0 0 37 37;' xml:space='preserve'%3E%3Cpolyline class='tick path' style='fill:none;stroke:%23000;stroke-width:3;stroke-linejoin:round;stroke-miterlimit:10;' points=' 11.6,20 15.9,24.2 26.4,13.8 '/%3E%3C/svg%3E")`};
      mask-size: ${props.CheckType==undefined?`180%`:props.CheckType=="partial"?`80%`:`180%`};
      height: 100%;
      width: 100%;
      mask-position: center;
      mask-repeat: no-repeat;
      background-color: white;
    }

    ${props.disabled
      ? `
    & {
        border-color:${defaultConfig.N70};
    }
    `
      : `
    ${StyledContainer}:hover & {
    background-color: ${defaultConfig.N90};
    }
    `}

    ${props.disabled
      ? `
    ${StyledInput}:checked + &{
        background-color: ${defaultConfig.N70} ;
        border-color: transparent;
    }
    `
      : `
    ${StyledInput}:checked + &{
        background-color: ${defaultConfig.P100} ;
        border-color: transparent;
    }
    `}
    
    ${props.disabled
      ? `
    `
      : `
    ${StyledContainer}:hover ${StyledInput}:checked + &{
        background-color: ${defaultConfig.P120} ;
        border-color: transparent;
    }
    `}
  `;
  return (
    <StyledContainer>
      {props.children}
      <StyledInput
        disabled={props.disabled}
        type={"checkbox"}
        onChange={props.onChanged}
        checked={props.checked}
      />
      <StyledChecker></StyledChecker>
    </StyledContainer>
  );
}

/**
 * @param CheckType : Set Tick Type
 * @param checked : Set Default Value of Mark
 * @param disabled : Disable Checkbox
 * @param onChanged : Triggered When Value is Changed
 */
export const Checkbox = React.memo(CheckBoxRaw);