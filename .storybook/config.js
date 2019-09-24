import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { addReadme } from 'storybook-readme';

addDecorator(withKnobs);
addDecorator(addReadme);
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
