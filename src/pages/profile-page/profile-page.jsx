
import { NavigateToMainPage, ProfilePageData } from '../../components'
import './profile-page.scss'

export const ProfilePage = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <main className='main'>
          <div className='main__container'>
            <div className='main__center-block'>
              <NavigateToMainPage />
              <ProfilePageData />
              <h3 className='main__title title'>Мои товары</h3>
            </div>
            <p>карточки здесь</p>
          </div> 
        </main>
      </div>
    </div>
  )
}