import * as React from 'react';

export interface ErrorMessageProps {
  error: string
};

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return <p>{error}</p>
};