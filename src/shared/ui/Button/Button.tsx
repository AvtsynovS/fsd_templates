import styled from 'styled-components';

type ButtonType = 'button' | 'reset' | 'submit';
type ButtonView = 'default' | 'primary' | 'secondary' | 'ghost' | 'link';
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
  view: ButtonView;
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
  /* TODO прокинуть цвет из темы или все настройки border */
  border: ${({ view }) => (view === 'link' ? 'none' : '1px solid #034569')};
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
  background-color: ${({ view }) => {
    switch (view) {
      case 'primary':
        return '#007a88';
      case 'secondary':
        return '#f9f9f9';
      case 'default':
        return '#ffffff';
      case 'link':
      case 'ghost':
      default:
        return 'transparent';
    }
  }};
  color: ${({ view }) => {
    switch (view) {
      case 'primary':
        return '#fff';
      case 'link':
        return '#1826B0';
      case 'secondary':
      case 'ghost':
      default:
        return '#212121';
    }
  }};
  transition: all 0.3s;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  &:hover {
    filter: brightness(95%);
  }

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
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
      view={view}
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
