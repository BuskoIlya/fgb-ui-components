import * as React from 'react';
import css from './stones.module.css';

export const BlackStone = () => {
  return <span className={css.blackStone}>&#9679;</span>
}

export const WhiteStone = () => {
  return <span>&#9675;</span>
}