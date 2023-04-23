import * as React from 'react';
import css from './SmartComponent.module.css';
import './SmartComponent.css';

export interface SmartComponentProps {
  children?: React.ReactNode,
  className?: string,
  color: 'blue' | 'green' | 'red' | 'yellow',
  iconAfter?: React.ReactNode
  iconBefore?: React.ReactNode,
  isActive?: boolean,
  Tag: React.ElementType
};

export function SmartComponent ({
  children, className, color, iconAfter, iconBefore, isActive, Tag = 'div', ...props
}: SmartComponentProps) {

  className = [
    css.wrapper,
    css[`wrapper_${color}`],
    ...(isActive ? [css[`wrapper_${color}_active`]] : []),
    `wrapper_${color}`,
    className
  ].join(' ');

  return (
    <Tag className={className} {...props}>
      {iconBefore}
      {children}
      {iconAfter}
    </Tag>
  );
};