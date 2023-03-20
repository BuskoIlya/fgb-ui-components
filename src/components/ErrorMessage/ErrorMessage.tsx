import * as React from 'react';

export interface ErrorMessageProps {
  errorMessage: string
}

export const ErrorMessage = ({ errorMessage }: ErrorMessageProps) => {
  return <p>{errorMessage}</p>
}