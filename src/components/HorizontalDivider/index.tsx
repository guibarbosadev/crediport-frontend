import React from 'react';
import { StyledHorizontalDivider } from './styles';

interface IProps {
    className?: string;
}

export function HorizontalDivider({ className }: IProps) {
    return <StyledHorizontalDivider className={className ?? ''} />;
}
