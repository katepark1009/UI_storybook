/** @jsx jsx */ // eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

const copyBtn = css`
  margin-left: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
`;

const StyledButton = styled.button`
  cursor: pointer;
  align-items: center;
  background-color: white;
  border: 1px solid #c0c0c0;
  box-sizing: border-box;
  color: black;
  display: flex;
  height: 40px;
  letter-spacing: 2px;
  padding: .8em 1em;
  transition: all .3s ease;
  border-radius: 3px;
  display: inline-block;
  position: relative;
  margin: 0 20px;
  &:hover {
    background-color: #0799f8;
    border-color: #0799f8;
    color: white;
  }
`;

export default (props) => {
  return (
      <div>
      <StyledButton id='copy' onClick={props.disable? null: props.onClick}>
        <span css={copyBtn}>{props.text}</span>
      </StyledButton>
      </div>
  );
}

