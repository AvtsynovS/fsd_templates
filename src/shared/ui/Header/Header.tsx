import styled from 'styled-components';

import { LogIn } from '../../assets';
import Logo from '../../assets/images/logo-primary.png';
import { ColorType, SizeType } from '../../lib';
import { Button } from '../Button';
import { Title } from '../Title';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => `${theme.space.l} 3vw`};
  background-color: ${({ theme }) => theme.bgColors.primary};
  /* TODO Добавить тени в тему? */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  & :first-child {
    height: 2rem;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  column-gap: ${({ theme }) => theme.space.l};
`;

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white};
`;

const StyledTitle = styled(Title)`
  margin: ${({ theme }) => theme.space.none};
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="feature slice design logo" />
      </div>
      {/* TODO найти возможность объединять стили через явный проп компонента */}
      {/* forwardedAs merge parent and child styles */}
      <StyledTitle forwardedAs="h1" color="primary">
        Home Page
      </StyledTitle>
      <StyledMenu>
        <Button
          label="Sing In"
          size={SizeType.SMALL}
          view={ColorType.SECONDARY}
          iconRight={<LogIn />}
          onClick={() => {
            console.log('sing in');
          }}
        />
        <StyledButton
          label="Registration"
          size={SizeType.SMALL}
          onClick={() => {
            console.log('Registration');
          }}
        />
      </StyledMenu>
    </StyledHeader>
  );
};
