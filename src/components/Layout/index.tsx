import * as React from 'react';

import Profile from '../Profile';

const Layout = ({ children }) => (
  <>
    <aside>
      <Profile />
    </aside>
    <main>{children}</main>
  </>
);

export default Layout;
