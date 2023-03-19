import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '../SmartComponent';

export interface LinkInnerProps
  extends Omit<SmartComponentProps, 'isActive' | 'className' | 'color'>
{
  children?: string,
  to: string
}

export const LinkInner = ({ children, Tag, ...props }: LinkInnerProps) => {

  return <SmartComponent color="blue" Tag={Tag} {...props}>{children}</SmartComponent>;
}