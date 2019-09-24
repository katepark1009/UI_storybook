import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from '@emotion/styled';
import Colors from './components/Colors';
import readme from '../src/Colors.md';

const Title = styled.p`
  text-align: left;
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: #2b5195;
  padding-left: 20px;
`;

const stories = storiesOf('Color Picker', module);
stories
  .addDecorator((story, context) => withInfo('ColorPicker')(story)(context))
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add('Colors', () => {
    return (
      <>
        <Title> ✔️Click the palette to copy the colors!</Title>
        <Colors />
      </>
    )
  });

