/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setAuthModal, setAdvModal } from '../../store/slice/modal-slice';
import SkyproLogoMobile from '../../assets/icons/logo-mob.png'

import './header.scss';

export const Header = ({ user }) => {
  const dispatch = useDispatch();
  // localStorage.clear()
  return (
    <header className="header">
      <Link to='/' className="mob-link">
        <img className="mob-img" alt="logo" src={SkyproLogoMobile} />
      </Link>
      <nav className="header__nav">
        {user ? (
          <>
            <button
              className="header__btn-putAd btn-hov01"
              id="btputAd"
              onClick={() => dispatch(setAdvModal())}
            >
              Разместить объявление
            </button>
            <Link to="/profile">
              <button className="header__btn-lk btn-hov01" id="btnlk">
                Личный кабинет
              </button>
            </Link>
          </>
        ) : (
          <button
            className="header__btn-lk btn-hov01"
            id="btnlk"
            onClick={() => dispatch(setAuthModal())}
          >
            Вход в личный кабинет
          </button>
        )}
      </nav>
    </header>
  );
};
