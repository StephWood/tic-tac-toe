import React, { Component } from 'react';

import Board from './Board';

class App extends Component {

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <div className="game">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;