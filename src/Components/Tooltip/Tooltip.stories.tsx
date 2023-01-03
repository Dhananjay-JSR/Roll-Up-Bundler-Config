import React from "react";
import { Tooltip } from "./Tooltip";
import { ComponentStory } from "@storybook/react";
import { Button } from "../Button/Button";
import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';
export default {
    title:"Web Component/Tooltip",
    component:Tooltip
}

const Template:ComponentStory<typeof Tooltip> = (args)=><Tooltip   {...args}/>

export const Default = Template.bind({})
Default.args={
    TipText:"Hi I am Hover Text",
    trigger:"hover",
    children:<Button>Hover me</Button>
}

Default.decorators = [
    (Story) => (
      <div style={{ margin: '10em',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Story />
      </div>
    ),
  ];

