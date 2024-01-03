/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../store/slice/user-slice';
import { usePostUserAvatarMutation, useGetUserQuery } from '../../store/user-api/user-api';

import './profile-page-data.scss';

export const ProfilePageData = ({ data }) => {
  const dispatch = useDispatch();

  const { refetch } = useGetUserQuery();
  const [postUserAvatar] = usePostUserAvatarMutation();
  
  // const user = JSON.parse(localStorage.getItem('user'))
  const user = useSelector((state) => state.user.user);

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

  return (
    <>
      <h2 className="main__h2">Здравствуйте, {user?.name}!</h2>
      <div className="main__profile profile">
        <div className="profile__content">
          <h3 className="profile__title title">Настройки профиля</h3>
          <div className="profile__settings settings">
            <div className="settings__left">
              <div className="settings__img" onClick={() => fileInputRef.current.click()}>
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
              {/* <label className="settings__change-photo" target="_self">
                Заменить
              </label> */}
            </div>
            <div className="settings__right">
              <form className="settings__form" action="#">
                <div className="settings__div">
                  <label htmlFor="settings-fname">Имя</label>
                  <input
                    className="settings__f-name"
                    id="settings-fname"
                    name="fname"
                    type="text"
                    // defaultValue="Ан"
                    placeholder={user?.name}
                  />
                </div>
                <div className="settings__div">
                  <label htmlFor="settings-lname">Фамилия</label>
                  <input
                    className="settings__l-name"
                    id="settings-lname"
                    name="lname"
                    type="text"
                    // defaultValue={user.city}
                    placeholder={user?.surname}
                  />
                </div>
                <div className="settings__div">
                  <label htmlFor="settings-city">Город</label>
                  <input
                    className="settings__city"
                    id="settings-city"
                    name="city"
                    type="text"
                    // defaultValue="Санкт-Петербург"
                    placeholder={user?.city}
                  />
                </div>
                <div className="settings__div">
                  <label htmlFor="settings-phone">Телефон</label>
                  <input
                    className="settings__phone"
                    id="settings-phone"
                    name="phone"
                    type="tel"
                    // defaultValue="89161234567"
                    placeholder={user?.phone}
                  />
                </div>
                <button className="settings__btn btn-hov02" id="settings-btn">
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
