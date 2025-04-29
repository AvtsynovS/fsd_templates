import { useContext } from 'react';
import { styled } from 'styled-components';

import { SupportedTheme, ThemeContext, useTranslate } from '@shared';

import { Switcher } from '../../ui/Switcher';

const StyledWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spaces.s};

  & > p {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
  }
`;

export const ThemeButton = () => {
  const translate = useTranslate();
  const { onChangeTheme } = useContext(ThemeContext);

  const handleSwitch = (checked: boolean) => {
    onChangeTheme(checked ? SupportedTheme.DARK : SupportedTheme.LIGHT);
  };

  return (
    <StyledWrapper>
      <p>{translate('theme.light')}</p>
      <Switcher name="switch-theme" onChange={handleSwitch} />
      <p>{translate('theme.dark')}</p>
    </StyledWrapper>
  );
};
