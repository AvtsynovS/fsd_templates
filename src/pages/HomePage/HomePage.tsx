import { Link } from 'react-router';
import styled from 'styled-components';

import { Button, ColorType, Title } from '@shared';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10vh;
  row-gap: 20px;
`;

const StyledWrapperBtn = styled.div`
  display: flex;
  gap: 20px;

  & button {
    font-weight: 500;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  & button {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const HomePage = () => {
  return (
    <StyledWrapper>
      <Title as="h3">Home Page</Title>
      <StyledLink to="/blog">
        <Button label="Go to Blog" />
      </StyledLink>

      <StyledWrapperBtn>
        <Button view={ColorType.PRIMARY} label="PRIMARY" />
        <Button view={ColorType.SECONDARY} label="SECONDARY" />
        <Button view={ColorType.GHOST} label="GHOST" />
        <Button view={ColorType.LINK} label="LINK" />
        <Button view={ColorType.DEFAULT} label="DEFAULT" />
        <Button view={ColorType.SUCCESS} label="SUCCESS" />
        <Button view={ColorType.WARNING} label="WARNING" />
        <Button view={ColorType.DANGER} label="DANGER" />
        <Button view={ColorType.PRIMARY} label="DISABLED" disabled />
      </StyledWrapperBtn>
    </StyledWrapper>
  );
};
