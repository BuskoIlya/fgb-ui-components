import * as React from 'react';
import './TitleCountry.css';

/**
 * @text - это название страны, города или фио игрока
 */
export interface TitleCountryProps {
  flagImg?: string,
  flagTitle?: string,
  text?: string
};

export const TitleCountry = ({ flagImg, flagTitle, text }: TitleCountryProps) => {
  return (
    <div className="TitleCountry">
      <img className="TitleCountry__img" src={flagImg} title={flagTitle} alt="" />
      {text && <span>{text}</span>}
    </div>
  );
};