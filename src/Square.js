import React from 'react';
import {observer} from 'mobx-react';
import cn from 'classnames';

const Square = ({square}) =>
  <div
    className={cn({
      square: true,
      'square--player': square.player,
      'square--unknown': !square.seen,
      'square--obs': square.seen && !square.visitable,
      'square--goal': square.goal,
    })}>
    {square.test}
  </div>;

export default observer(Square);
