import { useId, useState } from 'react';
import styled from 'styled-components';

import { PositionType, StatusType } from '../../types';

type CheckboxProps = {
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  position?: PositionType;
  status?: StatusType;
  errorMessage?: string;
  className?: string;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const StyledWrapper = styled.div<{ status: StatusType; disabled: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spaces.xs};
  position: relative;
`;

const StyledLabel = styled.label<{
  position: PositionType;
  status: StatusType;
  disabled: boolean;
}>`
  display: flex;
  order: ${({ position }) => (position === 'right' ? 1 : -1)};
  cursor: pointer;

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

const StyledCheckbox = styled.input`
  // TODO добавить темизацию для чекбокса
  accent-color: ${({ theme }) => theme.controls.checkbox.bg.default};
  margin-left: ${({ theme }) => theme.spaces.s};
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

export const Checkbox = ({
  className,
  disabled = false,
  errorMessage,
  label,
  name,
  required,
  position = 'right',
  status = 'default',
  onChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const id = useId();

  const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    onChange?.(event.target.checked, event);
  };

  return (
    <StyledWrapper className={className} status={status} disabled={disabled}>
      <StyledCheckbox
        id={id}
        name={name}
        type="checkbox"
        onChange={handleSwitch}
        checked={isChecked}
      />
      <StyledLabel
        position={position}
        status={status}
        disabled={disabled}
        htmlFor={id}
      >
        <div>
          <span>{label}</span>
          {required && <StyledRequired>*</StyledRequired>}
        </div>
      </StyledLabel>
      {errorMessage && (
        <StyledErrorMessage status={status} disabled={disabled}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};
