import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mark: '-',
    }
  }

    updateBox = () => {
      this.setState({
        mark: this.props.player,
      })
      this.props.handleClick();
    }

  render() {
  return (
    <button className="box" onClick={this.updateBox} >{this.state.mark}</button>
  )
  }
}

export default Box;