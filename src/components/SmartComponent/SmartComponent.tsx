import * as React from "react";
import './SmartComponent.css';

export interface SmartComponentProps {
  children?: React.ReactNode,
  className?: string,
  color: 'blue' | 'green' | 'red' | 'yellow',
  Tag: React.ElementType
}

export function SmartComponent ({
  children,
  className,
  color,
  Tag = 'div',
  ...props
}: SmartComponentProps) {

  let classes = [
    'SmartComponent',
    `SmartComponent_${color}`,
    className
  ].join(' ');

  return <Tag className={classes} {...props}>{children}</Tag>;
}