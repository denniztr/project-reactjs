import { Route, Routes } from 'react-router-dom';
import { MainPage, AdvPage, SellerPage, ProfilePage } from '../pages/index';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainPage />} path="/" />
      <Route element={<AdvPage />} path="/adv/:id" />
      <Route element={<SellerPage />} path="/seller/:id" />
      <Route element={<ProfilePage />} path="/profile" />
    </Routes>
  );
};
