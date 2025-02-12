import { Outlet } from 'react-router';

import Header from './header';
import Sidebar from './sidebar';

import './Layout.scss';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout--content">
        <Sidebar />
        <main className="layout--content--main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
