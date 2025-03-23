import React from 'react';

export const Divider = (props) => {

  return (
    <>
    <div style={{width: "80%", margin: "auto", padding: "30px 0px"}}>
      <div style={{height: "1px", width: "100%", backgroundColor: "gray", margin: "10px 0px"}}>
      </div>
      <div style={{color: "white", fontWeight: "bold", fontSize: "20px", display: "inline-block"}}>{props.title}</div>
      <div style={{color: "gray"}}>{props.description}</div>
    </div>
  
    </>
  )
}
