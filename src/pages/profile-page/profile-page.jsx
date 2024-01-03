import { useGetUserQuery } from '../../store/user-api'
import { NavigateToMainPage, ProfilePageData } from '../../components'
import './profile-page.scss'

export const ProfilePage = () => {
  const {data, isLoading} = useGetUserQuery();
  
  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <div className='main__container'>
            <div className='main__center-block'>
              <NavigateToMainPage />
              { isLoading ? 'Загрузка' : <ProfilePageData data={data} /> }
              <h3 className='main__title title'>Мои товары</h3>
            </div>
            <p>карточки здесь</p>
          </div> 
        </main>
      </div>
    </div>
  )
}