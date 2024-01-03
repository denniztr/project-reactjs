import { Route, Routes } from 'react-router-dom';
import { MainPage, AdvPage } from '../pages/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<AdvPage />} path="/adv/:id" />
    </Routes>
  );
};
