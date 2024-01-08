import { useGetUserQuery } from '../../store/user-api'
import { useGetMyAdvQuery } from '../../store/adv-api'
import { NavigateToMainPage, ProfilePageData, CardsContent } from '../../components'
import './profile-page.scss'


export const ProfilePage = () => {
  const { data, isLoading } = useGetUserQuery();
  const { data: myAdvData, isLoading: myAdvLoading  } = useGetMyAdvQuery();
  console.log(myAdvData)
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
            <CardsContent data={myAdvData} isLoading={myAdvLoading}/>
          </div> 
        </main>
      </div>
    </div>
  )
}