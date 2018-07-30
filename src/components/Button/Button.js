import React from 'react';
import { WithSpacing } from 'hoc';
import { ButtonStyled, AnchorStyled } from './Button.styles';

const ButtonComponent = ({
  size,
  primary,
  secondary,
  white,
  rounded,
  disabled,
  outline,
  small,
  large,
  anchor,
  children,
  ...rest
}) => {
  const Component = anchor ? AnchorStyled : ButtonStyled;

  return (
    <Component
      {...size && { size }}
      {...primary && { primary }}
      {...secondary && { secondary }}
      {...white && { white }}
      {...rounded && { rounded }}
      {...disabled && { disabled }}
      {...outline && { outline }}
      {...small && { small }}
      {...large && { large }}
      {...rest}
    >
      {children}
    </Component>
  );
};

const Button = WithSpacing(ButtonComponent);

export { Button };
