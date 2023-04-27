import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '@common';
import css from './IconButton.module.css';

export interface IconButtonProps extends Omit<
  SmartComponentProps,
  'Tag' | 'iconAfter' | 'iconBefore' | 'isActive' | 'children'
  > {
  icon: React.ReactNode
};

export const IconButton = ({ className, color, icon, ...props }: IconButtonProps) => {
  className = [css.iconButton, ...(className ? [className] : [])].join(' ');
  return (
    <SmartComponent
      className={className}
      color={color}
      iconBefore={icon}
      Tag="button"
      {...props}
    />
  );
};