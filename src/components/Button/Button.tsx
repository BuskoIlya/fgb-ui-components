import * as React from 'react';
import { SmartComponent, SmartComponentProps } from 'common';
import css from  './Button.module.css';

export interface ButtonProps extends Omit<SmartComponentProps, 'Tag'> {};

export const Button = ({ children, className, ...props }: ButtonProps) => {
  className = [css.button, ...(className ? [className] : [])].join(' ');
  return (
    <SmartComponent className={className} Tag="button" {...props}>
      {children}
    </SmartComponent>
  )
};