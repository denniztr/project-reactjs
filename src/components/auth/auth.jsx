import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SlArrowLeft, SlClose } from 'react-icons/sl';
import SkyproLogoModal from '../../assets/icons/logo_modal.png';
import { setAuthModal } from '../../store/slice/modal-slice';

import './auth.scss';

export const Authorization = () => {
  const dispatch = useDispatch();
  const [loginMode, setLoginMode] = useState(false);

  const handleLoginModalChange = () => {
    setLoginMode(!loginMode);
  };

  return (
    <div className="modal-overlay">
      {loginMode ? (
        <div className="modal__block">
          <SlArrowLeft
            style={{
              position: 'absolute',
              top: '45px',
              left: '40px',
              cursor: 'pointer',
            }}
            onClick={handleLoginModalChange}
          />
          <form className="modal__form-login" id="formLogUp" action="#">
            <div className="modal__logo">
              <a>
                <img src={SkyproLogoModal} alt="logo" />
              </a>
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="loginReg"
              placeholder="email"
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              id="passwordFirst"
              placeholder="Пароль"
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              id="passwordSecond"
              placeholder="Повторите пароль"
            />
            <input
              className="modal__input first-name"
              type="text"
              name="first-name"
              id="first-name"
              placeholder="Имя (необязательно)"
            />
            <input
              className="modal__input first-last"
              type="text"
              name="first-last"
              id="first-last"
              placeholder="Фамилия (необязательно)"
            />
            <input
              className="modal__input city"
              type="text"
              name="city"
              id="city"
              placeholder="Город (необязательно)"
            />
            <button className="modal__btn-signup-ent" id="SignUpEnter">
              <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      ) : (
        <div className="modal__block">
          <SlClose             
            style={{
              position: 'absolute',
              top: '45px',
              left: '40px',
              cursor: 'pointer',
            }}
            onClick={() => dispatch(setAuthModal(false))}
            />
          <form
            className="modal__form-login"
            style={{ height: '100%' }}
            id="formLogIn"
            action="#"
          >
            <div className="modal__logo">
              <a>
                <img src={SkyproLogoModal} alt="logo" />
              </a>
            </div>
            <input
              className="modal__input login"
              type="text"
              name="login"
              id="formlogin"
              placeholder="email"
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              id="formpassword"
              placeholder="Пароль"
            />
            <button className="modal__btn-enter" id="btnEnter">
              <a>Войти</a>
            </button>
            <button
              className="modal__btn-signup"
              id="btnSignUp"
              onClick={handleLoginModalChange}
            >
              <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
