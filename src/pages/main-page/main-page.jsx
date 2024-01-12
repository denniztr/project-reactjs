import { useSelector } from 'react-redux';
import { useGetAdvQuery } from '../../store/adv-api';
import { SearchQuery, CardsContent } from '../../components';
import styles from './main-page.module.scss';

export const MainPage = () => {
  const { data, isLoading } = useGetAdvQuery();
   const filteredData = useSelector((state) => state.adv.filteredData);

   const auth_modal = useSelector((state) => state.modal.authModal);
   const adv_modal = useSelector((state) => state.modal.advModal);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          { auth_modal || adv_modal ? null : <SearchQuery data={data} /> }
          <div className={styles.main__container}>
            <h2 className={styles.main__h2}>Объявления</h2>
            <CardsContent data={filteredData || data} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  );
};
