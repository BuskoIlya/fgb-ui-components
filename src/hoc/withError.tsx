import * as React from 'react';
import { ErrorMessage, ErrorMessageProps } from '../components/ErrorMessage';

export const withError = <T extends object> (Component: React.ComponentType<T>) => {
  return ({ error, ...props }: T & ErrorMessageProps) => {
    return (
      error ? <ErrorMessage error={error} /> :
        <Component {...props as T} />
    );
  }
};