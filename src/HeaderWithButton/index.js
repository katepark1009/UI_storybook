import React from 'react';
import styled from '@emotion/styled';

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
  margin: 0 20px;
  position: absolute;
  right: 6px;
  &:hover {
  background-color: #0799f8;
  border-color: #0799f8;
  color: white;
  }
` 
const Container = styled.div`
  display: flex;
  align-items: center;
`

export default (props) => {
  console.log(props)
  console.log('header with btn')
  let title;
  switch(props.size){
    case 'h1':
      title = <h1>{props.title}</h1>
      break
    case 'h2': 
      title = <h2>{props.title}</h2>
      break
    default: 
      title = <h3>{props.title}</h3>  
  }
  
  return (
    <>
      <Container>
      {title}
      <StyledButton onClick={props.onClick} disable={props.disable}>{props.buttonText}</StyledButton>
      </Container>
      {props.isUnderline ? <hr className='mb-4' />: null}
    </>
  )
}