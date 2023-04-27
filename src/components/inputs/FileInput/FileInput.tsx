import * as React from 'react';
import css from './FileInput.module.css';
import { Button } from '../../buttons';

export interface FileInputProps {
  callback: (file: File) => void,
  title: string
};

export const FileInput = ({ title, callback }: FileInputProps) => {

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    callback(file);
  }
  const onClick = (e: React.MouseEvent) => {
    inputRef.current?.click();
  }

  return (
    <div className={css.content}>
      <input
        accept="image/png,image/jpeg"
        className={css.input}
        onChange={onChange}
        ref={inputRef}
        type="file"
      />
      <Button color="blue" onClick={onClick}>{title}</Button>
    </div>
  );
};