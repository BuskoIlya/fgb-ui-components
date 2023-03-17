import * as React from "react";
import './SmartComponent.css';

export interface SmartComponentProps {
  active?: boolean,
  children?: React.ReactNode,
  className?: string,
  color: 'blue' | 'green' | 'red' | 'yellow',
  iconAfter?: React.ReactNode
  iconBefore?: React.ReactNode,
  Tag: React.ElementType
}

export function SmartComponent ({
  active, children, className, color, iconAfter, iconBefore, Tag = 'div', ...props
}: SmartComponentProps) {

  className = [
    'SmartComponent',
    `SmartComponent_${color}`,
    ...(active ? [`SmartComponent_active_${color}`] : []),
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