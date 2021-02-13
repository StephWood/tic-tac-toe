import React from 'react';

import Row from './Row';

class Board extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      player: 'X'
    }
  }

  changePlayer = () => (
    this.setState({ player: (this.state.player === 'X' ? 'O' : 'X')})
  )

  render() {
    const board = [];
    for (let i = 1; i <= 3; i++) {
      board.push(<Row className="board-row" key={i} id={i} player={this.state.player} changePlayer={this.changePlayer} />)
    }
    return (
      <div>{board}</div>
    )
  }
}

export default Board;