import * as React from 'react';
import css from './TitleCountry.module.css';

export interface TitleCountryProps {
  img?: string,
  tooltip?: string,
  value?: string
};

/**
 * @param {string} img - это картинка с флагом страны.
 * @param {string} tooltip - показывается при наведении на флаг и отображает название страны.
 * @param {string} value - это название страны, города или фио игрока.
 */
export const TitleCountry = ({ img, tooltip, value }: TitleCountryProps) => {
  return (
    <div className={css.content}>
      <img className={css.img} src={img} title={tooltip} alt="" />
      {value && <span>{value}</span>}
    </div>
  );
};