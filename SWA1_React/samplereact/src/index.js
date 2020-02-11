import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (<button className="square" onClick={props.onClick}> {props.value} </button>)
}

class Board extends React.Component {
  renderSquare(i) {
    return (
    <Square
      value = { this.props.squares[i] }
      onClick = { () => this.props.onClick(i) }
    />)
    ;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
      username: '',
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    if (this.state.username === '') {
      return (
        <div id="inputDiv">
          Enter your username:
          <UsernameInput />  
          <button className="game-info" onClick = {() => {
            let par = document.getElementById('inputDiv');
            if (!document.getElementById('username').value.match(/[a-z0-9]+/)) {
              if (par.querySelector("#error") === null) {
                par.insertAdjacentHTML('beforeend', "<div id='error' style='color:red'>Please enter a valid username</div>")
                return;
              }
            } else {
              let errorNote = document.getElementById('error')
              if (errorNote) {
                par.removeChild(errorNote)
              }
              this.setState({username : document.getElementById('username').value});
            }
          }
          }>Confirm</button>
        </div>
      )
    }

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + (winner === 'X' ? this.state.username : winner);
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? this.state.username : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <ReactiveInput />
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function UsernameInput() {
  return (<input id="username" className="game-info" type="text"></input>)
}

// This component is the solution for Ex 2 from SWA Exercise 6
class ReactiveInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      entered: ''
    }
  }

  updateField(ev) {
    this.setState({entered: ev.target.value})
  }

  render() {
    return (
      <div id="ex2FromExercise6SWA">
          <input id="inputFld" onChange={this.updateField.bind(this)}></input>
          <div id="inputFieldData">{this.state.entered}</div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
