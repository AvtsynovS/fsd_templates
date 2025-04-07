import { Outlet } from 'react-router';

import styled from 'styled-components';

import { Header } from '@shared';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.main`
  flex: 1 0 auto;
`;

export const Layout = () => {
  return (
    <StyledWrapper>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <footer>Footer</footer>
    </StyledWrapper>
  );
};
