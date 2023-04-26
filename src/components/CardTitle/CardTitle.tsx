import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '@common';
import css from './CardTitle.module.css';

export interface CardTitleProps
  extends Omit<SmartComponentProps, 'isActive' | 'className'>
{
  children?: string,
  to: string
};

export const CardTitle = ({ children, color, Tag, ...props }: CardTitleProps) => {
  return (
    <SmartComponent color={color} className={css.title} Tag={Tag} {...props}>
      {children}
    </SmartComponent>
  );
};