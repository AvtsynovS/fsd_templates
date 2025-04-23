import { useId, useState } from 'react';
import styled from 'styled-components';

import { OptionType, StatusType } from '../../types';

type SelectProps = {
  options: OptionType[];
  label?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  status?: StatusType;
  errorMessage?: string;
  className?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => void;
};

const StyledWrapper = styled.div<{
  status: StatusType;
  disabled: boolean;
}>`
  display: flex;
  flex-direction: column;
  position: relative;

  & > :first-child {
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }

  select,
  ::picker(select) {
    appearance: base-select;
    background-color: ${({ status, disabled, theme }) => {
      if (disabled) return theme.controls.input.bg.disabled;

      switch (status) {
        case 'success':
          return theme.bg.success;
        case 'warning':
          return theme.bg.warning;
        case 'error':
          return theme.bg.error;
        default:
          return theme.controls.input.bg.default;
      }
    }};
    border: ${({ status, disabled, theme }) => {
      if (disabled) return theme.controls.select.border.disabled;

      switch (status) {
        case 'success':
          return theme.borders.success;
        case 'warning':
          return theme.borders.warning;
        case 'error':
          return theme.borders.error;
        default:
          return theme.controls.select.border.default;
      }
    }};
    border-radius: 4px;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      background-color: ${({ theme }) => theme.controls.select.bg.hover};
      border: ${({ theme }) => theme.controls.select.border.hover};
    }
  }
`;

const StyledLabel = styled.label<{
  status: StatusType;
  disabled: boolean;
}>`
  margin-left: ${({ theme }) => theme.spaces.s};
  margin-bottom: ${({ theme }) => theme.spaces.xs};
  color: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.select.color.disabled;

    switch (status) {
      case 'success':
        return theme.colors.success;
      case 'warning':
        return theme.colors.warning;
      case 'error':
        return theme.colors.error;
      default:
        return theme.controls.select.color.default;
    }
  }};
`;

const StyledRequired = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: ${({ theme }) => theme.spaces.xxs};
`;

const StyledSelect = styled.select<{
  status: StatusType;
  disabled: boolean;
}>`
  background-color: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.select.bg.disabled;

    switch (status) {
      case 'success':
        return theme.bg.success;
      case 'warning':
        return theme.bg.warning;
      case 'error':
        return theme.bg.error;
      default:
        return theme.controls.select.bg.default;
    }
  }};
  // TODO Вынести в тему?
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: ${({ theme }) => theme.spaces.s};
  // TODO Вынести в тему?
  border-radius: 4px;

  &::picker-icon {
    color: ${({ theme }) => theme.controls.select.color.secondary};
    transition: 0.6s rotate;
  }

  &:open::picker-icon {
    rotate: 180deg;
  }

  &:hover:not(:disabled),
  &:focus {
    background-color: ${({ theme }) => theme.controls.select.bg.disabled};
  }
`;

const StyledOption = styled.option`
  border: ${({ theme }) => theme.controls.select.border.secondary};
  padding: ${({ theme }) => theme.spaces.s};
  transition: 0.4s;

  &:first-of-type {
    border-radius: 8px 8px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 8px 8px;
  }

  &:not(option:last-of-type) {
    border-bottom: ${({ theme }) => theme.spaces.none};
  }

  &::checkmark {
    display: none;
  }
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

// TODO Настроить темы
export const Select = ({
  options,
  label,
  name,
  required,
  disabled = false,
  status = 'default',
  errorMessage,
  className,
  onChange,
}: SelectProps) => {
  const id = useId();
  const [value, setValue] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    onChange?.(event.target.value, event);
  };

  return (
    <StyledWrapper className={className} status={status} disabled={disabled}>
      <StyledLabel htmlFor={id} status={status} disabled={disabled}>
        <span>
          <span>{label}</span>
          {required && <StyledRequired>*</StyledRequired>}
        </span>
      </StyledLabel>
      <StyledSelect
        id={id}
        name={name}
        onChange={handleChange}
        value={value}
        disabled={disabled}
        status={status}
      >
        {options.map(({ label, value }) => (
          <StyledOption value={value}>{label}</StyledOption>
        ))}
      </StyledSelect>
      {errorMessage && (
        <StyledErrorMessage status={status} disabled={disabled}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};
