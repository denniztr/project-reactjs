import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
    </Routes>
  );
};
