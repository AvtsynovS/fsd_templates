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
  gap: 5px;
  width: ${({ width }) => width === 'full' && '100%'};
  border-radius: 0.5em;
  height: 100%;
  border: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.borderColor.disabled;

    switch ($view) {
      case ColorType.PRIMARY:
        return `1px solid ${theme.borderColor.primary}`;
      case ColorType.SUCCESS:
        return `1px solid ${theme.borderColor.success}`;
      case ColorType.WARNING:
        return `1px solid ${theme.borderColor.warning}`;
      case ColorType.DANGER:
        return `1px solid ${theme.borderColor.danger}`;
      case ColorType.SECONDARY:
      case ColorType.GHOST:
        return `1px solid ${theme.borderColor.secondary}`;
      case ColorType.DEFAULT:
        return `1px solid ${theme.borderColor.default}`;
      case ColorType.LINK:
      default:
        return 'transparent';
    }
  }};
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
        return '14px';
      case SizeType.LARGE:
        return '18px';
      default:
        return '16px';
    }
  }};
  font-weight: 500;
  background-color: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.bgButton.disabled;

    switch ($view) {
      case ColorType.PRIMARY:
        return theme.bgButton.primary;
      case ColorType.SECONDARY:
        return theme.bgButton.secondary;
      case ColorType.DEFAULT:
        return theme.bgButton.default;
      case ColorType.SUCCESS:
        return theme.bgButton.success;
      case ColorType.WARNING:
        return theme.bgButton.warning;
      case ColorType.DANGER:
        return theme.bgButton.danger;
      case ColorType.GHOST:
      case ColorType.LINK:
      default:
        return 'transparent';
    }
  }};
  color: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.colors.disabled;

    switch ($view) {
      case ColorType.PRIMARY:
        return theme.colors.default;
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
