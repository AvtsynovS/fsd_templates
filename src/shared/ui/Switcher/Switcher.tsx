import { useId, useState } from 'react';

import styled from 'styled-components';

import { SizeType } from '@shared';

type SwitcherProps = {
  name: string;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  label?: string;
  size?: SizeType;
  disabled?: boolean;
  className?: string;
};

const StyledContainer = styled.div<{ size?: SizeType }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.s};

  & > div {
    position: relative;
    width: ${({ size }) => {
      switch (size) {
        case SizeType.SMALL:
          return '58px';
        case SizeType.LARGE:
          return '75px';
        default:
          return '68px';
      }
    }};
  }
`;

const StyledCheckbox = styled.input`
  display: none;
`;

const StyledLabel = styled.label<{
  checked: boolean;
  size?: SizeType;
  disabled?: boolean;
}>`
  display: block;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  // TODO Вынести радиус в тему?
  border-radius: 20px;
  margin: ${({ theme }) => theme.spaces.none};
  border: ${({ theme }) => theme.controls.switcher.border.default};

  &:hover:not(:disabled) {
    filter: brightness(90%);
  }

  :first-child {
    display: block;
    width: 200%;
    margin-left: -100%;
    transition: margin 0.3s ease-in 0s;
    margin-left: ${({ checked, theme }) => !checked && theme.spaces.none};
  }

  :first-child:before,
  :first-child:after {
    display: block;
    float: left;
    width: 50%;
    height: ${({ size }) => {
      switch (size) {
        case SizeType.SMALL:
          return '24px';
        case SizeType.LARGE:
          return '34px';
        default:
          return '30px';
      }
    }};
    padding: ${({ theme }) => theme.spaces.none};
    box-sizing: border-box;
  }

  :first-child:before {
    content: '';
    padding-left: ${({ theme }) => theme.spaces.s};
    background-color: ${({ disabled, theme }) =>
      disabled
        ? `${theme.controls.switcher.bg.disabled}`
        : `${theme.controls.switcher.bg.default}`};
  }

  :first-child:after {
    content: '';
    padding-right: ${({ theme }) => theme.spaces.s};
    background-color: ${({ disabled, theme }) =>
      disabled
        ? `${theme.controls.switcher.bg.disabled}`
        : `${theme.controls.switcher.bg.default}`};
    border: ${({ theme }) => theme.controls.switcher.border.default};
  }

  /* Ползунок */
  :last-child {
    display: block;
    width: ${({ size }) => {
      switch (size) {
        case SizeType.SMALL:
          return '18px';
        case SizeType.LARGE:
          return '24px';
        default:
          return '22px';
      }
    }};
    margin: ${({ size }) => {
      switch (size) {
        case SizeType.SMALL:
          return '4px 6px';
        case SizeType.LARGE:
          return '5px';
        default:
          return '4px';
      }
    }};
    background: ${({ theme }) => theme.controls.switcher.color.default};
    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    position: absolute;
    top: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.spaces.l};
    transition: all 0.3s ease-in 0s;
    right: ${({ size, checked }) => {
      if (checked) return 0;

      switch (size) {
        case SizeType.SMALL:
          return '30px';
        case SizeType.LARGE:
          return '40px';
        default:
          return '37px';
      }
    }};
  }
`;

export const Switcher = ({
  name,
  onChange,
  size = SizeType.MEDIUM,
  label,
  disabled,
  className,
}: SwitcherProps) => {
  const id = useId();
  const [isToggled, setIsToggled] = useState(false);

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(event.target.checked);
    onChange?.(event.target.checked, event);
  };

  return (
    <StyledContainer className={className} size={size}>
      <div>
        <StyledCheckbox
          id={id}
          name={name}
          type="checkbox"
          onChange={handleSwitch}
          disabled={disabled}
        />
        <StyledLabel
          checked={isToggled}
          size={size}
          disabled={disabled}
          htmlFor={id}
        >
          <span />
          <span />
        </StyledLabel>
      </div>
      {label && <div>{label}</div>}
    </StyledContainer>
  );
};
