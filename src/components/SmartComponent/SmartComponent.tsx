import * as React from "react";
import './SmartComponent.css';

export interface SmartComponentProps {
  active?: boolean,
  children?: React.ReactNode,
  className?: string,
  color: 'blue' | 'green' | 'red' | 'yellow',
  Tag: React.ElementType
}

export function SmartComponent ({
  active, children, className, color, Tag = 'div', ...props
}: SmartComponentProps) {

  className = [
    'SmartComponent',
    `SmartComponent_${color}`,
    ...(active ? [`SmartComponent_active_${color}`] : []),
    className
  ].join(' ');

  return <Tag className={className} {...props}>{children}</Tag>;
}