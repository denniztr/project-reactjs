import './header.scss';

export const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <button className="header__btn-putAd btn-hov01" id="btputAd">
          Разместить объявление
        </button>
        <a>
          <button className="header__btn-lk btn-hov01" id="btnlk">
            Личный кабинет
          </button>
        </a>
        <button className="header__btn-lk btn-hov01" id="btnlk">
            Вход в личный кабинет
        </button>
      </nav>
    </header>
  );
};
