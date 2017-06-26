import {types, getParent} from 'mobx-state-tree';

const Square = types.model('Square', {
  seen: types.boolean,
  visitable: types.boolean,
  x: types.number,
  y: types.number,
  get player() {
    const parent = getParent(this, 3);
    return parent.position.x === this.x && parent.position.y === this.y;
  },
  get goal() {
    const parent = getParent(this, 3);
    return parent.goal.x === this.x && parent.goal.y === this.y;
  },
});

export default Square;
