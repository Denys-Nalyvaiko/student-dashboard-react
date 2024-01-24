import { Suspense } from 'react';
import { Outlet } from 'react-router';

const SharedLayout = () => {
  return (
    <>
      <h2>Shared Layout</h2>
      <Suspense fallback={<p>Loading ...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
