import { Button } from './Button';
import React from 'react';
export default{
    title: 'Button',
    component:Button
}

export const Primary = ()=><Button>Default</Button>
export const Disabled = () =><Button disabled>Disabled</Button>
export const Icon = ()=><Button loading>laoding</Button>
export const Bordered = ()=><Button bordered>Default Bordered</Button>
export const BorderedDisabled = ()=><Button bordered disabled>disabled</Button>
export const BorderedIcon = () =><Button bordered loading>Loading</Button>
export const TextOnly = ()=><Button textOnly>Text Only</Button>
export const TextOnlyDisabled = ()=><Button textOnly disabled>Disabled</Button>
export const TextOnlyIcon= ()=><Button textOnly loading>Text Only Icon</Button>