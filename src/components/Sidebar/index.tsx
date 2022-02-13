import React from 'react';

import Profile from '../Profile';

import * as S from './styles';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => (
  <S.SidebarWrapper>
    <Profile />
  </S.SidebarWrapper>
);

export default Sidebar;
