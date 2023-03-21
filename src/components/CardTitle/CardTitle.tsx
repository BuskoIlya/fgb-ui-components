import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '../SmartComponent';
import './CardTitle.css';

export interface CardTitleProps
  extends Omit<SmartComponentProps, 'isActive' | 'className'>
{
  children?: string,
  to: string
};

export const CardTitle = ({ children, color, Tag, ...props }: CardTitleProps) => {
  return (
    <SmartComponent color={color} className="CardTitle" Tag={Tag} {...props}>
      {children}
    </SmartComponent>
  );
};