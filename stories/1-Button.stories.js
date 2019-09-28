import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CodeExample from './components/CodeExample'
import readme from '../src/CodeExample.md';
const sample = `  import { fonts } from '@argo/principles';

  const StyledText = styled.p\`
    font-size: $\{fonts.size.Small};
    font-family: $\{fonts.family.OpenSans};
    font-weight: $\{fonts.weight.ExtraBold};
  \`;`

const stories = storiesOf('Code Example', module);
stories
  .addDecorator((story, context) => withInfo('Code picker')(story)(context))
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add('Code picker', () => {
    return (
      <>
        <CodeExample code={sample} />
      </>
    )
  });