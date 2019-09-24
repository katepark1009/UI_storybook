/** @jsx jsx */
import React, { useState } from 'react';
import { colors } from '../../src/colors';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import CodeExample from './CodeExample';

const Container = styled.div`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
`;

const TitleText = styled.p`
  text-align: center;
  font-weight: bold;
`;

const StyledRow = styled.div`
  align-items: start;
  display: flex;
  margin: 0 20px;
`;

const StyledCell = styled.div`
  cursor: pointer;
  margin-right: 15px;
`;

const ColorTile = styled.div`
  align-items: center;
  background: ${ props => props.color};
  box-sizing: border-box;
  border: 1px solid #e2e2e3;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  width: 160px;
  height: 50px;
  > p {
    color: ${props => isDark(props.color) ? colors.primary.white : colors.primary.black};
    font-size: 14px;
  }
  span {
    display: none;
  }
  &:hover {
    span {
      display: block;
      opacity: .6;
      color: white;
      text-align: center;
      padding: 5px 0;
      border-radius: 4px;
      position: absolute;
      visibility: visible;
      opacity: 1;
    }
  }
`;

const InvisibleInput = styled.input`
  position: absolute;
  left: -9999px;
`;

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  padding-bottom: 2px;
`;

const TooltipText = styled.span`
  font-size: 12px;
  visibility: hidden;
  width: 60px;
  background-color: #666666;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 28px;
  left: -40px;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  &:after{
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #666666 transparent transparent transparent;
  }
`;

const colorStyle = css`
  width: 100px;
`;

const isDark = (colorName) => {
  switch (colorName) {
    case '#505050':
    case '#000000':
    case '#939393':
    case '#406cb4':
    case '#2b5195':
    case '#1f3e74':
    case '#162d5b':
    case '#9e0300':
    case '#ba1d4c':
    case '#681f74':
    case '#5586d4':
    case '#f43a36':
      return true;
  };
  return false;
};

export default () => {
  const [initialColor, setClickToCopy] = useState('');
  const [initialColorName, setColorName] = useState('');
  const example = `  import { colors } from '@argo/colors';

    const ColorTile = styled.div\`
    background-color: $\{colors.${initialColorName? initialColorName: 'primary.black'}};
    color: $\{colors.${initialColorName? initialColorName: 'primary.black'}};
  \`;
  `;
  const makeTile = (colorName) => {
    const clickToCopyColorName = (e) => {
      const clickedDiv = e.currentTarget.textContent;
      const index = clickedDiv.indexOf("#");
      let color = clickedDiv.slice(index);
      const colorCode = color.slice(0, 7);
      const copyText = document.getElementById(colorCode);
      copyText.focus();
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      document.execCommand("copy");
    }
    const onClick = (e, key, color) => {
      setClickToCopy(key);
      setColorName(color)
      clickToCopyColorName(e);
    }
    const tiles = Object.keys(colorName).map(key => {
      if (key === 'tag') {
        return
      }
      const copyVal = `color: \${colors.${colorName.tag.toLowerCase()}.${key}};`;
      return (
        <ColorTile color={colorName[key]} key={key} onClick={(e) => onClick(e, colorName[key], colorName.tag.toLowerCase()+'.'+key)}>
          {colorName.tag === 'Green' || colorName.tag === 'Red'
            ? <p css={colorStyle} color={key}>{key === 'base' ? colorName.tag.toLowerCase() : key + colorName.tag}</p>
            : <p css={colorStyle} color={key}>{key === 'base' ? colorName.tag.toLowerCase() : key}</p>}
          <p color={key}>{colorName[key]}</p>
          <InvisibleInput id={colorName[key]} value={copyVal}/>
          <Tooltip>
            <TooltipText>{initialColor !== colorName[key]? 'copy' : 'copied✨'}</TooltipText>
          </Tooltip>
        </ColorTile>
      );
    });
    return tiles;
  };

  return (
    <Container>
      <StyledRow>
        <StyledCell>
          <TitleText>Primary</TitleText>
          {makeTile(colors.primary)}
        </StyledCell>
        <StyledCell>
          <TitleText>Neutral</TitleText>
          {makeTile(colors.neutral)}
        </StyledCell>
        <StyledCell>
          <TitleText>Blue</TitleText>
          {makeTile(colors.blue)}
        </StyledCell>
        <StyledCell>
          <TitleText>Spotlight</TitleText>
          {makeTile(colors.green)}
          {makeTile(colors.orange)}
          {makeTile(colors.red)}
          {makeTile(colors.magenta)}
          {makeTile(colors.purple)}
        </StyledCell>
        <StyledCell>
          <TitleText>Action (link, button..)</TitleText>
          {makeTile(colors.action)}
        </StyledCell>
      </StyledRow>
      <CodeExample code={example} />
    </Container>
  )
}
