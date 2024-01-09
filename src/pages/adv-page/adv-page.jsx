import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetAdvByIdQuery } from '../../store/adv-api';
import { AdvContent, NavigateToMainPage, ReviewsComponent, EditAdvertisementComponent } from '../../components';

import styles from './adv-page.module.scss';

export const AdvPage = () => {
  const reviews = useSelector((state) => state.modal.reviewsModal);
  const edit = useSelector((state) => state.modal.editModal);

  const { id } = useParams();
  const { data, isLoading, refetch } = useGetAdvByIdQuery(id);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <NavigateToMainPage/>
        <div className={styles.main__artic}>
          <AdvContent data={data} isLoading={isLoading}/>
        </div>
      </div>
      { reviews && <ReviewsComponent id={id} /> }
      { edit && <EditAdvertisementComponent data={data} refetch={refetch} /> }
    </div>
  )
}