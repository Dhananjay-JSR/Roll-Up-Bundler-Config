import React from "react";
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
        {props.children}
    </ThemeContent.Provider>
}

