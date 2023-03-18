import * as React from "react";
import { SmartComponent, SmartComponentProps } from "../SmartComponent";
import './LinkMenu.css';

/**
 * Линки в соответствии с элементами меню имеют "два" уровня:
 * - самый верхний
 * - все остальные подуровни
 *
 * @isFirstLevel означает, что данный линк в меню относится к самому
 * верхнему уровню: они имеют красный цвет, большие размеры и состояние
 * isActive.
 */
export interface LinkMenuProps
  extends Omit<SmartComponentProps, 'className' | 'color'>
{
  children?: string,
  isFirstLevel: boolean,
  to: string
}

export const LinkMenu = ({ children, isFirstLevel, ...props }: LinkMenuProps) => {

  const className = [
    'LinkMenu',
    (isFirstLevel ? 'LinkMenu_level-1' : 'LinkMenu_level-2')
  ].join(' ');
  const color = isFirstLevel ? 'red' : 'green';

  return (
    <SmartComponent className={className} color={color} {...props}>
      {children}
    </SmartComponent>
  );
}