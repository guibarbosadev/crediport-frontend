import React from 'react';

export interface IProps extends React.HTMLProps<HTMLInputElement> {}
    export function Input(props: IProps) {
    return <input {...props} />;
}
