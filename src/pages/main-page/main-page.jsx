import { useGetAdvQuery } from '../../store/adv-api';
import { SearchQuery, CardsContent } from '../../components';
import styles from './main-page.module.scss';

export const MainPage = () => {
  const { data, isLoading } = useGetAdvQuery();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <SearchQuery/>
          <div className={styles.main__container}>
            <h2 className={styles.main__h2}>Объявления</h2>
            <CardsContent data={data} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  )
};
