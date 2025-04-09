import React from 'react';

import { styled } from 'styled-components';

import { ColorType, WeightType } from '../../lib';

type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps = {
  children: React.ReactNode;
  as?: TitleType;
  color?: ColorType;
  weight?: WeightType;
  padding?: string;
  disabled?: boolean;
  italic?: boolean;
  underline?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLHeadElement>) => void;
};

const Component = styled('div')<TitleProps>`
  padding: ${({ padding }) => (padding ? padding : '0')};
  color: ${({ color, disabled, theme }) => {
    if (disabled) return theme.colors.disabled;

    switch (color) {
      case ColorType.PRIMARY:
        return theme.colors.primary;
      case ColorType.SECONDARY:
        return theme.colors.secondary;
      case ColorType.GHOST:
        return theme.colors.ghost;
      case ColorType.LINK:
        return theme.colors.link;
      case ColorType.SUCCESS:
        return theme.colors.success;
      case ColorType.WARNING:
        return theme.colors.warning;
      case ColorType.DANGER:
        return theme.colors.danger;
      default:
        return theme.colors.default;
    }
  }};
  font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  font-weight: ${({ weight }) => weight};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  cursor: ${({ disabled, onClick }) =>
    disabled ? 'not-allowed' : onClick ? 'pointer' : 'text'};
`;

export const Title = ({
  children,
  as = 'h2',
  disabled,
  className,
  onClick,
  ...props
}: TitleProps) => {
  return (
    <Component
      className={className}
      as={as}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};
