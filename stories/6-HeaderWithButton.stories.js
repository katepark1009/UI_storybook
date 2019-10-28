import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import CodeExample from './components/CodeExample';
import HeaderWithButton from '../src/HeaderWithButton';
import Button from '../src/Button';
import readme from '../src/Header.md';

const sample = `  import Header from '../Header';

    const textSample = 'Hello'

    <HeaderWithButton title={textSample} isUnderline={true} size={'h1'} buttonText={'Submit'}/>
  \`;`

const stories = storiesOf('Basic Component', module);
stories
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add('Header with button', () => {
    const isUnderline = select(
      'isUnderline',
      [
        true,
        false,
      ]
      ,true
    );
    const disable = select(
      'disable',
      [
        true,
        false,
      ]
      ,false
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

    let btnText = text(
      'button text', 'Submit'
    );
    return (
      <>
        <HeaderWithButton title={textSample} isUnderline={isUnderline} size={size} buttonText={btnText} disable={disable} onClick={()=> alert('Clicked!')}/>
        <CodeExample code={sample} />
      </>
    )
  });
