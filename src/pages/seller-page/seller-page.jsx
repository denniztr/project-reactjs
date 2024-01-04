import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SellerProfileData, NavigateToMainPage, CardsContent } from '../../components/index'
import { useGetUserListQuery } from '../../store/user-api';
import { useGetUserAdvQuery } from '../../store/adv-api';
import './seller-page.scss';

export const SellerPage = () => {
  const [seller, setSeller] = useState(null);
  const { id } = useParams();
  const { data, isLoading } = useGetUserListQuery();
  const { data: userAdv, isLoading: userAdvLoading } = useGetUserAdvQuery(id);

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
          <div className="main__content">
            <CardsContent data={userAdv} isLoading={userAdvLoading} />
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}