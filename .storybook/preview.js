import { ThemeProvider } from '../src/Provider/ThemeProvider';
import React from 'react';
import { MockFunction } from './Mocker';
import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}



export const decorators = [
  (Story) => (
   <ThemeProvider value={MockFunction()}>
      <Story />
     </ThemeProvider> 
  ),
];

addParameters({
  viewport:{
    viewport:INITIAL_VIEWPORTS
  }
})