import * as React from 'react';
import { ErrorMessage, ErrorMessageProps } from '../components/ErrorMessage';
import { Loader } from '../components/Loader';
import { WithLoadingProps } from './withLoading';

export const withNoData = <T extends object> (Component: React.ComponentType<T>) => {
  return ({ isLoading, error, ...props }: T & WithLoadingProps & ErrorMessageProps) => {
    return (
      isLoading ? <Loader /> :
        error ? <ErrorMessage error={error} /> :
          <Component {...props as T} />
    );
  }
};