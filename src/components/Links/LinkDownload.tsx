import * as React from 'react';
import { Link, LinkProps } from './Link';

export interface LinkDownloadProps extends Omit<LinkProps, 'target'> {};

export const LinkDownload = ({ children, ...props }: LinkDownloadProps) => {
  return <Link download {...props}>{children}</Link>;
};