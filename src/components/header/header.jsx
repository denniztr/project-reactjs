import { useDispatch } from 'react-redux';
import { setAuthModal, setAdvModal } from '../../store/slice/modal-slice'; 

import './header.scss';

export const Header = () => {
  const dispatch = useDispatch()
  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__btn-putAd btn-hov01" id="btputAd" onClick={() => dispatch(setAdvModal())}>
          Разместить объявление
        </button>
        <a>
          <button className="header__btn-lk btn-hov01" id="btnlk">
            Личный кабинет
          </button>
        </a>
        <button className="header__btn-lk btn-hov01" id="btnlk" onClick={() => dispatch(setAuthModal())}>
            Вход в личный кабинет
        </button>
      </nav>
    </header>
  );
};
