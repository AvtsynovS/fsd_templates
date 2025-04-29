import styled from 'styled-components';

import { DirectionType, OptionType, StatusType } from '../../types';
import { generateRandomName } from '../../utils/utils';
import { Radio } from '../Radio';

type RadioGroupProps = {
  options: OptionType[];
  label?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
  status?: StatusType;
  direction?: DirectionType;
  errorMessage?: string;
  className?: string;
  onChange?: (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > :first-child {
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }
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

const StyledLabel = styled.span<{
  status: StatusType;
  disabled: boolean;
}>`
  margin-left: ${({ theme }) => theme.spaces.s};
  margin-bottom: ${({ theme }) => theme.spaces.xs};
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

const StyledWrapperOptions = styled.div<{ direction: DirectionType }>`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === 'horizontal' ? 'row' : 'column'};
  gap: ${({ direction, theme }) =>
    direction === 'horizontal' ? theme.spaces.s : theme.spaces.xxs};
  margin-left: ${({ theme }) => theme.spaces.s};
`;

// TODO Настроить темы
export const RadioGroup = ({
  options,
  label,
  name,
  required,
  className,
  disabled = false,
  onChange,
  errorMessage,
  direction = 'horizontal',
  status = 'default',
}: RadioGroupProps) => {
  const randomName = generateRandomName();

  return (
    <StyledWrapper className={className}>
      <div>
        <span>
          <StyledLabel status={status} disabled={disabled}>
            {label}
          </StyledLabel>
          {required && <StyledRequired>*</StyledRequired>}
        </span>
      </div>
      <StyledWrapperOptions direction={direction}>
        {options.map(({ label, value }, index) => {
          return (
            <Radio
              key={index}
              label={label}
              value={value}
              name={name || randomName}
              disabled={disabled}
              onChange={onChange}
            />
          );
        })}
      </StyledWrapperOptions>
      {errorMessage && (
        <StyledErrorMessage status={status} disabled={disabled}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </StyledWrapper>
  );
};
