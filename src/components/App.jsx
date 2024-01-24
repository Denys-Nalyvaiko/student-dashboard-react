import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import SharedLayout from '../layouts/SharedLayout';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const AssignmentsPage = lazy(() => import('../pages/AssignmentsPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
