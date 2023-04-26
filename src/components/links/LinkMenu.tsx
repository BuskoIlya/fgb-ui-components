import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '@common';
import css from './LinkMenu.module.css';

/**
 * Линки в соответствии с элементами меню имеют "два" уровня:
 * - самый верхний
 * - все остальные подуровни
 *
 * @isFirstLevel означает, что данный линк в меню относится к самому
 * верхнему уровню: они имеют красный цвет, большие размеры и состояние
 * "выбран".
 */
export interface LinkMenuProps
  extends Omit<SmartComponentProps, 'className' | 'color'>
{
  children?: string,
  isFirstLevel: boolean,
  to: string
};

export const LinkMenu = ({ children, isFirstLevel, ...props }: LinkMenuProps) => {

  const className = [
    css.menu,
    (isFirstLevel ? css.level1 : css.level2)
  ].join(' ');
  const color = isFirstLevel ? 'red' : 'green';

  return (
    <SmartComponent className={className} color={color} {...props}>
      {children}
    </SmartComponent>
  );
};