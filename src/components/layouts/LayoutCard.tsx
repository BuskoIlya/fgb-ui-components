import * as React from 'react';
import './LayoutCard.css';

export interface LayoutCardProps {
  children: React.ReactNode
};

export const LayoutCard = ({ children }: LayoutCardProps) => {
  return <div className="LayoutCard__content">{children}</div>;
};