import { Checkbox } from "./Checkbox";
import React from "react";
export default{
    title:'Checkbox',
    component:Checkbox
}

export const Default = ()=><Checkbox>Checkbox Text</Checkbox>
export const DefaultChecked = ()=><Checkbox checked onChanged={()=>{}}>Checkbox Text</Checkbox>
export const PartialChecked = ()=><Checkbox CheckType="partial" checked onChanged={()=>{}}>Checkbox Text</Checkbox>
export const Disabled = ()=><Checkbox disabled>Checkbox Text</Checkbox>
export const DisabledPartialChecked = ()=><Checkbox checked onChanged={()=>{}} CheckType="partial" disabled>Checkbox Text</Checkbox>
export const DisabledChecked = ()=><Checkbox checked onChanged={()=>{}} disabled>Checkbox Text</Checkbox>