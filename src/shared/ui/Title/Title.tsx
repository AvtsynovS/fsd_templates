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
  | 'info'
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
  /* TODO цвет получаем из темы */
  color: ${({ color, disabled }) => {
    if (disabled) return '#C7C7C7';

    console.log('color', color);
    switch (color) {
      case 'primary':
        return '#fff';
      case 'link':
        return '#1826B0';
      case 'info':
        return '#81D8D0';
      case 'success':
        return '#2C5F34';
      case 'warning':
        return '#FFA500';
      case 'danger':
        return '#942222';
      case 'secondary':
      case 'ghost':
      default:
        return '#212121';
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
