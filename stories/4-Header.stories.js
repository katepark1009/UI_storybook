import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import CodeExample from './components/CodeExample';
import Header from '../src/Header';

const sample = `  import Header from '../Header';

    const textSample = 'Hello'

    <Header title={textSample} isUnderline={true} size={'h1'}/>
  \`;`

const stories = storiesOf('Basic Component', module);
stories
  .add('Header', () => {
    const isUnderline = select(
      'isUnderline',
      [
        true,
        false,
      ]
      ,true
    );

    const size = select(
      'Heading size',
      [
        'h1',
        'h2',
        'h3'
      ]
      ,'h1'
    );

    let textSample = text(
      'title', 'Type Your Example Here.'
    );
    return (
      <>
        <Header title={textSample} isUnderline={isUnderline} size={size} />
        <CodeExample code={sample} />
      </>
    )
  });
