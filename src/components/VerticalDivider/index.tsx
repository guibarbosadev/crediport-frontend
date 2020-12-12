import React from 'react';
import { StyledVerticalDivider } from './styles';

export interface IProps {
    className?: string;
}

export function VerticalDivider({ className }: IProps) {
    return <StyledVerticalDivider className={className ?? ''} />;
}
