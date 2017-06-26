import React, {Component} from 'react';
import {observer} from 'mobx-react';
import './App.css';
import {game} from './game';
import Square from './Square';

class App extends Component {
  componentDidMount() {
    const directions = {
      38: 'UP',
      40: 'DOWN',
      37: 'LEFT',
      39: 'RIGHT',
    };
    document.addEventListener('keydown', e => {
      if (directions[e.keyCode]) {
        game.move(directions[e.keyCode]);
      }
    });
  }
  render() {
    return (
      <div>
        <div className="grid">
          {game.grid.map((column, index) =>
            <div className="column" key={`column-${index}`}>
              {column.map(square =>
                <Square
                  square={square}
                  key={`square-${square.x}-${square.y}`}
                />,
              )}
            </div>,
          )}
          {game.winner && <p>You are winner</p>}
        </div>
      </div>
    );
  }
}

export default observer(App);
