import * as React from 'react';
import css from './Tooltip.module.css';

export interface TooltipProps {
  type: 'error' | 'info' | 'success' | 'warning',
  message: string
};

export const Tooltip = ({ type, message }: TooltipProps) => {
  const className = [css.tooltip, css[`tooltip_${type}`]].join(' ');
  return (
    <div className={className}>
      {message}
    </div>
  );
};