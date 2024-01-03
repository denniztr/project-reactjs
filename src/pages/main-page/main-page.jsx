import { useGetAdvQuery } from '../../store/adv-api';
import { SearchQuery, CardsContent } from '../../components';
import './main-page.scss';

export const MainPage = () => {
  const { data, isLoading } = useGetAdvQuery();

  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <SearchQuery/>
          <div className='main__container'>
            <h2 className='main__h2'>Объявления</h2>
            <CardsContent data={data} isLoading={isLoading} />
          </div>
        </main>
      </div>
    </div>
  )
};
