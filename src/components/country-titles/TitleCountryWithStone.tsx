import * as React from 'react';
import { TitleCountry, TitleCountryProps } from './TitleCountry';
import { BlackStone, WhiteStone } from '../stones';

import css from './TitleCountryWithStone.module.css';

export interface TitleCountryWithStoneProps extends TitleCountryProps {
  black: boolean
};

export const TitleCountryWithStone = ({
  black, ...props }: TitleCountryWithStoneProps) => {
  return (
    <div className={css.content}>
      {black ? <BlackStone /> : <WhiteStone />}
      <TitleCountry {...props} />
    </div>
  );
};