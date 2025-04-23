import { useId, useState } from 'react';

import styled from 'styled-components';

import { PositionType, StatusType } from '../../types';

type RadioProps = {
  label: string;
  value?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  status?: StatusType;
  position?: PositionType;
  errorMessage?: string;
  className?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  gap: ${({ theme }) => theme.spaces.xs};

  input:hover + label:hover {
    filter: brightness(120%);
  }
`;

const StyledLabel = styled.label<{
  position: PositionType;
  status: StatusType;
  disabled: boolean;
}>`
  display: flex;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  order: ${({ position }) => (position === 'right' ? 1 : -1)};

  color: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.input.color.disabled;

    switch (status) {
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'error':
        return theme.colors.error;
      default:
        return theme.controls.input.color.default;
    }
  }};
`;

const StyledRequired = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: ${({ theme }) => theme.spaces.xxs};
`;

const StyledErrorMessage = styled.p<{
  status?: StatusType;
  disabled: boolean;
}>`
  position: absolute;
  top: 100%;
  left: 12px;
  margin: ${({ theme }) => theme.spaces.none};
  font-size: 12px;

  color: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.input.color.disabled;

    switch (status) {
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'error':
        return theme.colors.error;
      default:
        return 'unset';
    }
  }};
`;

export const Radio = ({
  label,
  name,
  value,
  required,
  position = 'right',
  status = 'default',
  disabled = false,
  errorMessage,
  className,
  onChange,
}: RadioProps) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    onChange?.(event.target.value, event);
  };

  return (
    <StyledWrapper className={className}>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChecked}
      />
      <StyledLabel
        status={status}
        position={position}
        disabled={disabled}
        htmlFor={id}
      >
        <span>
          <span>{label}</span>
          {required && <StyledRequired>*</StyledRequired>}
        </span>
      </StyledLabel>
      {errorMessage && (
        <StyledErrorMessage status={status} disabled={disabled}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};
