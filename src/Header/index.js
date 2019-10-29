import React from 'react';

export default (props) => {
  console.log(props)
  console.log('header')
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
      {title}
      {props.isUnderline ? <hr className='mb-4' />: null}
    </>
  )
}