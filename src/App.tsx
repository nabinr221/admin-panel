import { Suspense, lazy } from 'react';
import './styles/App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Loader from './components/loader/Loader';
const MainLayout = lazy(() => import('./components/layouts/MainLayout'));
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Products = lazy(() => import('./pages/products/Products'));

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/dashboard/overview',
          element: <h3> overview</h3>,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
