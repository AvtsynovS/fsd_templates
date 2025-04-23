import styled from 'styled-components';

import { ColorType, SizeType } from '../../lib';

type ButtonType = 'button' | 'reset' | 'submit';
type ButtonWidth = 'default' | 'full';

type ButtonProps = {
  label?: string;
  // TODO возможно стоит вынести цвета как отдельный проп
  view?: ColorType;
  type?: ButtonType;
  disabled?: boolean;
  onlyIcon?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: ButtonWidth;
  size?: SizeType;
  className?: string;
  onClick?: () => void;
};

const StyledButton = styled.button<{
  $view: ColorType;
  width: ButtonWidth;
  size: SizeType;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spaces.xs};
  width: ${({ width }) => width === 'full' && '100%'};
  border-radius: 0.5em;
  border: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.controls.button.border.disabled;

    switch ($view) {
      case ColorType.PRIMARY:
        return theme.controls.button.border.primary;
      case ColorType.SUCCESS:
        return theme.controls.button.border.success;
      case ColorType.WARNING:
        return theme.controls.button.border.warning;
      case ColorType.ERROR:
        return theme.controls.button.border.error;
      case ColorType.SECONDARY:
      case ColorType.GHOST:
        return theme.controls.button.border.secondary;
      case ColorType.DEFAULT:
        return theme.controls.button.border.default;
      case ColorType.LINK:
      default:
        return 'transparent';
    }
  }};
  /* TODO Посмотреть как выглядит при медиа-запросах */
  padding: ${({ size }) => {
    switch (size) {
      case SizeType.SMALL:
        return '0.6em 0.8em';
      case SizeType.LARGE:
        return '0.8em 1em';
      default:
        return '0.7em 0.9em';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case SizeType.SMALL:
        // TODO вынести размеры шрифта в тему?
        return '14px';
      case SizeType.LARGE:
        return '18px';
      default:
        return '16px';
    }
  }};
  font-weight: 500;
  background-color: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.controls.button.bg.disabled;

    switch ($view) {
      case ColorType.PRIMARY:
        return theme.controls.button.bg.primary;
      case ColorType.SECONDARY:
        return theme.controls.button.bg.secondary;
      case ColorType.DEFAULT:
        return theme.controls.button.bg.default;
      case ColorType.SUCCESS:
        return theme.controls.button.bg.success;
      case ColorType.WARNING:
        return theme.controls.button.bg.warning;
      case ColorType.ERROR:
        return theme.controls.button.bg.error;
      case ColorType.GHOST:
      case ColorType.LINK:
      default:
        return 'transparent';
    }
  }};
  color: ${({ $view, disabled, theme }) =>
    disabled
      ? theme.controls.button.color.disabled
      : theme.controls.button.color[$view]};
  transition: all 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover:not(:disabled) {
    filter: brightness(85%);
  }

  &:active:not(:disabled) {
    box-shadow: ${({ $view }) =>
      $view !== 'link' &&
      `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`};
  }

  &:focus:not(:disabled) {
    box-shadow: ${({ $view }) =>
      $view !== 'link' && `0 0 8px -2px rgba(0, 0, 0, 0.25) inset`};
  }

  &:focus-visible:not(:disabled) {
    outline: unset;
  }
`;

export const Button = ({
  label,
  type = 'button',
  view = ColorType.PRIMARY,
  width = 'default',
  size = SizeType.MEDIUM,
  disabled,
  iconLeft,
  iconRight,
  onlyIcon,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <StyledButton
      className={className}
      type={type}
      $view={view}
      width={width}
      size={size}
      disabled={disabled}
      onClick={onClick}
    >
      {onlyIcon ? (
        iconLeft
      ) : (
        <>
          {iconLeft && iconLeft}
          {label}
          {iconRight && iconRight}
        </>
      )}
    </StyledButton>
  );
};
