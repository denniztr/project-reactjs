import { useGetUserQuery } from '../../store/user-api'
import { useGetMyAdvQuery } from '../../store/adv-api'
import { NavigateToMainPage, ProfilePageData, CardsContent } from '../../components'
import styles from './profile-page.module.scss'


export const ProfilePage = () => {
  const { data, isLoading } = useGetUserQuery();
  const { data: myAdvData, isLoading: myAdvLoading  } = useGetMyAdvQuery();
  console.log(myAdvData)
  return ( 
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className='main'>
          <div className={styles.main__container}>
            <div className={styles.main__center_block}>
              <NavigateToMainPage />
              { isLoading ? 'Загрузка' : <ProfilePageData data={data} /> }
              <h3 className={styles.main__title}>Мои товары</h3>
            </div>
            <CardsContent data={myAdvData} isLoading={myAdvLoading}/>
          </div> 
        </main>
      </div>
    </div>
  )
}