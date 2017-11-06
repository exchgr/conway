import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Cell from './Cell'
import BoardGenerator from './BoardGenerator';

class App extends Component {
  initialState = () => ({
    cells: Array(120).fill(0).map(() => (
      Array(120).fill(
        false
      )
    ))
  })

  state = this.initialState()

  reset = () => { this.setState(this.initialState()) }

  clone = (cells) => (
    cells.map((row) => (
      row.slice()
    ))
  )

  toggle = (x, y) => {
    const cells = this.clone(this.state.cells)
    cells[x][y] = !cells[x][y]
    this.setState({cells: cells})
  }

  generateNextBoard = () => { this.setState({cells: BoardGenerator(this.state.cells)}) }
  play = () => { this.setState({playFunction: setInterval(this.generateNextBoard, 250)}) }

  pause = () => {
    clearInterval(this.state.playFunction)
    this.setState({playFunction: null})
  }

  playPauseButton = () => {
    const action = this.state.playFunction ? "Pause" : "Play"
    return <button onClick={this[action.toLowerCase()]}>{action}</button>
  }

  renderCells = (row, x) => (
    <div className="row" key={x}>{
      row.map((toggled, y) => (
        <Cell key={`${x}${y}`} toggled={toggled} toggle={this.toggle} x={x} y={y}/>
      ))
    }</div>
  )

  renderCellRows = () => this.state.cells.map(this.renderCells)

  render() {
    return ([
      <div className="board">{this.renderCellRows()}</div>,
      <button onClick={this.generateNextBoard}>Next</button>,
      this.playPauseButton(),
      <button onClick={this.reset}>Reset</button>
    ]);
  }
}

export default App;
