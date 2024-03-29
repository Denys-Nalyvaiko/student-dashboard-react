import { Suspense } from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading ...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
