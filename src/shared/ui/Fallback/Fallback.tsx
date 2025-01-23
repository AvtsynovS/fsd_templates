import { Link, useRouteError } from 'react-router';

import styled from 'styled-components';

import { ErrorImage } from '../../assets';

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__describe {
    padding: 10px;
    font-size: 18px;
  }
`;

const StyledDescribe = styled.span`
  padding: 10px;
  font-size: 18px;
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
  max-height: 180px;
`;

export const Fallback = () => {
  const error = useRouteError() as Error;

  return (
    <StyledWrapper>
      <StyledErrorImage />
      <h1>Something went wrong</h1>
      <StyledDescribe>
        {error?.name}
        {error?.message}
      </StyledDescribe>
      <StyledLink to="/">Go to home page</StyledLink>
    </StyledWrapper>
  );
};
