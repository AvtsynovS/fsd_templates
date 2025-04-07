import styled from 'styled-components';

import { LogIn } from '../../assets';
import Logo from '../../assets/images/logo-primary.png';
import { Button } from '../Button';
import { Title } from '../Title';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 3vw;
  /* TODO заменить после настройки темы */
  background-color: #0097a7;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  & :first-child {
    height: 2rem;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  column-gap: 20px;
`;

const StyledButton = styled(Button)`
  font-weight: 700;
`;

const StyledTitle = styled(Title)`
  margin: 0;
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
        <StyledButton
          label="Sing In"
          size="small"
          view="secondary"
          iconRight={<LogIn />}
          onClick={() => {
            console.log('sing in');
          }}
        />
        <StyledButton
          label="Registration"
          size="small"
          onClick={() => {
            console.log('Registration');
          }}
        />
      </StyledMenu>
    </StyledHeader>
  );
};
