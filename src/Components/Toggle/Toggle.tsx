import styled from "@emotion/styled";
import React, { useState } from "react";
import { defaultConfig } from "../DefaultModule";
import { keyframes } from "@emotion/react";

interface ToggleProps {
  children: React.ReactNode;
  header?: string;
  state?: boolean;
}

/**
 * @param state Handles Opening / Closing State of Toggle , if Not undefined the Component uses Built in state
 * @param Toggle.Header  Header for Toggle Component
 * @param Toggle.Body  Body of Toggle
 */
export function Toggle({ header, state, children }: ToggleProps) {
  const [opened, setOpened] = useState(false);

  const Header_Child = React.Children.map(children, (child) => {
    let defaultPorps_Head = { state, opened, setOpened };
    //@ts-ignore
    if (child.type.name == "HeaderRaw")
      if (React.isValidElement(child)) {
        return React.cloneElement(child, defaultPorps_Head);
      }
  });
  const Body_Child = React.Children.map(children, (child) => {
    let defaultPorps_Body = { state, opened };
    //@ts-ignore
    if (child.type.name == "BodyRaw")
      if (React.isValidElement(child)) {
        return React.cloneElement(child, defaultPorps_Body);
      }
  });

  return (
    <>
      <div>
        {Header_Child}
        {Body_Child}
      </div>
    </>
  );
}

interface HeaderProps {
  children: React.ReactNode;
  opened?: boolean;
  state?: boolean;
  setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderRaw = ({ children, opened, state, setOpened }: HeaderProps) => {
  const rotatoAnim = keyframes`
  from{
      transform: rotate(0deg);
  }
  to{
      transform: rotate(90deg);
  `;

  const StyledToggleHeader = styled.div`
    height: 36px;
    width: 280px;
    position: relative;
    max-width: 289px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 40px;
    border-style: solid;
    border-width: 1px;

    border-radius: ${state != undefined
      ? state == true
        ? `5px 5px 0px 0px`
        : `5px 5px 5px 5px`
      : true //change to Opend
      ? `5px 5px 0px 0px`
      : `5px 5px 5px 5px`};
    background-color: ${defaultConfig.P5};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    user-select: none;
    font-size: ${defaultConfig.textStyle["H6-mobile"].fontsize}px;
    font-family: ${defaultConfig.textStyle["H6-mobile"].fontfamily};
    font-weight: ${defaultConfig.textStyle["H6-mobile"].fontweight == "regular"
      ? "400"
      : ""};
    &:before {
      width: 16px;
      height: 16px;
      content: "";
      position: absolute;
      transform-origin: 25% 50%;
      animation: ${rotatoAnim} 150ms 1
        ${state != undefined
          ? state == true
            ? `alternate`
            : `reverse`
          : opened //change to opened
          ? `alternate`
          : `reverse`};
      animation-fill-mode: forwards;
      left: 12px;
      background-color: ${defaultConfig.N75};
      mask: url("data:image/svg+xml,%3Csvg width='13' height='20' viewBox='0 0 13 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.3154 11.2975L2.8598 19.5699C1.74555 20.5462 6.34237e-07 19.7527 6.34237e-07 18.2711V1.72633C-0.000283668 1.39474 0.0950183 1.07009 0.274494 0.791268C0.45397 0.512446 0.710012 0.291266 1.01196 0.154217C1.3139 0.0171671 1.64895 -0.0299427 1.97698 0.0185288C2.30502 0.0670002 2.61212 0.208998 2.86153 0.427518L12.3137 8.6999C12.499 8.8618 12.6475 9.06146 12.7492 9.28547C12.8509 9.50949 12.9036 9.75268 12.9036 9.99871C12.9036 10.2447 12.8509 10.4879 12.7492 10.712C12.6475 10.936 12.499 11.1356 12.3137 11.2975H12.3154Z' fill='black'/%3E%3C/svg%3E");
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      mask-size: contain;
    }
    &:hover {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
      border-color: ${defaultConfig.N25};
    }

    &:active {
      background-color: ${defaultConfig.P10};
    }

    @media (min-width: ${defaultConfig.laptopBR}) {
      height: 44px;
      width: 320px;
      max-width: 320px;
      font-size: ${defaultConfig.textStyle["H6-laptop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H6-laptop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H6-laptop"].fontweight ==
      "regular"
        ? "400"
        : ""};
      &:before {
        left: 16px;
        width: 20px;
        height: 20px;
      }
    }
    @media (min-width: ${defaultConfig.desktopBR}) {
      height: 56px;
      width: 450px;
      max-width: 450px;
      font-size: ${defaultConfig.textStyle["H6-desktop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H6-desktop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H6-desktop"].fontweight ==
      "regular"
        ? "400"
        : ""};
      &:before {
        left: 16px;
        width: 24px;
        height: 24px;
      }
    }
  `;
  return (
    <StyledToggleHeader
      onClick={
        state
          ? () => {}
          : () => {
              setOpened ? setOpened((prev) => !prev) : null;
            }
      }
    >
      {children}
    </StyledToggleHeader>
  );
};

interface BodyProps {
  children: React.ReactNode;
  opened?: boolean;
  state?: boolean;
}
const BodyRaw = ({ opened, children, state }: BodyProps) => {
  const ToggleReveal = keyframes`
from{
    transform: translateY(-10%);
}
to{
    transform: translateY(-0%);
}

`;

  const StyledToggleBody = styled.div`
    word-wrap: break-word;
    max-height: ${state != undefined
      ? state == true
        ? `max-content`
        : `0px`
      : opened //change to opend
      ? `max-content`
      : `0px`};
    animation: ${ToggleReveal} 150ms 1
      ${state != undefined
        ? state == true
          ? `alternate`
          : `reverse`
        : opened
        ? `alternate`
        : `reverse`};
    animation-fill-mode: forwards;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    overflow: hidden;
    width: 280px;
    max-width: 280px;
    border-style: ${state != undefined
      ? state == true
        ? `none solid solid solid`
        : `none`
      : opened //change to opned
      ? `none solid solid solid`
      : `none`};
    box-sizing: border-box;
    border-width: 1px;
    border-color: ${defaultConfig.N25};
    font-size: ${defaultConfig.textStyle["H6-mobile"].fontsize}px;
    font-family: ${defaultConfig.textStyle["H6-mobile"].fontfamily};
    font-weight: ${defaultConfig.textStyle["H6-mobile"].fontweight == "regular"
      ? "400"
      : ""};
    @media (min-width: ${defaultConfig.laptopBR}) {
      width: 320px;
      max-width: 320px;
      font-size: ${defaultConfig.textStyle["H6-laptop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H6-laptop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H6-laptop"].fontweight ==
      "regular"
        ? "400"
        : ""};
    }

    @media (min-width: ${defaultConfig.desktopBR}) {
      width: 450px;
      max-width: 450px;
      font-size: ${defaultConfig.textStyle["H6-desktop"].fontsize}px;
      font-family: ${defaultConfig.textStyle["H6-desktop"].fontfamily};
      font-weight: ${defaultConfig.textStyle["H6-desktop"].fontweight ==
      "regular"
        ? "400"
        : ""};
    }
  `;

  return (
    <>
      <StyledToggleBody>{children}</StyledToggleBody>
    </>
  );
};

Toggle.Header = HeaderRaw;

Toggle.Body = BodyRaw;
