import React from "react";
import styled from "@emotion/styled"
import { keyframes } from "@emotion/react";
import { defaultConfig } from "../DefaultModule";


type HeaderProps = React.ComponentProps<'img'>
function Header ({src,height,width,sizes,draggable,...rest}:HeaderProps){

const SkeletonANimation = keyframes`
from{
    background-color:#BCBCBC;
}
to{
    background-color:#f5f5f5;
}

`

    const StyledHeader = styled.img`
height:156px;
width:128px;
border-radius:5px;
animation: ${SkeletonANimation} 1.7s linear infinite alternate;

@media (min-width: ${defaultConfig.laptopBR}) {
    height:180px;
    width:148px;
  }
  @media (min-width: ${defaultConfig.desktopBR}) {
    height:300px;
    width:240px;
  }


`
    return <StyledHeader {...rest} draggable={"false"} src="https://picsum.photos/200/300" height={'100%'} width={'100%'} />
}



function Heading(props:{children:string}){

    const StyledHeading = styled.div`
width:100%;
margin-top:4px;
font-size:16px;
font-weight:bold;
font-family:${defaultConfig.textStyle["H5-mobile"].fontfamily};
`

    return<>
    <StyledHeading>
        {props.children}
    </StyledHeading>
    </>
}



function SubHeading(prop:{children:string}){

    const StyledSubHeading = styled.div`
font-size:12px;
color:#026FFA;
margin-top:4px;
font-family:${defaultConfig.textStyle["H5-mobile"].fontfamily};
`

    return <StyledSubHeading>
        {prop.children}
    </StyledSubHeading>
}


function Body(prop:{children:string}){

    const StyledBody = styled.div`
    margin-top:4px;
width:128px;
color:#5A5A5A;
font-size:10px;
font-family:${defaultConfig.textStyle["H5-mobile"].fontfamily};
`

    return  <StyledBody>{prop.children}</StyledBody>
}



interface CardProps{
    children:React.ReactNode
}
export function Card (props:CardProps){
    const StyledContainer = styled.div`
font-size:0px;
transition-property: all;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
padding:16px;
width:fit-content;
transition-duration: 150ms;
height:fit-content;


&:hover{
    padding:16px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    border-radius:5px;
    box-shadow: 0px 4px 4px 0px ${defaultConfig.N100}10 ;
}
`


    return <>
    <StyledContainer>
        {props.children}
    </StyledContainer>
    </>
}

Card.Header = Header;
Card.Heading = Heading;
Card.SubHeading = SubHeading;
Card.Body = Body;
