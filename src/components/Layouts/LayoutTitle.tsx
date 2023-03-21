import * as React from 'react';
import './LayoutTitle.css';

export interface LayoutTitleProps {
  title: string,
  children?: React.ReactNode
};

export const LayoutTitle = ({ children, title }: LayoutTitleProps) => {
  return (
    <div className="LayoutTitle">
      <h2 className="LayoutTitle__title">{title}</h2>
      {children}
    </div>
  );
};