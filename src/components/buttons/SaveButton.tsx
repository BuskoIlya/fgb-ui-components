import * as React from 'react';
import { Button, ButtonProps } from './Button';
import {IconSave} from '../../common';

export interface SaveButtonProps extends ButtonProps {};

export const SaveButton = ({ className, isActive = true, onClick }: SaveButtonProps) => {
  return (
    <Button
      className={className}
      color="green"
      disabled={!isActive}
      iconBefore={<IconSave />}
      onClick={onClick}
    >
      Сохранить
    </Button>
  );
};