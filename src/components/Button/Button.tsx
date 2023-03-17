import * as React from 'react';
import { SmartComponent, SmartComponentProps } from "../SmartComponent";
import './Button.css';

export interface ButtonProps extends Omit<SmartComponentProps, 'Tag'> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {

  className = ['Button', ...(className ? [className] : [])].join(' ');

  return (
    <SmartComponent className={className} Tag='button' {...props}>
      {children}
    </SmartComponent>
  )
}