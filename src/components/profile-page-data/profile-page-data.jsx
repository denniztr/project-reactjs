/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/slice/user-slice';
import { usePostUserAvatarMutation, useGetUserQuery, usePatchUserMutation } from '../../store/user-api/user-api';

import styles from './profile-page-data.module.scss';

export const ProfilePageData = ({ data }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const [name, setName] = useState(data.name);
  const [surname, setSurname] = useState(data.surname);
  const [city, setCity] = useState(data.city);
  const [phone, setPhone] = useState(data?.phone);


  const { refetch } = useGetUserQuery();
  const [postUserAvatar] = usePostUserAvatarMutation();
  const [patchUser] = usePatchUserMutation();
  // const user = JSON.parse(localStorage.getItem('user'))


  useEffect(() => {
    data && dispatch(setUser(data));
  }, [data, dispatch])

  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    const formData = new FormData()
    if (file) {
      formData.append('file', file);
      postUserAvatar(formData).then((res) => {
        console.log(res)
        refetch()
      });
    }
  };

  const handleSaveChangesClick = (event) => {
    event.preventDefault();
    patchUser({ name, surname, city, phone})
    .then((res) => {
      console.log(res)
      refetch()
    })
  }
  const handleHistoryBackClick = () => {
    window.history.back()
  }
  return (
    <>
      <h2 className={styles.main__h2} onClick={handleHistoryBackClick}>Здравствуйте, {user?.name}!</h2>
      <div className={styles.main__profile}>
        <div className={styles.profile__content}>
          <h3 className={styles.profile__title}>Настройки профиля</h3>
          <div className={styles.profile__settings}>
            <div className={styles.settings__left}>
              <div className={styles.settings__img} onClick={() => fileInputRef.current.click()}>
                <a target="_self">
                  {user?.avatar ? <img src={`http://localhost:8090/${user.avatar}`} alt="" /> : <img src='' alt="" /> }
                </a>
              </div>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(event) => {
                  event.preventDefault();
                  const file = event.target.files?.[0];
                  if (file) {
                    handleFileChange(file);
                  }
                }}
              />
            </div>
            <div className={styles.settings__right}>
              <form className={styles.settings__form} action="#">
                <div className={styles.settings__div}>
                  <label htmlFor="settings-fname">Имя</label>
                  <input
                    className={styles.settings__f_name}
                    id="settings-fname"
                    name="fname"
                    type="text"
                    defaultValue={user?.name}
                    // placeholder={user?.name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className={styles.settings__div}>
                  <label htmlFor="settings-lname">Фамилия</label>
                  <input
                    className={styles.settings__l_name}
                    id="settings-lname"
                    name="lname"
                    type="text"
                    defaultValue={user?.surname}
                    // placeholder={user?.surname}
                    onChange={(event) => setSurname(event.target.value)}
                  />
                </div>
                <div className={styles.settings__div}>
                  <label htmlFor="settings-city">Город</label>
                  <input
                    className={styles.settings__city}
                    id="settings-city"
                    name="city"
                    type="text"
                    defaultValue={user?.city}
                    // placeholder={user?.city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>
                <div className={styles.settings__div}>
                  <label htmlFor="settings-phone">Телефон</label>
                  <input
                    className={styles.settings__phone}
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    defaultValue={user?.phone}
                    // placeholder={user?.phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <button className={styles.settings__btn} id="settings-btn" onClick={(event) => handleSaveChangesClick(event)}>
                  Сохранить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
