import { Route, Routes } from 'react-router-dom';
import { MainPage } from '../pages/index';

export const AppRoutes = () => {
  <Routes>
    <Route element={<MainPage />} path="/" />
  </Routes>
};
