import * as React from 'react';
import { Button, ButtonProps } from './Button';

export interface CancelButtonProps extends ButtonProps {};

export const CancelButton = ({ onClick }: CancelButtonProps) => {
  return (
    <Button color="red" onClick={onClick}>Отменить</Button>
  );
};