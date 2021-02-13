import React from 'react';

import Box from './Box';

const Row = () => {
  const boxes = [];
  for (let i = 1; i <= 3; i++) {
    boxes.push(<Box key={i} />)
  }

  return (
   <div>{boxes}</div>
  )
};

export default Row;