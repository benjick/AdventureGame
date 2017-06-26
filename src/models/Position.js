import {types} from 'mobx-state-tree';

const Position = types.model('Position', {
  x: types.number,
  y: types.number,
});

export default Position;
