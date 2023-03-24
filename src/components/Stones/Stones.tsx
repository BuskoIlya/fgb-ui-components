import * as React from 'react';
import './Stones.css';

export const BlackStone = () => {
  return <span className="Stones__black-stone">&#9679;</span>
}

export const WhiteStone = () => {
  return <span>&#9675;</span>
}