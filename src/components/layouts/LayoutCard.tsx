import * as React from 'react';
import css from './LayoutCard.module.css';

export interface LayoutCardProps {
  children: React.ReactNode
};

export const LayoutCard = ({ children }: LayoutCardProps) => {
  return <div className={css.content}>{children}</div>;
};