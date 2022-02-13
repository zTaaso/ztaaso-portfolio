import * as React from 'react';

import GlobalStyles from '../../styles/global';

import * as S from './styles';
import Sidebar from '../Sidebar';

const Layout = ({ children }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Sidebar />
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
);

export default Layout;
