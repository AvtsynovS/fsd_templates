import React from 'react';
import { styled } from 'styled-components';

type WeightType = {
  weight?: 200 | 300 | 400 | 500 | 600 | 700;
};

type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

// TODO при необходимости вынести в общие типы
type ColorType =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger';

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
      case 'primary':
        return theme.colors.primary;
      case 'link':
        return theme.colors.link;
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'danger':
        return theme.colors.danger;
      case 'secondary':
        return theme.colors.secondary;
      case 'ghost':
        return theme.colors.ghost;
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
