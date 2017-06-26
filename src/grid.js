export const genGrid = (x, y) => Array(x).fill(Array(y).fill(undefined));
export const mapGrid = (grid, callback) =>
  grid.map((array, x) => array.map((square, y) => callback(square, x, y)));
export const fromDirection = (direction, position) => {
  const {x, y} = position;
  switch (direction) {
    case 'RIGHT':
      return {x: x + 1, y};
    case 'LEFT':
      return {x: x - 1, y};
    case 'UP':
      return {x, y: y - 1};
    case 'DOWN':
      return {x, y: y + 1};
    default:
      return {x, y};
  }
};
