import {autorun} from 'mobx';
import {types} from 'mobx-state-tree';
import {get} from 'lodash';
import Grid from './Grid';
import Position from './Position';
import {fromDirection} from '../grid';

const Game = types.model(
  'Game',
  {
    grid: Grid,
    position: Position,
    goal: Position,
    winner: types.boolean,
    get current() {
      return this.grid[this.position.x][this.position.y];
    },
  },
  {player: null},
  {
    afterCreate() {
      this.player = autorun(() => {
        const {x, y} = this.position;
        this.visited(this.grid[x][y]);
      });
    },
    visited(square) {
      /* eslint-disable no-param-reassign */
      square.seen = true;
      square.visitable = true;
      /* eslint-enable no-param-reassign */
      this.winner = square.x === this.goal.x && square.y === this.goal.y;
    },
    move(direction) {
      const {x, y} = fromDirection(direction, this.position);
      const newPos = get(this.grid, [x, y]);
      if (newPos && newPos.visitable) {
        this.position.x = x;
        this.position.y = y;
      } else if (newPos && !newPos.visitable) {
        newPos.seen = true;
      }
    },
  },
);

export default Game;
