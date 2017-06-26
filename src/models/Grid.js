import {types} from 'mobx-state-tree';
import Square from './Square';

const Grid = types.array(types.array(Square));

export default Grid;
