import * as React from 'react';
import css from './Logo.module.css';

export interface LogoProps {
  className: string,
  img: string,
  title: string
}

export const Logo = ({ className, img, title }: LogoProps) => {
  return (
    <img alt={title} className={`${css.wrapper} ${className}`} src={img} />
  );
};