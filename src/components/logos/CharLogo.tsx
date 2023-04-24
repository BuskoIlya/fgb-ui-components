import * as React from 'react';
import css from './Logo.module.css';

export interface CharLogoProps {
  className: string,
  char: string
}

export const CharLogo = ({ className, char }: CharLogoProps) => {
  return (
    <span className={`${css.wrapper} ${className}`}>{char}</span>
  );
};