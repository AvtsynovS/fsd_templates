import { Link, useRouteError } from 'react-router';

import styled from 'styled-components';

import { ErrorImage } from '../../assets';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: ${({ theme }) => `${theme.spaces.none} ${theme.spaces.l}`};
  width: 100vw;
  height: 100vh;
`;

const StyledDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spaces.s};
  font-size: 18px;

  & h4 {
    margin: ${({ theme }) => theme.spaces.none};
  }

  & p {
    margin-bottom: ${({ theme }) => theme.spaces.none};
  }
`;

const StyledLink = styled(Link)`
  padding: ${({ theme }) => theme.spaces.s};
  color: ${({ theme }) => theme.colors.link};

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(65%);
  }
`;

const StyledErrorImage = styled(ErrorImage)`
  display: flex;
  width: 100%;
  max-width: 200px;
  height: auto;
`;

export const Fallback = () => {
  const error = useRouteError() as Error;

  return (
    <StyledWrapper>
      <StyledErrorImage />
      <h1>Something went wrong</h1>
      <StyledDescribe>
        <h4>{error?.name || 'error'}</h4>
        <p>{error?.message || 'message'}</p>
      </StyledDescribe>
      <StyledLink to="/">Go to home page</StyledLink>
    </StyledWrapper>
  );
};
