import * as React from 'react';
import { Link, LinkProps } from './Link';

export interface LinkExternalProps extends Omit<LinkProps, 'download'> {}

export const LinkExternal = ({ children, ...props }: LinkExternalProps) => {

  return <Link target="_blank" {...props}>{children}</Link>;
}