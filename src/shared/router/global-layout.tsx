import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function GlobalLayout() {
  return (
    <Suspense fallback={<></>}>
      <Outlet />
    </Suspense>
  );
}
