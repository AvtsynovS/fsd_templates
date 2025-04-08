import styled from 'styled-components';

type ButtonType = 'button' | 'reset' | 'submit';
type ButtonView =
  | 'primary'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'default'
  | 'success'
  | 'warning'
  | 'danger';
type ButtonWidth = 'default' | 'full';
// TODO при необходимости вынести в общие типы
type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = {
  label?: string;
  view?: ButtonView;
  type?: ButtonType;
  disabled?: boolean;
  onlyIcon?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  width?: ButtonWidth;
  size?: ButtonSize;
  className?: string;
  onClick?: () => void;
};

const StyledButton = styled.button<{
  $view: ButtonView;
  width: ButtonWidth;
  size: ButtonSize;
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
      case 'primary':
        return `1px solid ${theme.borderColor.primary}`;
      case 'success':
        return `1px solid ${theme.borderColor.success}`;
      case 'warning':
        return `1px solid ${theme.borderColor.warning}`;
      case 'danger':
        return `1px solid ${theme.borderColor.danger}`;
      case 'secondary':
      case 'ghost':
        return `1px solid ${theme.borderColor.secondary}`;
      case 'default':
        return `1px solid ${theme.borderColor.default}`;
      case 'link':
      default:
        return 'transparent';
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '0.6em 0.8em';
      case 'large':
        return '0.8em 1em';
      default:
        return '0.7em 0.9em';
    }
  }};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '14px';
      case 'large':
        return '18px';
      default:
        return '16px';
    }
  }};
  font-weight: 500;
  background-color: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.bgButton.disabled;

    switch ($view) {
      case 'primary':
        return theme.bgButton.primary;
      case 'secondary':
        return theme.bgButton.secondary;
      case 'default':
        return theme.bgButton.default;
      case 'success':
        return theme.bgButton.success;
      case 'warning':
        return theme.bgButton.warning;
      case 'danger':
        return theme.bgButton.danger;
      case 'ghost':
      case 'link':
      default:
        return 'transparent';
    }
  }};
  color: ${({ $view, disabled, theme }) => {
    if (disabled) return theme.colors.disabled;

    switch ($view) {
      case 'primary':
        return theme.colors.default;
      case 'secondary':
        return theme.colors.secondary;
      case 'ghost':
        return theme.colors.ghost;
      case 'link':
        return theme.colors.link;
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'danger':
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
  view = 'primary',
  width = 'default',
  size = 'medium',
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
