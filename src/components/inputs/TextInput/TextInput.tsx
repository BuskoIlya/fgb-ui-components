import * as React from 'react';
import { Tooltip } from '@components';
import css from './TextInput.module.css';

export interface TextInputProps {
  label: string,
  message: string,
  status: 'default' | 'error' | 'valid',
  type: string,
  variant: 'horizontal' | 'vertical'
};

export const TextInput = ({
  label, message, status, type = 'text', variant = 'horizontal', ...rest
}: TextInputProps) => {

  const inputCSS = [
    css.input,
    ...(status ? [css[`input_${status}`]] : [])
  ].join(' ');

  return (
    <div className={css[`container_${variant}`]}>
      {label && <label className={css.label}>{label}</label>}
      <div className={css.inputContainer}>
        <input className={inputCSS} type={type} {...rest} />
        {
          status === 'error' && message && (
            <div className={css.tooltip}>
              <Tooltip type="error" message={message}/>
            </div>
          )
        }
      </div>
    </div>
  );
};