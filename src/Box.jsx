import React from 'react';

function Box(props) {
  return (
    <div className="box" onClick={props.handleClick}>{props.player}</div>
  )
}

export default Box;