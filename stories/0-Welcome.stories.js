import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from '@emotion/styled';

const StyledSection = styled.div`
  font-family: 'Open Sans', sans-serif;
`;
const StyledP = styled.p`
  margin-left: 25px;
`;
storiesOf('Welcome', module).add('to Storybook', () => (
  <StyledSection>
    <h4>✨ Welcome to UI storybook</h4>
    <StyledP>This is a UI component dev environment for your app.</StyledP>
    <StyledP>Storybook is a user interface development environment and playground for UI components.</StyledP>
    <StyledP>The tool enables developers to create components independently and showcase components interactively in an isolated development environment.</StyledP>

    <h4>🌈 About storybook</h4>
    <StyledP>A story is a single state of one or more UI components. You can have as many stories as you want.</StyledP>
    <StyledP>(Basically a story is like a visual test case.)</StyledP>
    
    <h4>➕ Check out Addons : Knobs, Readme </h4>
    <StyledP>'Knobs' allow you to edit props dynamically using the Storybook UI. </StyledP>
    <StyledP>'Readme' contains information about the components. </StyledP>
  </StyledSection>
));
