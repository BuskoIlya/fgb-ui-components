import * as React from 'react';
import { ErrorMessage, ErrorMessageProps } from '../components/ErrorMessage';

export const withError = <T extends object> (Component: React.ComponentType<T>) => {
  return ({ errorMessage, ...props }: T & ErrorMessageProps) => {
    return (
      errorMessage ? <ErrorMessage {...{errorMessage}} /> :
        <Component {...props as T} />
    );
  }
}