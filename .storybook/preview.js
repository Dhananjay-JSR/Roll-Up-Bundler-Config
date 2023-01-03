import { ThemeProvider } from '../src/Provider/ThemeProvider';
import React from 'react';
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
   <ThemeProvider style={{ margin: '3em' }}>
      <Story />
     </ThemeProvider> 
  ),
];

addParameters({
  viewport:{
    viewport:INITIAL_VIEWPORTS
  }
})