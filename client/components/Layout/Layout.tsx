import { FunctionComponent } from 'react';

import TopBar from './TopBar/TopBar';

import css from './Layout.module.scss';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <div className={css.layout}>
      <TopBar />
      { children }
    </div>
  );
}

export default Layout;