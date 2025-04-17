import { useContext } from 'react';
import { styled } from 'styled-components';

import { SupportedTheme, ThemeContext } from '@shared';

import { Switcher } from '../Switcher';

const StyledWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s};

  & > p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;

export const ThemeButton = () => {
  const { onChangeTheme } = useContext(ThemeContext);

  const handleSwitch = (checked: boolean) => {
    onChangeTheme(checked ? SupportedTheme.DARK : SupportedTheme.LIGHT);
  };

  // TODO Добавить интернационализацию проекта
  return (
    <StyledWrapper>
      <p>light</p>
      <Switcher name="switch-theme" onChange={handleSwitch} />
      <p>dark</p>
    </StyledWrapper>
  );
};
