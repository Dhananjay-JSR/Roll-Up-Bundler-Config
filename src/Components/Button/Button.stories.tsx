import { Button } from './Button';
import React from 'react';
import {actions} from '@storybook/addon-actions'
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default{
    title: 'Web Component/Button',
    component:Button,
    args:{
        children:"Default"
    }
}



const Template:ComponentStory<typeof Button> = (args)=><Button {...actions('onClick','onMouseOver')} {...args}/>



export const Primary = Template.bind({})


export const Disabled = Template.bind({})
Disabled.args={
    disabled:true
}

export const Icon = Template.bind({})
Icon.args={
    loading:true
}

export const Bordered = Template.bind({})
Bordered.args={
    bordered:true
}
export const BorderedDisabled = Template.bind({})
BorderedDisabled.args={
    bordered:true,
    disabled:true
}

export const BorderedIcon = Template.bind({})
BorderedIcon.args={
    bordered:true,
    loading:true
}
export const TextOnly = Template.bind({})
TextOnly.args={
    textOnly:true
}
export const TextOnlyDisabled = Template.bind({})
TextOnlyDisabled.args={
    textOnly:true,
    disabled:true
}
export const TextOnlyIcon= Template.bind({})

TextOnlyIcon.args={
    textOnly:true,
    loading:true
}

