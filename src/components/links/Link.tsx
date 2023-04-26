import * as React from 'react';
import { SmartComponent, SmartComponentProps } from '@common';

export interface LinkProps
  extends Omit<SmartComponentProps, 'isActive' | 'className' | 'color' | 'Tag'>
{
  download?: boolean,
  children?: string,
  href: string,
  target?: string
};

/**
 * В проекте есть 3 вида линков:
 * - ведущий на внешнюю страницу (LinkExternal)
 * - для скачивания внутреннего ресурса: pdf книги (LinkDownload)
 * - основан на Link из react-router-dom, выглядит как текст
 * и ведёт на внутренний ресурс (LinkInner)
 */
export const Link = ({ children, ...props}: LinkProps) => {
  return <SmartComponent color="blue" Tag="a" {...props}>{children}</SmartComponent>;
};