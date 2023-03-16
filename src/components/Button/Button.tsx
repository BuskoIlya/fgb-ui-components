import * as React from 'react';
import { SmartComponent, SmartComponentProps } from "../SmartComponent";
import './Button.css';

export interface ButtonProps extends Omit<SmartComponentProps, 'Tag'> {
  startIcon?: React.ReactNode,
  endIcon?: React.ReactNode
}

export const Button = ({
  startIcon, endIcon, children, className, color, ...props
}: ButtonProps) => {

  className = ['Button', ...(className ? [className] : [])].join(' ');

  return (
    <SmartComponent className={className} color={color} Tag='button' {...props}>
      {startIcon}
      {children}
      {endIcon}
    </SmartComponent>
  )
}