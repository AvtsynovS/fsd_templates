import { ReactNode } from 'react';

import styled from 'styled-components';

import { StatusType } from '../../types';

type TextFieldType = 'text' | 'password';

type TextFieldProps = {
  label?: string | ReactNode;
  name?: string;
  type?: TextFieldType;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  status?: StatusType;
  errorMessage?: string;
  rows?: number;
  as?: 'textarea' | 'input';
  className?: string;
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledLabel = styled.label<{ status: StatusType; disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spaces.xxs};
  margin-left: ${({ theme }) => theme.spaces.s};
  margin-bottom: ${({ theme }) => theme.spaces.xs};
  height: 1rem;

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

const StyledTextField = styled.input<{
  status?: StatusType;
  disabled: boolean;
}>`
  padding: ${({ theme }) => theme.spaces.s};
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.input.border.disabled;

    switch (status) {
      case 'success':
        return theme.borders.success;
      case 'warning':
        return theme.borders.warning;
      case 'error':
        return theme.borders.error;
      default:
        return theme.controls.input.border.default;
    }
  }};

  color: unset;

  background-color: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.input.border.disabled;

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
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.controls.input.bg.focus};
    border: ${({ theme }) => theme.controls.input.border.focus};
  }

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${({ theme }) => theme.controls.input.bg.hover};
    border: ${({ theme }) => theme.controls.input.border.hover};
  }
`;

const StyledTextAreaField = styled.textarea<{
  status?: StatusType;
  disabled: boolean;
}>`
  padding: ${({ theme }) => theme.spaces.s};
  border-radius: 4px;
  border: ${({ status, disabled, theme }) => {
    if (disabled) return theme.controls.input.border.disabled;

    switch (status) {
      case 'success':
        return theme.borders.success;
      case 'warning':
        return theme.borders.warning;
      case 'error':
        return theme.borders.error;
      default:
        return theme.controls.input.border.default;
    }
  }};

  // TODO Подобрать цвета бекграунда + темная тема + textarea
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
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};

  &:hover:not(:disabled) {
    border: ${({ theme }) => theme.controls.input.border.hover};
  }

  &:focus {
    outline: none;
    border: ${({ theme }) => theme.controls.input.border.focus};
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
  font-size: 14px;

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

const StyledRequired = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: ${({ theme }) => theme.spaces.xxs};
`;

// TODO настроить темную тему
export const TextField = ({
  label,
  name,
  type = 'text',
  required = false,
  disabled = false,
  status = 'default',
  placeholder,
  errorMessage,
  rows,
  as,
  className,
}: TextFieldProps) => {
  return (
    <StyledWrapper>
      <StyledLabel status={status} disabled={disabled} htmlFor={name}>
        <div>{label}</div>
        {required && <StyledRequired>*</StyledRequired>}
      </StyledLabel>
      <StyledTextField
        className={className}
        as={as}
        type={as === 'textarea' ? type : 'text'}
        name={name}
        placeholder={placeholder}
        status={status}
        disabled={disabled}
        rows={as === 'textarea' ? rows : undefined}
      />
      {/* {type === 'textarea' ? (
        <StyledTextAreaField
          status={status}
          disabled={disabled}
          name={name}
          placeholder={placeholder}
          rows={rows}
        ></StyledTextAreaField>
      ) : (
        <StyledTextField
          as={as}
          type={type}
          name={name}
          placeholder={placeholder}
          status={status}
          disabled={disabled}
        />
      )} */}
      {errorMessage && (
        <StyledErrorMessage status={status} disabled={disabled}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};
