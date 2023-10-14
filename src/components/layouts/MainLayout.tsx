import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
import './layout.scss';
const Sidebar = lazy(() => import('../sidebar/Sidebar'));
const Navbar = lazy(() => import('../navbar/Navbar'));

const MainLayout = () => {
  return (
    <div className="layout-container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main-content">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
