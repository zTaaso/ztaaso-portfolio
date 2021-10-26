import * as React from 'react';

import Profile from '../Profile';

import GlobalStyles from '../../styles/global';

import * as S from './styles';

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <aside>
      <Profile />
    </aside>
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
);

export default Layout;
