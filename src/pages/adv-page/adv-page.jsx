import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetAdvByIdQuery } from '../../store/adv-api';
import { AdvContent, NavigateToMainPage, ReviewsComponent } from '../../components';
import './adv-page.scss';

export const AdvPage = () => {
  const reviews = useSelector((state) => state.modal.reviewsModal);
  const { id } = useParams();
  const { data, isLoading } = useGetAdvByIdQuery(id);

  return (
    <div className='wrapper'>
      <div className='container'>
        <NavigateToMainPage />
        <div className='main__artic artic'>
          <AdvContent data={data} isLoading={isLoading}/>
        </div>
      </div>
      { reviews && <ReviewsComponent id={id} /> }
    </div>
  )
}