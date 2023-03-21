import * as React from 'react';
import { Loader } from '../components/Loader';

export interface WithLoadingProps {
  isLoading: boolean
};

export const withLoading = <T extends object> (Component: React.ComponentType<T>) => {
  return ({ isLoading, ...props }: T & WithLoadingProps) => {
    return isLoading ? <Loader /> : <Component {...props as T} />;
  }
};