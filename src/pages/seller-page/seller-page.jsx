import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SellerProfileData, NavigateToMainPage } from '../../components/index'
import { useGetUserListQuery } from '../../store/user-api';
import './seller-page.scss';

export const SellerPage = () => {
  const [seller, setSeller] = useState(null);
  const { id } = useParams();
  const { data, isLoading } = useGetUserListQuery();
  
  useEffect(() => {
    setSeller(data?.find((user) => user.id === Number(id)))
  }, [data, id])

  return (
    <div className="wrapper">
    <div className="container">
      <main className="main">
        <div className="main__container">
          <div className="main__center-block">
            <NavigateToMainPage />
            { isLoading ? 'Загрузка... ' : <SellerProfileData seller={seller} /> }
          </div>
          <div className="main__content"><h3>КАРТОЧКИ ПРОДАВЦА ЗДЕСЬ</h3></div>
        </div>
      </main>
    </div>
  </div>
  )
}