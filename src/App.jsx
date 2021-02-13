import React, { Component } from 'react';

import Row from './Row';
// import Box from './Box';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      player: '-'
    }
  }

  // componentDidMount() {
  //   this.timerID = setInterval(() => this.changePlayer(), 300)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  changePlayer = () => (
    this.setState({ player: (this.state.player === 'X' ? 'O' : 'X')})
  )

  render() {
    return (
      <div>
        <h1>Tic Tac Toe</h1>
        <Row player={this.state.player} handleClick={this.changePlayer}/>
      </div>
    );
  }
}

export default App;