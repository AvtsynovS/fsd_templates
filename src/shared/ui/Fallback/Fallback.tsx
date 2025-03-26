import { Link, useRouteError } from 'react-router';

import styled from 'styled-components';

import { ErrorImage } from '../../assets';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 20px;
  width: 100vw;
  height: 100vh;
`;

const StyledDescribe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 18px;

  & h4 {
    margin: 0;
  }

  & p {
    margin-bottom: 0;
  }
`;

// TODO нужно добавить типизацию
const StyledLink = styled(Link)`
  padding: 10px;

  &:hover {
    color: red;
  }

  &:active {
    color: darkred;
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
