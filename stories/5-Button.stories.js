import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import CodeExample from './components/CodeExample';
import Button from '../src/Button';
//import readme from '../src/Button.md';

const sample = `  import Header from '../Header';

    const textSample = 'Hello'

    <Header title={textSample} isUnderline={true} size={'h1'}/>
  \`;`

const stories = storiesOf('Basic Component', module);
stories
  // .addParameters({
  //   readme: {
  //     sidebar: readme
  //   }
  // })
  .add('Button', () => {
    const disable = select(
      'disable',
      [
        true,
        false,
      ]
      ,false
    );

    let textSample = text(
      'Button Text', 'Submit'
    );
    return (
      <>
        <Button color='primary' text={textSample} onClick={()=> alert('clicked!')} disable={disable}/>
        <CodeExample code={sample} />
      </>
    )
  });
