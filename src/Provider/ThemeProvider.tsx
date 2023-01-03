import React from "react";
import { Global, css } from '@emotion/react'
export const ThemeContent = React.createContext({});
interface ThemeProviderProps {
    children:React.ReactNode,
    value:Object
} 
/**
 @param value : Provide Strapi Contexts to all Children 
 */
export function ThemeProvider(props:ThemeProviderProps){
   
    return <ThemeContent.Provider value={props.value}>
<Global styles={
        css`
      @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800&display=swap');
      `
      } />
        {props.children}
    </ThemeContent.Provider>
}

