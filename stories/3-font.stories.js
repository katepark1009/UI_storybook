import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import styled from '@emotion/styled';
import CodeExample from './components/CodeExample';
import { fonts } from '../src/font';
import readme from '../src/Typography.md';

const StyledText = (props) => (
  <p style={{
    fontFamily: fonts.family[`${props.fontFamily}`],
    fontSize: fonts.size[`${props.fontSize}`],
    fontWeight: fonts.weight[`${props.fontWeight}`]}}
  >
    Kelley Blue Book
  </p>
)

const Title = styled.div`
  margin: 20px;
  ~p {
    margin: 20px;
  }
`;

const FontWeightText = styled.p`
  font-family: ${fonts.family.montserrat};
  font-size: ${fonts.size['2XS']};
`;

const makeExample = ( familyExample, sizeExample, weightExample ) => {
  return(
    sizeExample === 'XL' || sizeExample === 'large' || sizeExample === 'medium' || sizeExample === 'small' || sizeExample === 'XS'?
    `  import { fonts } from '@argo/principles';

    const StyledText = styled.p\`
      font-size: $\{fonts.size.${sizeExample}};
      font-family: $\{fonts.family.${familyExample}};
      font-weight: $\{fonts.weight.${weightExample}};
    \`;`
  : `  import { fonts } from '@argo/principles';

    const StyledText = styled.p\`
      font-size: $\{fonts.size['${sizeExample}']};
      font-family: $\{fonts.family.${familyExample}};
      font-weight: $\{fonts.weight.${weightExample}};
    \`;`
)};

const stories = storiesOf('Typography', module);
stories
  .addParameters({
    readme: {
      sidebar: readme
    }
  })
  .add('Typography', () => {
    const family = select(
      'Family',
      [
        'opensans',
        'montserrat'
      ]
      ,'montserrat'
    );
    const size = select(
      'Size',
      [
        '3XL',
        '2XL',
        'XL',
        'large',
        'medium',
        'small',
        'XS',
        '2XS',
        '3XS',
      ]
      ,'large'
    );

    let weight = select(
      'Weight',
      [
        'light (400)',
        'regular (500)',
        'semiBold (600)',
        'bold (700)',
        'extraBold (800)'
      ],
      'semiBold (600)'
    );
    return (
      <>
        <Title style={{fontFamily:fonts.family.montserrat}}>Example Text: </Title>
        <StyledText fontFamily={family} fontSize={size} fontWeight={weight.slice(0,-6)}/>
        <FontWeightText>Available Font weight : Open Sans(400, 600), Montserrat(500, 600, 800)</FontWeightText>
        <CodeExample code={makeExample(family, size, weight.slice(0,-6))}/>
      </>
    )
  });
