import { Link } from 'react-router';
import styled from 'styled-components';

import { Button, Title } from '@shared';

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
        <Button view="primary" label="PRIMARY" />
        <Button view="secondary" label="SECONDARY" />
        <Button view="ghost" label="GHOST" />
        <Button view="link" label="LINK" />
        <Button view="default" label="DEFAULT" />
        <Button view="success" label="SUCCESS" />
        <Button view="warning" label="WARNING" />
        <Button view="danger" label="DANGER" />
        <Button view="primary" label="DISABLED" disabled />
      </StyledWrapperBtn>
    </StyledWrapper>
  );
};
