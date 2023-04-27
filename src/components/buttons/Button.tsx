import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '@common';
import css from './Button.module.css';

export interface ButtonProps extends Omit<SmartComponentProps, 'Tag'> {
  disabled?: boolean
};

export const Button = ({ children, className, disabled, onClick, ...props }: ButtonProps) => {
  className = [css.button, ...(className ? [className] : [])].join(' ');
  const fullProps = { ...props, className, disabled, onClick };
  return (
    <SmartComponent Tag="button" {...fullProps}>
      {children}
    </SmartComponent>
  );
};