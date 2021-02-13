import React from 'react';

import Box from './Box';

function Row(props) {
  let rowKey = props.id;
  const boxes = [];
  for (let i = 1; i <= 3; i++) {
    boxes.push(<Box className="row" key={rowKey + i} id={rowKey + i} player={props.player} handleClick={props.changePlayer}/>)
  }

  return (
   <section>
     {boxes}
  </section>
  )
};

export default Row;