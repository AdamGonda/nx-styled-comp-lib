import React from 'react';
import styled from 'styled-components';
import MuiButton, { ButtonProps as MuiProps } from '@mui/material/Button';

export interface ButtonProps extends MuiProps {
  children: React.ReactNode;
}

export default function ({ children, ...restProps }: ButtonProps) {
  return <StyledMuiButton {...restProps}>{children}</StyledMuiButton>;
}

const StyledMuiButton = styled(MuiButton)`
  && {
    text-transform: none;
  }
`;
