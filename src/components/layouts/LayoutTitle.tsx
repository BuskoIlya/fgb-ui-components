import * as React from 'react';
import css from './LayoutTitle.module.css';

export interface LayoutTitleProps {
  title: string,
  children?: React.ReactNode
};

export const LayoutTitle = ({ children, title }: LayoutTitleProps) => {
  return (
    <div className={css.content}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </div>
  );
};