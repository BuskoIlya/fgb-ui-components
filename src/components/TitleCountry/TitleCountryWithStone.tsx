import * as React from 'react';
import { TitleCountry, TitleCountryProps } from './TitleCountry';
import './TitleCountryWithStone.css';
import { BlackStone, WhiteStone } from '../Stones';

export interface TitleCountryWithStoneProps extends TitleCountryProps {
  black: boolean
};

export const TitleCountryWithStone = ({
  black, ...props }: TitleCountryWithStoneProps) => {
  return (
    <div className="TitleCountryWithStone">
      {black ? <BlackStone /> : <WhiteStone />}
      <TitleCountry {...props} />
    </div>
  );
};