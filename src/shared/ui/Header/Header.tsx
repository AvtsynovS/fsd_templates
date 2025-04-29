import styled from 'styled-components';

import { LogIn } from '../../assets';
import Logo from '../../assets/images/logo-primary.png';
import { ColorType, SizeType } from '../../lib';
import { LocalizationButton, useTranslate } from '../../localization';
import { ThemeButton } from '../../themes';
import { Button } from '../Button';
import { Title } from '../Title';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.spaces.l} 3vw`};
  background-color: ${({ theme }) => theme.bg.primary};
  /* TODO Добавить тени в тему? */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  & div > img {
    height: 2rem;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spaces.l};
`;

const StyledTitle = styled(Title)`
  margin: ${({ theme }) => theme.spaces.none};
`;

export const Header = () => {
  const translate = useTranslate();

  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="feature slice design logo" />
      </div>
      {/* TODO найти возможность объединять стили через явный проп компонента */}
      {/* forwardedAs merge parent and child styles */}
      <StyledTitle forwardedAs="h1" color="primary">
        {translate('page.home.title')}
      </StyledTitle>
      <StyledMenu>
        <LocalizationButton />
        <ThemeButton />
        <Button
          label={translate('button.label.singIn')}
          size={SizeType.SMALL}
          view={ColorType.SECONDARY}
          iconRight={<LogIn />}
          onClick={() => {
            console.log('sing in');
          }}
        />
        <Button
          label={translate('button.label.registration')}
          size={SizeType.SMALL}
          onClick={() => {
            console.log('Registration');
          }}
        />
      </StyledMenu>
    </StyledHeader>
  );
};
