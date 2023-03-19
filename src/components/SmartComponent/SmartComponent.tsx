/*
  Данный компонент используется такими компонентами как:
  Button, CardTitle, Links
 */

import * as React from 'react';
import './SmartComponent.css';

export interface SmartComponentProps {
  children?: React.ReactNode,
  className?: string,
  color: 'blue' | 'green' | 'red' | 'yellow',
  iconAfter?: React.ReactNode
  iconBefore?: React.ReactNode,
  isActive?: boolean,
  Tag: React.ElementType
}

export function SmartComponent ({
  children, className, color, iconAfter, iconBefore, isActive, Tag = 'div', ...props
}: SmartComponentProps) {

  className = [
    'SmartComponent',
    `SmartComponent_${color}`,
    ...(isActive ? [`SmartComponent_${color}_active`] : []),
    className
  ].join(' ');

  return (
    <Tag className={className} {...props}>
      {iconBefore}
      {children}
      {iconAfter}
    </Tag>
  );
}