import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SellerProfileData, NavigateToMainPage, CardsContent } from '../../components/index'
import { useGetUserListQuery } from '../../store/user-api';
import { useGetUserAdvQuery } from '../../store/adv-api';
import styles from './seller-page.module.scss';

export const SellerPage = () => {
  const [seller, setSeller] = useState(null);
  const { id } = useParams();
  const { data, isLoading } = useGetUserListQuery();
  const { data: userAdv, isLoading: userAdvLoading } = useGetUserAdvQuery(id);

  useEffect(() => {
    setSeller(data?.find((user) => user.id === Number(id)))
  }, [data, id])

  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main__container}>
          <div className={styles.main__center_block}>
            <NavigateToMainPage />
            { isLoading ? 'Загрузка... ' : <SellerProfileData seller={seller} /> }
          </div>
          <div className={styles.main__content}>
            <CardsContent data={userAdv} isLoading={userAdvLoading} />
          </div>
        </div>
      </main>
    </div>
  </div>
  )
}