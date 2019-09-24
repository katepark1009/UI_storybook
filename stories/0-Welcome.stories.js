import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Welcome', module).add('to Storybook', () => (
  <section>
    <h2> Welcome to UI storybook</h2>
    <p>This is a UI component dev environment for your app.</p>
    <p>Storybook is a user interface development environment and playground for UI components.</p>
    <p>The tool enables developers to create components independently and showcase components interactively in an isolated development environment.</p>

    <h2>About storybook</h2>
    <p>A story is a single state of one or more UI components. You can have as many stories as you want.</p>
    <p>(Basically a story is like a visual test case.)</p>
  </section>
));
