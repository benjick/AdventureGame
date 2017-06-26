import {genGrid, mapGrid} from './grid';
import Game from './models/Game';

let grid = genGrid(15, 10);
grid = mapGrid(grid, (square, x, y) => ({
  x,
  y,
  seen: false,
  visitable: Math.random() > 0.1,
}));

const game = Game.create({
  grid,
  position: {
    x: Math.floor(Math.random() * grid.length),
    y: Math.floor(Math.random() * grid[0].length),
  },
  goal: {
    x: Math.floor(Math.random() * grid.length),
    y: Math.floor(Math.random() * grid[0].length),
  },
  winner: false,
});

export {game};
