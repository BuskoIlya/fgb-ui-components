import * as React from 'react';
import { IconXmark } from '@common';
import { IconButton, IconButtonProps } from './IconButton';

export interface CloseButtonProps extends Omit<IconButtonProps, 'icon' | 'color'> {};

export const CloseButton = ({ className, ...props} : CloseButtonProps) => {
  return (
    <IconButton
      className={className}
      color="red"
      icon={<IconXmark />}
      {...props}
    />
  );
};