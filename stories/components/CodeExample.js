/** @jsx jsx */ // eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';

const Code = styled.div`
  background-color: #e6f5fe;
  max-width: 900px;
  border: 1px solid lightgray;
  margin: 20px;
  border-radius: 5px;
  display: relative;
`;

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
  margin: 10px 10px 12px 10px;
  transition: all .3s ease;
  &:hover {
    background-color: #0799f8;
    border-color: #0799f8;
    color: white;
  }
`;

const CodeText = styled.textarea`
  all: unset;
  display: block;
  margin: 5px;
  width: 95%;
  min-height:200px;
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
`;

const CopySVG = (props) => (
  <svg width={props.width} height="100%" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
    <path d="M1696 384q40 0 68 28t28 68v1216q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-288h-544q-40 0-68-28t-28-68v-672q0-40 20-88t48-76l408-408q28-28 76-48t88-20h416q40 0 68 28t28 68v328q68-40 128-40h416zm-544 213l-299 299h299v-299zm-640-384l-299 299h299v-299zm196 647l316-316v-416h-384v416q0 40-28 68t-68 28h-416v640h512v-256q0-40 20-88t48-76zm956 804v-1152h-384v416q0 40-28 68t-68 28h-416v640h896z"/>
  </svg>
)

const copyToClipboard = () => {
  const copyText = document.getElementById('codeText');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}

export default (props) => (
  <>
    <Code>
      <StyledButton id='copy' onClick={copyToClipboard}>
        <CopySVG width="20px"/>
        <span css={copyBtn}>COPY CODE</span>
      </StyledButton>
      <CodeText id='codeText' value={props.code}/>
    </Code>
  </>
)
